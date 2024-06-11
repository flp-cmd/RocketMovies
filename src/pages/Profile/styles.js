import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_PINK};
    position: relative;

    > .backButton > div {
      > svg {
      position: absolute;
      top: 6.65rem;
      left: 14.4rem;
      }
      > a {
        position: absolute;
        top: 6.65rem;
        left: 16.8rem;
      }
    }  
  }
 
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto;

  > div {
    margin-bottom: .8rem;
  }

  > div:nth-of-type(2){
    margin-bottom: 2.4rem;
  }

  > button {
    height: 4.8rem;
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  width: 18.6rem;
  height: 18.6rem;
  margin: -10rem auto 6.4rem;
  position: relative;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }


  }
`