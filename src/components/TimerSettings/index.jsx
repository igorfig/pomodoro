import { useState,  useCallback } from 'react';

import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { Button } from '../Button/index';
import { useModal } from '../../hooks/useModal'

import closeImg from '../../assets/images/close.svg'
import Switch from 'react-switch';
import { usePreferences } from '../../hooks/usePreferences'
Modal.setAppElement('#root');

export function TimerSettings() {
    const { userPreferences, updatePreferences } = usePreferences();

    const [ pomodoro, setPomodoro ] = useState(userPreferences['pomodoro'])
    const [ shortBreak, setShortBreak ] = useState(userPreferences['short-break'])
    const [ longBreak, setLongBreak ] = useState(userPreferences['long-break'])
    const [ longBreakInterval, setLongBreakInterval ] = useState(userPreferences['long-break-interval'])

    const [autoStartPomodoro, setAutoStartPomodoro] = useState(userPreferences['auto-start-pomodoro']);
    const [autoStartBreak, setAutoStartBreak] = useState(userPreferences['auto-start-break']);
    const [notifications, setNotifications] = useState(userPreferences['notifications']);
    

    const { isModalOpen, handleToggleModal } = useModal();

    function handleSubmit(e) {   
        e.preventDefault();

        if(pomodoro > 0 && shortBreak > 0 && longBreak > 0 && longBreakInterval > 0 && pomodoro <= 59 && shortBreak <= 69 && longBreak <= 59 && longBreakInterval <= 10) {
            updatePreferences({
                ...userPreferences,
                'pomodoro': pomodoro,
                'short-break': shortBreak,
                'long-break': longBreak,
                'long-break-interval': longBreakInterval,
                'auto-start-pomodoro': autoStartPomodoro,
                'auto-start-break': autoStartBreak,
                'notifications': notifications
            })
    
            handleToggleModal();
        } else {
            toast.error('Os valores são menores que 0, ou maiores que 59.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }
    }

    const handleSwitchAutoStartPomodoro = useCallback(() => setAutoStartPomodoro(prevState => !prevState), [])
    const handleSwitchAutoStartBreak = useCallback(() => setAutoStartBreak(prevState => !prevState), [])
    const handleSwitchNotificationsPreferences = useCallback(() => {
        setNotifications(prevState => !prevState)
    }, []);
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleToggleModal}
            overlayClassName="settings-modal-overlay"
            className="settings-modal"
            >
            <div className="header">
                <h2>Configurações do Timer</h2>
                <button type="button" onClick={handleToggleModal}>
                    <img src={closeImg} alt="Fechar Janela" />
                </button>
            </div>

            <hr />

            <form onSubmit={handleSubmit}>
                <h3>Tempo ( minutos )</h3>
                <div>
                    <div> 
                        <label htmlFor="pomodoro-input">Pomodoro</label>
                        <input
                            value={pomodoro}
                            type="tel"
                            inputMode='numeric'
                            pattern="[-+]?[0-9]*[.,]?[0-9]+"  
                            name="pomodoro" 
                            id="pomodoro-input" 
                            onChange={e => !isNaN(e.target.value) && setPomodoro(Number(e.target.value))}
                            />
                    </div>
                    <div> 
                        <label htmlFor="short-break-input">Pausa curta</label>
                        <input 
                            value={shortBreak}
                            type="tel"
                            inputMode='numeric'
                            pattern="[-+]?[0-9]*[.,]?[0-9]+"  
                            name="short-break" 
                            id="short-break-input" 
                            onChange={e => !isNaN(e.target.value) && setShortBreak(Number(e.target.value))}
                            />
                    </div>
                    <div>
                        <label htmlFor="long-break-input">Pausa longa</label>
                        <input
                            value={longBreak}
                            type="tel"
                            inputMode='numeric'
                            pattern="[-+]?[0-9]*[.,]?[0-9]+" 
                            name="long-break" 
                            id="long-break-input" 
                            onChange={e => !isNaN(e.target.value) &&setLongBreak(Number(e.target.value))}
                            />
                    </div>         
                </div>
                <hr />

                <div className="set-interval">
                    <label htmlFor="set-interval-input">Intervalo entre pausas longas</label>
                    <input
                        min={2}
                        max={10}
                        value={longBreakInterval}
                        type="tel"
                        inputMode='numeric'
                        pattern="[-+]?[0-9]*[.,]?[0-9]+" 
                        name="interval" 
                        id="set-interval-input" 
                        onChange={e => !isNaN(e.target.value) && setLongBreakInterval(Number(e.target.value))}
                    />
                </div>
                <hr />
                <div className="auto-start-pomodoro">
                    <span>Auto iniciar Pomodoro?</span>
                    <Switch
                        onChange={handleSwitchAutoStartPomodoro}
                        checked={autoStartPomodoro}
                        offColor="#ccc"
                        onColor="#D35149" 
                        uncheckedIcon={false} 
                        checkedIcon={false} />
                </div>
                <hr />
                <div className="auto-start-breaks">
                    <span>Auto iniciar Pausas?</span>
                    <Switch
                        onChange={handleSwitchAutoStartBreak}
                        checked={autoStartBreak} 
                        offColor="#ccc" 
                        onColor="#D35149"
                        uncheckedIcon={false} 
                        checkedIcon={false}/>
                </div>
                {("Notification" in window) && <>
                    <hr />  
                    <div className="on-off-notications">
                        <span>Habilitar notificações</span>
                        <Switch
                            onChange={handleSwitchNotificationsPreferences}
                            checked={notifications}
                            offColor="#ccc"
                            onColor="#D35149"
                            uncheckedIcon={false}
                            checkedIcon={false}
                        />
                    </div>
                </>}

                <Button type="submit">Salvar</Button>
            </form>
        </Modal>
    )
}