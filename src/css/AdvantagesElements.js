import styled from "styled-components";
import image from '../img/Preschool/01.jpeg';

export const Wrapper = styled.div`
    h1 {
        text-align: center;
        font-size: 3.5vw;
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
    h1 {
        text-align: left;
        font-size: 2vw;
        margin-left: 2vw;
    }
    p {
        text-align: left;
        font-size: 1.3vw;
        width: 60%;
        margin: 4vw 0 0 2vw;
    }
`;

