import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AlbumGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2vw;
  margin: 3vw;
  padding-top: 5vw;
`;

export const AlbumCard = styled.div`
  width: 30vw;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  box-shadow: 2px 3px 12px 0px #a99685;
  border-radius: 10px;


  p {
    font-size: 1.2vw;
    position: absolute;
    bottom: 0vw;
    background: rgba(200, 229, 216, 0.9);
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 1vw 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover p {
    background: rgba(165, 213, 204, 0.9);
  }
`;

export const Cell = styled.div`
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 10vw;
  position: relative;
`;

export const Cover = styled.img`
  width: 100%;
  height: auto;
  overflow: hidden;
  height: 17vw;
  object-fit: cover;

  border-radius: 10px;
`;

export const AlbumsPageContent = styled.div`
  padding-top: 5vw;
`;

export const AlbumList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
`;

export const Album = styled.div`
  background-color: #d9ede5;
  border-radius: 10vw;
  padding: 1vw;
  margin: 1vw;
  cursor: pointer;

  &:hover {
    background-color: #c8e5d8;
  }
  &:active {
    background-color: #a5d5cc;
  }
`;

export const PhotoGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.2vw;
  margin: 3vw 9.7vw;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
`;
