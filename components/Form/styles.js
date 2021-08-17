import styled from "styled-components";

export const Container = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: flex-end;

  div {
    :nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-self: flex-start;
    }
  }

  .dimensions {
    display: flex;
    width: 200px;

    > div {
      width: 100%;
    }
  }

  button {
    padding: 5px;
    border-radius: 20px;
    width: 100%;
    outline: none;
    background: transparent;
    cursor: pointer;
    border: 1px solid #eaeaea;

    &:hover {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      border-color: #ddd;
    }
  }

  label {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: clamp(16px, 2vw, 20px);

    .fieldName {
      display: inline-block;
      width: 100px;
      margin-right: 20px;
      text-align: right;
      font-size: 18px;
      font-weight: 500;
    }

    .fieldValue {
      width: 200px;
      display: inline-block;
      margin: 10px 80px;

      select {
        display: flex;
        align-items: center;
        background: transparent;
        outline: none;
        width: 100%;
        border: 1px solid #eaeaea;
        padding: 10px;
        cursor: pointer;
        border-radius: 2px;

        &:hover {
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          border-color: #ddd;
        }
      }

      input {
        border: 1px solid black;
        border-radius: 2px;
        width: 180px;
        padding: 5px;
        border: 1px solid #eaeaea;
        outline: none;
        padding: 10px;
        margin-bottom: 5px;

        &:hover {
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          border-color: #ddd;
        }
      }
    }
  }
`;
