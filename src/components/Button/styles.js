import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    margin-top: 30px;
    width: 100%;
    height: 50px;
    border-radius: 100px;
    font-size: 1.4rem;
    font-weight: bold;
    color: #f6f8fd;

    transition: all .3s;
    background: ${({ background }) => background ? background :' #D35149'};

    &:hover {
        filter: brightness(.9);
    }
`