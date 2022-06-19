import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  @media (max-width: 480px) {
    max-width: 350px;
  }
  margin: 10rem auto 0 auto;
  padding: 1.5rem 1rem;

  div.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: #727278;
    }

    div {
      position: relative;
      button {
        background: transparent;
      }

      div {
        background: var(--white-instructions-bg);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        width: 250px;
        position: absolute;
        border-radius: 0.85rem;
        z-index: 999;
        right: 1.5rem;
        top: 1.5rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        transform: scale(1);
        animation: scaleTransform 0.2s 1 ease-in;

        @keyframes scaleTransform {
          from {
            transform: scale(0);
          }

          to {
            transform: scale(1);
          }
        }

        button {
          width: 100%;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: #682c2a;
          letter-spacing: 0.8px;
          background: var(--white-instructions-bg);
          padding: 1rem 0 1rem 0.8rem;

          height: 100%;

          &:first-child {
            border-radius: 0.85rem 0.85rem 0 0;
          }
          &:last-child {
            border-radius: 0 0 0.85rem 0.85rem;
          }

          &:hover {
            filter: brightness(0.9);
          }

          img {
            margin-right: 8px;
            &:not(.edit-img) {
              width: 18px;
              height: 18px;
            }
          }
        }

        .hr-tasks {
          width: 100%;
          height: 1px;
          color: #682c2a;
          opacity: 0.3;
        }
      }
    }
  }

  hr.hr-header {
    width: 100%;
    margin: 0.3rem 0 1.5rem;
    color: #d5d5d5;
  }

  form.create-task {
    transform: scale(1);
    animation: scaleTransform 0.3s 1 ease-in;

    @keyframes scaleTransform {
      from {
        transform: scale(0);
      }

      to {
        transform: scale(1);
      }
    }

    width: 100%;
    background: #f5f5f5fa;
    border-radius: 0.85rem;

    div {
      input[type="text"] {
        background: transparent;
        height: 80px;
        font-size: 1.5rem;
        width: 100%;
        color: #727272;

        &::placeholder {
          font-style: italic;
          opacity: 0.4;
        }
      }
    }

    div {
      padding: 1rem 1.5rem;
      h2 {
        font-size: 1rem;
        color: #727278;
      }

      input[type="number"] {
        width: 20%;
        height: 40px;
        margin-top: 10px;
        background: #efefef;
        /* display: block; */
        padding: 10px;
        border: 1px solid #c4c4c4;
        border-radius: 0.25rem;
        color: #727272;
        margin-bottom: 15px;
      }

      div {
        display: inline-flex;
        button {
          border-radius: 0.25rem;
          height: 40px;
          width: 50px;
          background: var(--white-instructions-bg);
          border: 1px solid #c4c4c4;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
            rgba(0, 0, 0, 0.23) 0px 3px 6px;

          &:active {
            height: 39px;
            box-shadow: none;
          }

          & + button {
            margin-left: 10px;
          }
        }
      }

      button {
        background: transparent;
        text-decoration: underline;
        color: #727278;
        display: block;
      }

      textarea {
        width: 100%;
        padding: 0.6rem;
        outline: none;
        border: 1px solid #c4c4c4;
        border-radius: 0.25rem;
        font-size: 1.125rem;
        &::placeholder {
          opacity: 0.4;
          font-style: italic;
        }
      }
    }

    div.actions {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      background: #d5d5d5;
      width: 100%;
      max-height: 80px;

      border-radius: 0 0 0.85rem 0.85rem;

      div {
        width: 60%;

        button {
          background: transparent;
          border: none;
          outline: none;
          box-shadow: none;
        }
      }

      button {
        text-decoration: none;
        height: 40px;
        color: #727278;
        font-weight: 600;

        & + button {
          margin-left: 30px;
          background: ${({ color }) => color};
          color: var(--white);
          width: 80px;
          border-radius: 0.25rem;
        }
      }
    }
  }

  div.box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    transition: filter 0.3s;

    button.add-task-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #f5f5f5fa;
      border: 2px dashed ${({ color }) => color};
      color: #727278;
      border-radius: 0.85rem;
      width: 100%;
      padding: 1rem;

      font-size: 1.2rem;
      font-weight: 300;

      img {
        margin-right: 10px;
      }
    }

    div.task-container {
      background: #f5f5f5fa;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      width: 100%;
      padding: 0.85rem;
      border-radius: 0.85rem;
      position: relative;

      & + div,
      & + button {
        margin-top: 1.5rem;
      }

      display: flex;
      align-items: center;
      justify-content: space-between;
      
      flex-wrap: wrap;
      animation: translate 1 0.3s ease-in;

      @keyframes translate {
        from {
          transform: translateY(-50%);
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      &.selected {
        border: 2px solid ${({ color }) => color};
      }

      .checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        transition: filter 0.2s;
        @media (min-width: 768px) {
          &:hover {
            filter: brightness(0.8);
          }
        }
        animation: fade 0.2s 1 ease;
        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        div {
          margin-right: 10px;
          width: 2rem;
          height: 2rem;
          border: 2px solid #c4c4c4;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.15s, border-color 0.15s;
          &.checked {
            background: ${({ color }) => color};
            border-color: ${({ color }) => color};
            &:after {
              transform: scale(1);
            }
          }
          &:after {
            content: "✔";
            color: #fff;
            transform: scale(0);
            transition: transform 0.15s;
            @media (max-width: 500px) {
              font-size: 0.6rem;
            }
          }
        }
      }

      div.task-info {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: auto;  
        justify-self: flex-start;
        span {
          font-size: 1.2rem;
          font-weight: 300;
          /* word-break: break-all; */
          @media (max-width: 480px) {
            font-size: 1rem;
          }

          &.outlined {
            text-decoration: line-through;
            opacity: 0.6;
          }
        }

        small {
          font-size: 0.95rem;
          font-weight: 600;
        }
        
        & + div {
          display: block;
        }
      }
      
      .notes {
        flex-basis: 100%;
        margin-top: 30px;
        background: #c4c4c450;
        padding: 0.6rem;
        border-radius: 0.25rem;

        strong {
          color: ${({ color }) => color};
        }

        p {
          color: #682c2a;
          font-size: 1rem;
          font-style: italic;
          font-weight: 300;
        }
      }
    }

    div.timer-info {
      width: 100%;
      border-top: 1px solid #727278;
      margin-top: 1rem;
      padding: 1rem;
      background: #f5f5f5fa;
      color: var(--black-font);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      
      div {
        font-weight: 300;
        opacity: .7;
        font-size: 1rem;

        span {
          font-weight: bold;
          opacity: 1;
          font-size: 1.25rem;
        }
      }
      
      div + div {
        margin-left: 1rem;
      }
    }
  }
`;
