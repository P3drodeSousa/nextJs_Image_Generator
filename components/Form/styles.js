import styled from 'styled-components';

export const Container = styled.div`
    > div {
        display: flex;
        justify-content: space-between;
        margin: 30px auto;
        width: 300px;
    }

    label {
        font-weight: 600;
        font-size: clamp(16px, 2vw, 20px);
    }

     select {
        border:  1px solid black;
        border-radius: 2px;
        width: 150px;
        padding: 10px;
     }

     input {
        border:  1px solid black;
        border-radius: 2px;
        width: 150px;
        padding: 5px;
     }

    

`;
