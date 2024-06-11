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
  margin: 4rem 11.5rem;
  padding-bottom: 9.3rem;

  display: flex;
  flex-direction: column;

  > .backButton {
    position: absolute;
    top: 0;
    left: 0;
  }

  > main {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    h1 {
      font-family: "Roboto Slab", serif;
      font-size: 3.6rem;
      font-weight: 500;
      margin-right: 1.9rem;
      margin-top: 4.5rem;
    }

    > .Inputs {
      display: flex;
      gap: 4rem;
      margin: 4rem 0;

      > img {
        width: 2rem;
        margin-right: 1rem;
      }
    }

    > textarea {
      width: 100%;
      height: 14.5rem;
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 1rem;
      padding-top: 1.9rem;
      resize: none;

      border: none;
      padding-left: 2.4rem;

      &::placeholder {
        font-family: "Roboto Slab", serif;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
    }

    > h2 {
      margin-top: 4rem;
      margin-bottom: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2rem;
      font-weight: 400;
      font-family: "Roboto Slab", serif;
  }

  .notes{
    display: flex;
    /* justify-content: space-between; */
    gap: 2.4rem;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: .8rem;
    padding: 1.6rem;
  }

  .botoes {
    display: flex;
    gap: 4rem;
    margin-top: 4rem;

    > button {
      height: 5.6rem;
      border-radius: 1rem;
    }

    > button:nth-of-type(1) {
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
}
`
