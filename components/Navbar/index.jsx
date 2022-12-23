import { FiUser, FiLayout, FiAward, FiMail } from 'react-icons/fi';

import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import CVButton from '../CVButton/index';

const NavBar = () => {
  return (
    <Navbar variant="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>Guilherme Arruda Panfiglio</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Collapse id="responsive-navbar" className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#Sobre" className="d-flex align-items-center">
              <FiUser size={17} className="me-1" />
              Sobre
            </Nav.Link>
            <Nav.Link href="#Competencias" className="d-flex align-items-center">
              <FiAward size={17} className="me-1" />
              Competências
            </Nav.Link>
            <Nav.Link href="#Projetos" className="d-flex align-items-center">
              <FiLayout size={17} className="me-1" />
              Projetos
            </Nav.Link>
            <Nav.Link href="#Entre em Contato" className="d-flex align-items-center">
              <FiMail size={17} className="me-1" />
              Entre em Contato
            </Nav.Link>
            <CVButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
