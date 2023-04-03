import styled from "styled-components";

export const GroupsWrapper = styled.div`
    background-color: white;
    padding: 5vw 0;
    text-align: center;

    h1 {
        font-size: 3.5vw;
        margin-top: 1vw;
        margin-bottom: 1vw;
        font-weight: normal;
    }

    p {
        font-size: 2vw;
        margin-bottom: 5vw;
    }
`;

export const GroupsList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2vw auto;
    background-color: #feda30;
    width: 36.3vw;
    border-radius: 10vw;
    font-size: 1.3vw;
`;

export const AgeGroups = styled.div`
    padding: 2vw;
    cursor: pointer;
    width: 8vw;

    &:nth-child(1) {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
    }

    &:nth-child(2) {
        border-right-style: solid;
        border-left-style: solid;
        border-width: 0.15vw;

    }

    &:nth-child(3) {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }

    &:hover {
        background-color: #face01;
    }
    &:active {
        background-color: #e1b901;
    }
`;

export const Courses = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    gap: 2vw;
    margin: 3vw 8.66vw;
    -ms-overflow-style: none;
    scrollbar-width: none;
    justify-content: space-evenly;


    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Course = styled.div`
    width: 100%;
    height: auto;
`;

export const Cell = styled.div`
    width: 14.8vw;
    display: flex;
    padding: 2vw;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    background-color: white;

    border-style: solid;
    border-width: 0.1vw;
    border-radius: 20px;
    border-color: #2c1204;

    div {
        text-align: center;

        &:nth-child(2) {
            width: 70%;
            margin: 2vw auto 1vw;
            border-radius: 10vw;
            cursor: default;
        }

        &:nth-child(3) {
            font-size: 1.3vw;    
            height: 3vw;
        }

        p {
            font-size: 1vw;
            position: relative;
            top: -1.8vw;
            margin: 0;
        }
    }
`;

export const Button = styled.button`
    margin: 2vw auto 1vw;
    width: 90%;
    font-size: 1.5vw;
    background-color: rgb(165, 213, 204);
    color: rgb(44, 18, 4);
    border: none;
    padding: 0.5vw 1.5vw;
    border-radius: 10vh;
    cursor: pointer;
    transition: background-color 0.3s ease 0s;
    white-space: nowrap;

  &:hover {
    background-color: #c8e5d8;
    color: #4d2c04;
  }

  &:active {
    background-color: #d9ede5;
  }
`;