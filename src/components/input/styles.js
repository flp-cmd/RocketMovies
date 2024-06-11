import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 1rem;
  align-items: center;


  > input {
    width: 100%;
    height: 5.6rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 1rem;

    border: none;
    padding-left: 2.4rem;

    &::placeholder {
      font-family: "Roboto Slab", serif;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-left: 1.6rem;
  }
`;
