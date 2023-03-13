import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: white;
  overflow: auto;
  display: flex;
  justify-content: center;
`;

export const BlurredBackground = styled.div`
  filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
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

export const LeftArrow = styled(Arrow)`
  left: 10px;
`;

export const RightArrow = styled(Arrow)`
  right: 10px;
`;