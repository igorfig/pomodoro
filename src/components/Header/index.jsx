import { Container } from './styles'

import logo from '../../assets/images/logo.svg'
import gearImg from '../../assets/images/gear.svg'
import editImg from '../../assets/images/edit.svg'

import { TimerSettings } from '../TimerSettings/index'
import { useModal } from '../../hooks/useModal'

export function Header() {
    const { isModalOpen, handleToggleModal } = useModal();
    return (
        <>
        <Container>
            <div>
                <img src={logo} width="48" height="48"  alt="logo"/>
                <h1>Pomolife</h1>
            </div> 
            <button type="button" onClick={handleToggleModal}>
                <img src={gearImg} width="30" height="30" alt="Preferências" />
            </button>
        </Container>
        <hr />
        {isModalOpen && (
            <TimerSettings />
            )}
        </>
    )
}