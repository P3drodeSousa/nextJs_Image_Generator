import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    right: 20px;
    width: 400px;
    border-radius: 5px;
    background: black;
    color: white;
    padding: 20px;
    font-size: 18px;
    transition: all 0.4s ease;
    transform:  ${props => props.show ? 'translateY(-20px)' : 'translateY(70px)'};
`;
