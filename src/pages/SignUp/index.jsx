import { Container, Form, Background, BlurOverlay } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom"

import { Input } from "../../components/input"

import {Button} from "../../components/button"

import { ButtonText} from "../../components/buttonText"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" icon={FiUser} />
        <Input placeholder="E-mail" icon={FiMail} />
        <Input placeholder="Senha" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/">
          <ButtonText title="Voltar para o login" icon={FiArrowLeft} />
        </Link>
      </Form>
      <Background>
        <BlurOverlay/>
      </Background>
    </Container>
  )
}