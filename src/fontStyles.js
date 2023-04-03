import { createGlobalStyle } from "styled-components";
import Verdana from "./fonts/verdana.ttf";
import VerdanaBold from "./fonts/verdana-bold.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Verdana';
  src: url(${Verdana}) format('ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Verdana';
  src: url(${VerdanaBold}) format('ttf');
  font-weight: 700;
}

body {
    font-family: 'Verdana', sans-serif;
    margin: 0;
  }
`;

export default FontStyles;