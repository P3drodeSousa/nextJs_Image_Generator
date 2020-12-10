import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  h1 {
    font-size: clamp(15px, 3vw, 45px);
    font-weight: 600;
    text-align: center;
    margin: 50px auto 100px auto;
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 2.5px;
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
