import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: white;
    padding: 5vw 0;
    text-align: center;

    h1 {
        font-size: 3.5vw;
        margin-top: 1vw;
        margin-bottom: 1vw;
        font-weight: normal;
    }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin: 5vw 5vw;
`;


export const YandexMap = styled.div`
    position: relative;
    overflow: hidden;
    width: 45vw;
    height: 30vw;
    box-shadow: rgb(169, 150, 133) 2px 3px 20px 0px;

    iframe {
        width: 100%;
        height: 100%;
        border 0;
    }
`;

export const Text = styled.div`
    width: 40vw;
    margin-left: 5vw;
    font-size: 1.3vw;
    text-align: left;

    p {
        font-size: 1.3vw;
        margin-bottom: 3vw;

        &:nth-child(1) {
            margin-top: 5vw;
        }
    }
`;

export const Bird = styled.div`
    width: 10vw;
    margin: 5vw 0 0 30vw;
`;