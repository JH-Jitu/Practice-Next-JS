import styled from "styled-components";

export const Container = styled.div`
  margin: auto 30px;
`;

export const CenteredComponent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: red;
  }
`;
export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  /* grid-gap: 20px; */
`;
export const Post = styled.div`
  grid-column: span 6;
`;
