import styled from 'styled-components';

export const Container = styled.header`
    height: 100px;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    padding: 1rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content:space-between;

    @media(max-width: 480px) {
        width: 400px;
        margin-bottom: 30px;
    }

    div {  
        display: flex;
        align-items: center;
        flex-direction: row;
    
        h1 {
            font-size: 1.6rem;
            font-weight: bold;
            margin-left: 10px;
            display: flex;
            align-items: center;
            color: var(--black-font);
        }
    }

    button {
        height: 50px;
        width: 50px;
        background: transparent;
        transition: filter .3s;
        &:hover {
          filter: brightness(0.9);
        }
    }

`
