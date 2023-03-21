import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'


export const Home = styled.div`
  padding-top: 5vw;

  h1 {
    font-size: 3em;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.5em;
    margin-bottom: 2em;
  }
`;

export const ProgLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgLink = styled(Link)`
  font-size: 2em;
  margin-bottom: 1em;
  padding: 0.5em 1em;
  border: 2px solid #555;
  border-radius: 5px;
  color: #555;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #555;
    color: #fff;
  }
`;

export const Background = styled.div`
  height: 100vh;
  display: flex; 
  justify-content: center;
`;

export const MainText = styled.div`
  color: #2c1204;
  position: absolute;
  left: 55vw;
  right: 2vw;
  top: 10vw;
  display: flex;
  flex-direction: column;
  text-align: justify;

  h1 {
    font-size: 4.5vw;
    margin: 2vw 3vw 1vw 8vw;
  }

  p {
    font-size: 1.5vw;
    margin: 2vw 3vw 1vw 8vw;
  }
`;

const clouds = keyframes`
  to {
    transform: translateX(10vw);
  }
`

const bird = keyframes`
  to {
    transform: translate(-5vw, 5vw);
  }
`

export const Chick = styled.img`
  position: absolute;
  width: 80vw;
  max-height: 100vh;
  object-fit: contain;
  left: 0;
`;

export const Cloud_1 = styled.div`
  width: 18vw;
  object-fit: contain;
  left: 6vw;
  top: 10vw;
  position: absolute;

  animation: ${clouds} 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -2s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

export const Cloud_2 = styled.div`
  width: 8.5vw;
  object-fit: contain;
  position: absolute;
  left: 2vw;
  top: 22vw;


  animation: ${clouds} 1s linear reverse infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

export const Bird = styled.img`
  object-fit: none;
  position: absolute;
  left: 25vw;
  top: 24vw;

  animation: ${bird} 0.5s linear reverse infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -0.5s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

export const Button = styled.button`
  margin: 2vw 3vw 1vw auto;
  width: 25vw;
  height: 4vw;
  font-size: 2vw;
  background-color: #a5d5cc;
  color: #2c1204;
  border: none;
  padding: 0.5vw 1.5vw;
  border-radius: 10vh;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;


  &:hover {
    background-color: #c8e5d8;
    color: #4d2c04;
  }

  &:active {
    background-color: #d9ede5;
  }
`;