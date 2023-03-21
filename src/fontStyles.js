import { createGlobalStyle } from "styled-components";
import Verdana from "./fonts/verdana.ttf";
import VerdanaBold from "./fonts/verdana-bold.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto Condensed';
  src: url(${Verdana}) format('ttf'),
       url(${VerdanaBold}) format('ttf');
}

body {
    font-family: 'Verdana', sans-serif;
    margin: 0;
  }
`;

export default FontStyles;