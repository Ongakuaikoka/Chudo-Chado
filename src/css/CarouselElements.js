import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const Content = styled.div`
  padding: 20px;
  border-radius: 5px;
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-height: 80%;
  overflow: auto;
  display: flex;
  justify-content: center;
`;

export const BlurredBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  width: 2vw;
  right: 1vw;
  top: 1vw;
  z-index: 10000;
  position: absolute;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
`;

export const LeftArrow = styled.div`
  width: 3vw;
  left: 0px;
  z-index: 10000;
  position: absolute;
  cursor: pointer;
`;

export const RightArrow = styled.div`
  width: 3vw;
  right: 0px;
  z-index: 10000;
  position: absolute;
  cursor: pointer;
`;