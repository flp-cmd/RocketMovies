import { Container, Form, Background, BlurOverlay } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom"

import { Input } from "../../components/input"

import {Button} from "../../components/button"

import { ButtonText} from "../../components/buttonText"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />

        <Button title="Entrar" />

        <Link className="registerButton" to="/register" >
          <ButtonText title="Criar conta" />
        </Link>
      </Form>
      <Background>
        <BlurOverlay/>
      </Background>
    </Container>
  )
}