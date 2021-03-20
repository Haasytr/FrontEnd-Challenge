import React from 'react';

import {
  Container, Idea, Description, Social,
} from './styles';
import ListBooks from '../../components/listBooks/index';

import IdeaImage from '../../assets/idea-logo.svg';
import AppleLogo from '../../assets/social/apple-logo.svg';
import AndroidLogo from '../../assets/social/android-logo.svg';
import WindowsLogo from '../../assets/social/windows-logo.svg';

const Home: React.FC = () => (
  <Container>
    <Idea>
      <Description>
        <h1 className="title">Pixter Digital Books</h1>
        <span className="sub-title">
          lorem ipsum dolor sit?<br />
          consectuctur elit, voluptat
        </span>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
          Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit
        </p>

        <Social>
          <img src={AppleLogo} alt="Apple" />
          <img src={AndroidLogo} alt="Android" />
          <img src={WindowsLogo} alt="Windows" />
        </Social>
      </Description>
      <img src={IdeaImage} alt="a" />
    </Idea>
    <h1 className="title">Books</h1>
    <p className="text">
      Lorem ipsum dolor sit amet
      consectetur adipiscing elit. Praesent vitae eros
      eget tellus tristique bibendum.
      Donec rutrum sed sem quis venenatis.
    </p>

    <ListBooks />
  </Container>
);

export default Home;
