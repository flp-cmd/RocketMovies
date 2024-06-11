import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  padding: 0 12.3rem;

  display: flex;
  align-items: center;
  gap: 6.4rem;
  justify-content: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > .logo h2 {
    font-family: "Roboto Slab", serif;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 6.4rem;
    height: 6.4rem;

    border-radius: 50%;
  }

  > div {
    min-width: 12.5rem;
    margin-right: .9rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: "Roboto Slab", serif;

    span {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`