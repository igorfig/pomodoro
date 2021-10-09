import styled from 'styled-components'

export const List = styled.ol`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-top: 20px;
   padding: 1rem;

    li {
      color: rgba(0, 0, 0, .6);
    }

    li + li {
      margin-top: 10px;
    }
`

