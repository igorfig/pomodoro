import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";

import { Storage } from "../utils/storage";

const UserTasksContext = createContext();

export function UserTasksProvider({ children }) {
  const [data, setData] = useState(() => {
    const userTasks = Storage.get("user_tasks");

    return userTasks ? userTasks : [];
  });

  const [taskSelected, setTaskSelected] = useState({});
  const [taskId, setTaskId] = useState("");

  const getCurrentTaskId = useCallback((taskId) => setTaskId(taskId), []);

  useEffect(() => {
    const taskTitle = data.filter((task) => task.isSelected && task.title);
    setTaskSelected(taskTitle[0]);
  }, [data]);

  const handleCreateNewTask = (newData) => {
    if (taskId.length > 0) {
      const task = data.filter((task) => task.id === taskId);

      const prevData = data.filter((task) => task.id !== taskId);
      const dataUpdated = task.map((task) => ({
        ...task,
        title: newData.title,
        actsTotalAmount: newData.actsTotalAmount,
        notes: newData.notes,
      }));

      setData([...prevData, ...dataUpdated]);
    } else setData([...data, newData]);
  };

  const handleSelectTask = (id) => () => {
    data.forEach((task) => {
      if (task.id !== id) {
        task.isSelected = false;
      }
    });

    const task = data.filter((task) => id === task.id);

    const newData = task.map((task) => ({
      ...task,
      isSelected: !task.isSelected,
    }));

    const dataUpdated = data.map((task) => {
      if (task.id === id) {
        return newData[0];
      }

      return task;
    });

    setData(dataUpdated);
  };

  const handleToggleTaskCompletion = (id) => (event) => {
    const task = data.filter((task) => task.id === id);
    event.stopPropagation();
    const newData = task.map((task) => ({
      ...task,
      isDone: !task.isDone,
    }));

    const tasksUpdated = data.map((task) => {
      if (task.id === id) {
        return newData[0];
      }

      return task;
    });

    setData(tasksUpdated);
  };

  const handleCompleteAllTasks = () =>
    setData(() => {
      return data.map((task) => ({
        ...task,
        isDone: true,
      }));
    });

  const handleDeleteTask = (id, setIsCreateNewTaskWindowOpen) => () => {
    const tasksNotDeleted = data.filter((task) => task.id !== id);

    setData(tasksNotDeleted);

    setIsCreateNewTaskWindowOpen(false);
  };

  const handleDeleteAllTasksDone = () => {
    const tasks = data.filter((task) => !task.isDone);

    setData(tasks);
  };

  const handleDeleteAllTasks = () => setData([]);

  const handleClearActs = () =>
    setData(() => {
      return data.map((task) => ({
        ...task,
        acts: 0,
      }));
    });
    
  const updateActs = useCallback(() => {
    const taskSelected = data.filter(task => task.isSelected);
    if(taskSelected.length > 0) {
      const taskActUpdated = taskSelected.map(task => ({
        ...task,
        acts: task.acts + 1
      }))

      const filteredArray = data.filter(task => task.id !== taskActUpdated[0].id);

      const newData = [...filteredArray, ...taskActUpdated];

      setData(newData);
      
    }
  }, [data])

  useEffect(() => {
    Storage.set("user_tasks", data);
  }, [data]);

  return (
    <UserTasksContext.Provider
      value={{
        data,
        taskId,
        getCurrentTaskId,
        handleCreateNewTask,
        taskSelected,
        handleToggleTaskCompletion,
        handleCompleteAllTasks,
        handleDeleteTask,
        handleDeleteAllTasksDone,
        handleDeleteAllTasks,
        handleClearActs,
        updateActs,
        handleSelectTask,
      }}
    >
      {children}
    </UserTasksContext.Provider>
  );
}

export const useTask = () => useContext(UserTasksContext);
