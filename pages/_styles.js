import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  h1 {
    font-size: clamp(15px, 3vw, 35px);
    font-weight: 600;
    text-align: center;
    margin: 50px auto;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
