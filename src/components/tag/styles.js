import styled from "styled-components";

export const Container = styled.div`
  padding: .5rem 1.6rem;
  margin-right: .8rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  color: ${({ theme }) => theme.COLORS.GRAY_50};

  border: none;
  border-radius: 0.8rem;

  text-align: center;

  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
`;
