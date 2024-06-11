import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  border: none;
  border-radius: .8rem;
  padding: 3.2rem;

  font-family: "Roboto Slab", serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.1rem;
`;
