import { Container, Form, Avatar } from "./styles.js"
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom"

import { ButtonText } from "../../components/buttonText"

import { Input } from "../../components/input"

import { Button } from "../../components/button"

export function Profile() {
  return (
    <Container>
      <header>
        <Link className="backButton" to="/" >
          <ButtonText title="Voltar" icon={FiArrowLeft} />
        </Link>
      </header>
        <Avatar>
          <img src="http://github.com/flp-cmd.png" alt="Foto do usuário" />
          <label htmlFor="Avatar">
            <FiCamera/>
            <input id="avatar" type="file"/>
          </label>
        </Avatar>
      <Form>
        <Input placeholder="Nome" icon={FiUser}/>
        <Input placeholder="E-mail" icon={FiMail}/> 
        <Input placeholder="Senha atual" icon={FiLock}/> 
        <Input placeholder="Nova senha" icon={FiLock}/> 

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}