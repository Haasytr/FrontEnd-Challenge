import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  @font-face {
  font-family: 'Open-sans';
  src: local('Open-sans'), url(../assets/fonts/open-sans/OpenSans-Regular.ttf) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open-sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .title{
    font-weight: 700;
    line-height: 34px;
    font-size: 25px;
  }

  .text {
    font-size: 13px;
    text-align: center;
    line-height: 17px;
    color: #555555;
  }

  .primary {
    background: #FCDB00;
    height: 40px;
    border-radius: 5px;
    align-self: center;
    padding: 5px;
    border: none;
  }

  .secundary {
    background: #000;
    color: #fff;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    align-self: center;
    border: none;
  }
`;
