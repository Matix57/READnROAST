import { styled } from "styled-components";

export const NoPaddingWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 75px);
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  top: 75px;
  left: 0;
`;
export const CategoryContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
export const ColumnContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  &:hover .overlay {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding: 1rem;

  & h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  & p {
    text-align: center;
    width: 50%;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
