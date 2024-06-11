import styled from "styled-components"
import backgroundImg from "../../assets/something-magical-SdjA-_Xzuxg-unsplash 1.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
 
`

export const Form = styled.form`
  width: 63.7rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  > h1 {
    font-family: "Roboto Slab", serif;
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > span {
    font-family: "Roboto Slab", serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 4.8rem;
  }

  > h2 {
    font-family: "Roboto Slab", serif;
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 4.8rem;
  }

  > div {
    margin-bottom: .8rem;
    width: 34rem;
  }

  > button {
    margin-top: 1.6rem;
    margin-bottom: 4.2rem;
    width: 34rem;
  }

  > div:nth-of-type(4) {
    margin-top: 4.2rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) center center no-repeat;
  background-size: cover;
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px);
`

export const BlurOverlay = styled.div`
  height: 100%;
  background: rgba(28, 27, 30, 0.7);
  /* backdrop-filter: blur(5px); */
`;