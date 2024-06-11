import { Container, Profile } from "./styles.js"
import { Link } from "react-router-dom"


import { Input } from "../input"

export function Header() {
  return(
    <Container>
      <Link className="logo" to="/">
        <h2>RocketMovies</h2>
      </Link>

      <Input placeholder="Pesquisar pelo título" />

      <Link to="/profile">
        <Profile>
          <div>
            <strong>Felipe Costa</strong>
            <span>sair</span>
          </div>
          <img src="http://github.com/flp-cmd.png" alt="Foto de usuário" />
          </Profile>
      </Link>
    </Container>
  )
}