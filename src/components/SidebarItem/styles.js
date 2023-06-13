import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color:#074598;
    font-size:17px;
    color: #CEDEEB;
    padding: 6px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 10px 20px;

    >svg{
        margin: 0 20px;
    }

    &:hover{
        background-color: #EE1B2E;
    }
`;