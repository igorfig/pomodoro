import { useState, useCallback, useEffect, useRef } from "react";
import { toast } from "react-toastify";

import { Container } from "./styles";

import { useTask } from "../../hooks/useTask";
import { hashIdGenerator } from "../../utils/hash";

import addTomatoImg from "../../assets/images/colors/add-tomato.svg";
import addGreenImg from "../../assets/images/colors/add-green.svg";
import addBlueImg from "../../assets/images/colors/add-blue.svg";
import dotsImg from "../../assets/images/dots.svg";
import trashImg from "../../assets/images/trash.svg";
import checkImg from "../../assets/images/check.svg";
import upImg from "../../assets/images/up.svg";
import downImg from "../../assets/images/down.svg";
import editImg from '../../assets/images/edit.svg'

export function TaskList({ timeLeft, timerOption, currentColor }) {
  const {
    data,
    taskId,
    getCurrentTaskId,
    handleCreateNewTask,
    handleToggleTaskCompletion,
    handleCompleteAllTasks,
    handleDeleteTask,
    handleDeleteAllTasksDone,
    handleDeleteAllTasks,
    handleClearActs,
    updateActs,
    handleSelectTask,
  } = useTask();

  const [isCreateNewTaskWindowOpen, setIsCreateNewTaskWindowOpen] =
    useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isNotesFieldOpen, setIsNotesFieldOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [pomodoroActs, setPomodoroActs] = useState(1);
  const [notes, setNotes] = useState("");

  const optionsDivRef = useRef();

  const closeOptionsWhenOutsideClick = useCallback((event) => {
      if(event.target !== optionsDivRef.current && isOptionsVisible) {
        setIsOptionsVisible(false);
      }
  }, [isOptionsVisible])

  useEffect(() => {
    window.addEventListener('click', closeOptionsWhenOutsideClick)
    return () => window.removeEventListener('click', closeOptionsWhenOutsideClick)
  }, [closeOptionsWhenOutsideClick])

  useEffect(() => {
    if (!isCreateNewTaskWindowOpen) {
      setTaskTitle("");
      setPomodoroActs(1);
      setIsNotesFieldOpen(false);
      setNotes("");
      getCurrentTaskId('');
    }
  }, [isCreateNewTaskWindowOpen, getCurrentTaskId]);

  
  const handleChange = (e) => setTaskTitle(e.target.value);
  
  const handleChangeNotes = (e) => setNotes(e.target.value);

  const handleSetPomodoroActs = (e) => setPomodoroActs(Number(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(taskTitle.length > 0 && pomodoroActs > 0)) {
      throw new Error(toast.error('Algo deu errado! Verifique se os campos foram preenchidos corretamente e tente novamente.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }));
    }

    try {
      handleCreateNewTask({
        id: hashIdGenerator(),
        title: taskTitle,
        isDone: false,
        isSelected: false,
        actsTotalAmount: pomodoroActs,
        acts: 0,
        notes,
      });
      
      setIsCreateNewTaskWindowOpen(false);
    } catch (e) {
      // error
    }
  };
  
  const handleToggleEditTaskWindow = (task) => (event) => {
      if(task) {
        event.stopPropagation();
        setIsCreateNewTaskWindowOpen(prevState => !prevState);
        setTaskTitle(task.title);
        setPomodoroActs(task.actsTotalAmount)
        setNotes(task.notes)
        getCurrentTaskId(task.id)

        task.notes ? setIsNotesFieldOpen(true) : setIsNotesFieldOpen(false);
      }
  }

  const handleIncrement = () => setPomodoroActs((prevState) => prevState + 1);
  const handleDecrement = () => setPomodoroActs((prevState) => prevState - 1);

  useEffect(() => {
    if(timeLeft.secondsAmount === 0 && timerOption === 'pomodoro') {
      updateActs();
    }
  }, [timerOption, timeLeft, updateActs])

  return (
    <Container color={currentColor}>
      <div className="header">
        <h2>Suas Tarefas</h2>
        <div>
          <button
            type="button"
            onClick={() => setIsOptionsVisible((prevState) => !prevState)}
          >
            <img src={dotsImg} alt="Menu" />
          </button>
          {isOptionsVisible && (
            <div ref={optionsDivRef}>
              <button type="button" onClick={handleDeleteAllTasksDone}>
                <img src={trashImg} alt="Lixeira" />
                Limpar tarefas concluídas
              </button>

              <button type="button" onClick={handleClearActs}>
                <img src={checkImg} alt="" />
                Limpar sessões concluídas
              </button>

              <hr className="hr-tasks" />
              <button type="button" onClick={handleCompleteAllTasks}>
                <img src={checkImg} alt="Concluir" />
                Concluir todas as tarefas
              </button>
              <button type="button" onClick={handleDeleteAllTasks}>
                <img src={trashImg} alt="Lixeira"/>
                Limpar todas as tarefas
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className="hr-header" />
      {!isCreateNewTaskWindowOpen && (
        <div className="box">
          {data &&
            data.map((task) => (
              <div
                className={`task-container ${
                  task.isSelected ? "selected" : ""
                }`}
                key={task.id}
                onClick={handleSelectTask(task.id)}
              >
                <div
                  className="checkbox"
                  onClick={handleToggleTaskCompletion(task.id)}
                >
                  <div
                    className={`checkbox-box ${task.isDone ? "checked" : ""}`}
                  ></div>
                </div>
                <div className="task-info">
                  <span title={task.title} className={task.isDone ? "outlined" : ""}>
                    {task.title.length > 25 ? task.title.substr(0, 25) + "..." : task.title}
                  </span>
                </div>

                <div className="pomodoro-acts">
                  {!task.isDone && (
                    <span>
                      {task.acts}/{task.actsTotalAmount}
                    </span>
                  )}
                </div>
                <button type="button" className="edit-btn" onClick={handleToggleEditTaskWindow(task)}>
                  <img src={editImg} alt="Editar Tarefa" />
                </button>
               
                {task.notes && (
                  <div className="notes">
                    <strong>Notas:</strong>
                    <p>{task.notes}</p>
                  </div>
                )}
              </div>
            ))}
          <button
            className="add-task-btn"
            type="button"
            onClick={() => setIsCreateNewTaskWindowOpen((prevState) => !prevState)}
          >
            {currentColor === '#FE504F' && <img src={addTomatoImg} alt="add"/> }
            {currentColor === '#468E91' && <img src={addGreenImg} alt="add"/> }
            {currentColor === '#437EA8' && <img src={addBlueImg} alt="add"/> }
            Adicionar Tarefa
          </button>

          <div className="timer-info">
            <div>Acts: <span>{
              data.map(task => task.acts).reduce((taskActs, accumulator) => accumulator += taskActs, 0)
              }</span></div>
            <div>Termina em <span>{timeLeft.minutes}:{timeLeft.seconds}</span></div>
          </div>
        </div>
      )}

      {isCreateNewTaskWindowOpen && (
        <form  onSubmit={handleSubmit} className="create-task">
          <div>
            <label className="sr-only" htmlFor="input#text">
              No que você está focado?
            </label>
            <input
              type="text"
              id="input#text"
              placeholder="No que você está focado?"
              value={taskTitle}
              onChange={handleChange}
            />
          </div>

          <div>
            <h2>Pomodoros?</h2>
            <label className="sr-only" htmlFor="input#number">
              Você deseja manter esta tarefa por quantos pomodoros?
            </label>
            <input
              type="number"
              id="input#number"
              value={pomodoroActs}
              onChange={handleSetPomodoroActs}
            />
            <div>
              <button type="button" onClick={handleIncrement}>
                <img src={upImg} alt="Acrescentar" />
              </button>
              <button type="button" onClick={handleDecrement}>
                <img src={downImg} alt="Decrescentar" />
              </button>
            </div>
            {!isNotesFieldOpen && (
              <button
                onClick={() => setIsNotesFieldOpen((prevState) => !prevState)}
              >
                + Adicionar Nota
              </button>
            )}
            {isNotesFieldOpen && (
              <>
                <label className="sr-only" htmlFor="textarea">
                  Escreva sua nota
                </label>
                <textarea
                  id="textarea"
                  cols="10"
                  rows="5"
                  placeholder="Escreva suas notas"
                  value={notes}
                  onChange={handleChangeNotes}
                ></textarea>
              </>
            )}
          </div>

          <div className="actions">
            {taskId && <div>
              <button type="button" onClick={handleDeleteTask(taskId, setIsCreateNewTaskWindowOpen)}>Deletar</button>
            </div>}

            <button
              type="button"
              onClick={() =>
                setIsCreateNewTaskWindowOpen((prevState) => !prevState)
              }
            >
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      )}
    </Container>
  );
}