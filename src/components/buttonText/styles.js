import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK};


  > a {
    font-family: "Roboto Slab", serif;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;
    font-weight: 400;
    margin-left: .8rem;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`