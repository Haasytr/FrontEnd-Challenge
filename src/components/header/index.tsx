import React from 'react';

import { Container, Nav, Link } from './styles';
import Logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <img src={Logo} alt="GoRestaurant" />
    <Nav>
      <Link href="/livros">Books</Link>
      <Link href="#form">Newsletter</Link>
      <Link href="#address">Address</Link>
    </Nav>
  </Container>
);

export default Header;
