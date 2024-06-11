import { Container, Menu, Content } from "./styles.js"
import { Link } from "react-router-dom"

import { Header } from "../../components/header"

import {Button} from "../../components/button"

import { FiPlus } from "react-icons/fi";

import {Note} from "../../components/note"



export function Home() {
  return(
    <Container>
      <Header />
      <Menu>
        <h1>Meus filmes</h1>
        <Link to="/new" >
          <Button title="Adicionar filme" icon={FiPlus} />
        </Link>
      </Menu>

      <Content>
        <Note data={{
          title: "Interestellar",
          description: "Em um futuro distante, os recursos naturais da Terra estão diminuindo e a humanidade deverá migrar para outros planetas. Para encontrar um novo lar, o astronauta Joseph Cooper (Matthew McConaughey) deixa sua família no planeta para viajar pelo espaço sem muitas certezas de voltar para casa.",
          tags: [
            {id: "1", name: "Ficção Científica"},
            {id: "2", name: "Drama"},
            {id: "3", name: "Família"}
          ]
        }}
        />

        <Note data={{
          title: "Harry Potter",
          description: "Harry Potter é um jovem comum de 11 anos até que recebe uma carta para estudar na Escola de Magia e Bruxaria de Hogwarts, onde ele descobre ser, na verdade, um bruxo. Nela, o garoto conquista a amizade de Hagrid, além de Hermione e Ron. No entanto, ele descobre ter um grande inimigo, o terrível Voldemort.",
          tags: [
            {id: "1", name: "Fantasia"},
            {id: "2", name: "Ação"}
          ]
        }}
        />
        </Content>
    </Container>
  )
}