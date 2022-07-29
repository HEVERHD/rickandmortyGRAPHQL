import styled from "styled-components";

export const Button = styled.button`
    scroll-behavior: smooth;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.1s;
    background: #fff;
    color: #000;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    &:hover {
        background: #28527a;
        color: #fff;
    }
`;
export const ButtonDelete = styled.a`
    scroll-behavior: smooth;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.1s;
    background: #fff;
    color: #000;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
    &:hover {
        background: red;
        color: #fff;
    }
`;
