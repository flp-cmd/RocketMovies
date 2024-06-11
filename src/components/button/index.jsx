import {Container} from "./styles.js"

export function Button({icon : Icon, title, ...rest}) {
  return (
    <Container>
      {Icon && <Icon size={20}/>}
      {title}
    </Container>
  )
}