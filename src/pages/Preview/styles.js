import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: "header" "content";

  > header {
    grid-area: header;
  }
`;

export const Content = styled.div`
  /* width: 100%; */
  grid-area: content;
  height: auto;
  position: relative;
  margin: 4rem 11rem 14rem;

  display: flex;
  flex-direction: column;

  > .backButton > div {
    > svg {
      position: absolute;
      top: 0;
      left: 0;
    }
    > a {
      position: absolute;
      top: 0;
      left: 2.4rem;
    }
  }

  > main {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    > .title {
      display: flex;
      margin-top: 4.5rem;
      > h1 {
        font-family: "Roboto Slab", serif;
        font-size: 3.6rem;
        font-weight: 500;
        margin-right: 1.9rem;
      }

      > img {
        width: 2rem;
        margin-right: 1rem;
      }
    }

    > .subtitle {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-top: 2.4rem;
      img,
      svg {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }

      span {
        font-family: "Roboto", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
      }
    }

    > section {
      display: flex;
      margin-top: 4rem;
      gap: 0.8rem;
      > div {
        padding: 0.8rem 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      }
    }

    > p {
      margin-top: 4rem;
      font-family: "Roboto Slab", serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.11rem;
      text-align: justify;
    }
  }
`;
