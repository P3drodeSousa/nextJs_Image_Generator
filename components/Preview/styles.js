import styled from "styled-components";

export const Container = styled.div`
  min-width: 50%;

  .image-wrapper {
    display: block;
    cursor: pointer;
    height: 500px;
    text-decoration: none;
    background: #fff;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    margin-bottom: 50px;
    transition: all 0.2s ease;
    min-width: 650px;
    width: 100%;

    &:hover {
      box-shadow: 0 1px 16px rgba(0, 0, 0, 0.1);
      border-color: #ddd;
    }

    img {
      max-width: 100%;
      transition: all 0.3s ease-in 0s;
    }
  }
`;
