import styled from "styled-components";

export const Container = styled.div`
  margin: auto 30px;
  padding: 0;
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

export const BackgroundWave = styled.div`
  background-image: url(${(props) => props.bgPhoto.src});
  background-repeat: no-repeat;
  background-position: center;
  height: 200vh;
  width: 100%;
  background-size: contain;

  & div {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & section {
      width: 500px;
      text-align: center;

      & h1 {
        font-size: 40px;
      }
    }
  }
`;
