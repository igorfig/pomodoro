import { useContext, useState, useCallback, createContext } from 'react';


const ModalContext = createContext({});

export function ModalProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleToggleModal = useCallback(() => {
        setIsModalOpen(prevState => !prevState);
    }, [])

    return (
        <ModalContext.Provider value={{isModalOpen, handleToggleModal}}>{children}</ModalContext.Provider>
    )
}

export function useModal() {
    const context = useContext(ModalContext);

    return context
}