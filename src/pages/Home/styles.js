import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem 13.3rem auto;
  grid-template-areas: 
  "header"
  "menu"
  "content";
`

export const Menu = styled.div`
  grid-area: menu;
  width: 100%;

  padding: 0 16.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1{
    font-family: "Roboto Slab", serif;
    font-size: 3.2rem;
    font-weight: 400;
  }

  > button {
    width: 23.7rem;
  }
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 16.3rem;


`