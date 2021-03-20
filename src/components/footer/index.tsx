import React, { useCallback } from 'react';

import {
  Container, Contact, Social, MeetUp, Item,
} from './styles';

import FacebookLogo from '../../assets/social/facebook-color.svg';
import GoogleLogo from '../../assets/social/google-color.svg';
import TwitterLogo from '../../assets/social/twitter-color.svg';
import PinterestLogo from '../../assets/social/pinterest-color.svg';

const Footer: React.FC = () => {
  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    const data = { email: e.currentTarget.email.value, site: e.currentTarget.site.value };
    console.log(data);
  }, []);

  return (
    <Container>
      <Contact>
        <h1>Keep in touch with us</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros
          eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
        </p>
        <form onSubmit={handleFormSubmit}>
          <input type="email" name="email" placeholder="enter your email to update" />
          <input type="hidden" name="site" value="Nomedosite.jpg" />
          <button type="submit" className="primary">Submit</button>
        </form>

        <Social>
          <img src={FacebookLogo} alt="Facebook" />
          <img src={GoogleLogo} alt="Google" />
          <img src={TwitterLogo} alt="Twitter" />
          <img src={PinterestLogo} alt="Pinterest" />
        </Social>
      </Contact>
      <MeetUp id="#address">
        <Item>
          <li>Alameda Santos, 1970</li>
          <li>6th floor - Jardim Paulista São Paulo</li>
          <li>SP +55 11 3090 8500</li>
        </Item>

        <Item>
          <li>London - UK </li>
          <li>UK 125 Kingsway</li>
          <li>London WC2B 6NH</li>
        </Item>

        <Item>
          <li>Buenos Aires – Argentina</li>
          <li>Esmeralda 950</li>
          <li>Buenos Aires B C1007</li>
        </Item>

        <Item>
          <li>ALisbon - Portugal</li>
          <li>Rua Rodrigues Faria, 103</li>
          <li>4th floor Lisbon - Portugal</li>
        </Item>

        <Item>
          <li>Curitiba – PR</li>
          <li>R. Francisco Rocha, 198</li>
          <li>Batel – Curitiba – PR</li>
        </Item>
      </MeetUp>
    </Container>
  );
};

export default Footer;
