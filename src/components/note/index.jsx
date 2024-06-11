import { Container } from "./styles.js";
import { Link } from "react-router-dom"

import { Tag } from "../tag";

import star_filled from "../../assets/star_filled.svg"
import star from "../../assets/star.svg"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Link className="title" to="/preview">
        <h1>{data.title}</h1>
      </Link>

      <div>
        <img src={star_filled} />
        <img src={star_filled} />
        <img src={star_filled} />
        <img src={star_filled} />
        <img src={star} />
      </div>

      <p>{data.description}</p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map((tag) => <Tag key={tag.name} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}
