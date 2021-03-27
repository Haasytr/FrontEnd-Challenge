import React, { useState, useCallback } from 'react';

import {
  Container, Nav, Link,
} from './styles';
import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleNav = useCallback(() => {
    setVisible(!visible);
    console.log(visible);
  }, [visible]);

  const handleScroll = useCallback(() => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
    setVisible(false);
  }, []);

  return (
    <Container visible={visible}>
      <div className="header">
        <a href="/">
          <img src={Logo} alt="GoRestaurant" />
        </a>

        <button className="btn" type="button" onClick={toggleNav}>🥓</button>
      </div>
      <Nav visible={visible}>
        <Link href="/livros">Books</Link>
        <Link href="#form" onClick={handleScroll}>Newsletter</Link>
        <Link href="#address" onClick={handleScroll}>Address</Link>
      </Nav>
    </Container>
  );
};

export default Header;
