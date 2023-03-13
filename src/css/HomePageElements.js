import { Link } from 'react-router-dom';
import styled from "styled-components";


export const Home = styled.div`
  text-align: center;

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