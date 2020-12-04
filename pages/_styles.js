import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  height: 100vh;
  margin-left: 20vw;
  overflow: hidden;

  h1 {
    font-size: clamp(15px, 3vw, 35px);
    font-weight: 600;
    text-align: center;
    margin-bottom: 75px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
