import { Container, Content } from "./styles.js"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Header } from "../../components/header"

import { ButtonText } from "../../components/buttonText"

import { Button } from "../../components/button"

import { Input } from "../../components/input"

import { NoteItem } from "../../components/noteItem/index.jsx"

export function New(){
  return (
    <Container>
      <Header/>

      <Content>
        <Link className="backButton" to="/" >
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
        <main>
          <h1>Novo filme</h1>
          <div className="Inputs">
            <Input placeholder = "Título"/>
            <Input placeholder = "Sua nota (de 0 a 5)"/>
          </div>

          <textarea type="textarea" placeholder="Observações"/>
            
          <h2>Marcadores</h2>
          <div className="notes">
            <NoteItem value="React"/>
            <NoteItem isnew="true" placeholder="Novo marcador"/>
          </div>

          <div className="botoes">
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>
        </main>
      </Content>
    </Container>
  )
}