import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 100px 40px;
`;

export const AlbumCard = styled.div`
  width: 100%;
  height: auto;
`;

export const Cover = styled.img`
  width: 100%;
  height: auto;
`;

export const AlbumList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
`;

export const Album = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

export const PhotoGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.img`
  max-width: 20%;
  max-height: 80vh;
  object-fit: contain;
  margin: 20px;
`;
