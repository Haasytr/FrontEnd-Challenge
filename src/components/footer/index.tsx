import React, { useCallback } from 'react';

import {
  Container, Contact, Social, MeetUp, Item,
} from './styles';

import addresses from './data.json';

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
        {addresses.map(address => (
          <Item>
            <li>{address.country}</li>
            <li>{address.street}</li>
            <li>{address.contact}</li>
          </Item>
        ))}
      </MeetUp>
    </Container>
  );
};

export default Footer;
