import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;

    div {
      background: rgba(117, 116, 116, 0.3);
      height: 15px;
      width: 15px;
      border-radius: 50%;

      &.completed {
        background: ${props => ( props.color )};
      }
    }
    
    div + div {
      margin-left: 20px;
  }
`
