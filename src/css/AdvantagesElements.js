import styled from "styled-components";
import image from '../img/Preschool/01.jpeg';

export const Wrapper = styled.div`
    padding: 5vw 0px;

    h1 {
        text-align: center;
        font-size: 3.5vw;
        margin-top: 1vw;
        font-weight: normal;
    }
    p {
        text-align: center;
        font-size: 2vw;
    }
`;

export const Advantages = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6vw;
    margin: 5vw 10vw;
`;

export const Advantage = styled.div`
    width: 37vw;
    height: 20vw;
    border-radius: 20px;
    background: linear-gradient(to left, transparent, 10%, white 90%),
    url(${image});
    background-size: cover;

    div {
        display: flex;
        flex-direction: row;
        margin: 2vw 0 0 1vw;
    }

    svg {
        width: 2vw;
    }

    h1 {
        margin-left: 1vw;
        text-align: left;
        font-size: 2vw;
        font-weight: normal;
    }

    p {
        text-align: left;
        font-size: 1.3vw;
        width: 60%;
        margin: 2vw 0 0 3vw;
    }
`;

