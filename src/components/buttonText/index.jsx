import {Container} from "./styles.js"

export function ButtonText({icon : Icon, title, ...rest}) {
  return(
    <Container {...rest}>
      {Icon && <Icon size={20}/>}
      <a>{title}</a>
    </Container>
  )
}