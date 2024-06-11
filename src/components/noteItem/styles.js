import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* gap: 1.6rem; */

  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.COLORS.GRAY_300};

  border: ${({ theme, isnew }) => isnew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none" };

  border-radius: 1rem;
  padding-right: 1.6rem;


  > button {
    border: none;
    background: none;

    > svg { 
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .button-delete{
    color: ${({ theme }) =>  theme.COLORS.PINK};
  }

  .button-add{
    color: ${({ theme }) =>  theme.COLORS.PINK};
  }

  > input {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;

    height: 5.6rem;
    width: auto;

    padding: 1.2rem;
    color: ${({ theme }) =>  theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({ theme }) =>  theme.COLORS.GRAY_100};
    }
  }
`