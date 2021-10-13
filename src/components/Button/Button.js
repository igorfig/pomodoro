import styled from 'styled-components'

export const ButtonWrapper = styled.div`
    width: 100%;
    margin-top: 30px;
    button {
        width: 100%;
        height: 50px;
        border-radius: 100px;
        font-size: 20px;
        font-weight: bold;
        color: #f6f8fd;
        background: ${props => ( props.background )};
    }

`