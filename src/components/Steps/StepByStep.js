import styled from 'styled-components'

export const List = styled.ol`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-top: 20px;
   padding: 1rem;

    li {
      color: ${({ theme } ) => ( theme.text )};
    }

    li + li {
      margin-top: 10px;
    }
`

