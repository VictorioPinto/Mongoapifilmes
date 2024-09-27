import { Link } from "react-router-dom";
import { HeaderS, Nav, NavList, Title } from "./style";

export const Header = () => {
  return (
    <>
      <HeaderS>
        <Title>
          <Link to={"/home"}> FilmesAPI</Link>
        </Title>
        <Nav>
          <NavList>
            <Link to={"/"}>Registrar</Link>
          </NavList>
        </Nav>
      </HeaderS>
    </>
  );
};
