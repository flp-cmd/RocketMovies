import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_PINK};

  border: none;
  border-radius: 1.6rem;

  > .title h1 {
    font-family: "Roboto Slab", serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: .8rem;
  }

  > div {
    img {
      margin-right: .6rem;
    }
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    text-align: justify;
    line-height: 1.9rem;
    margin: 1.5rem 0;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > footer {
    display: flex;
    width: 100%;
  }
`