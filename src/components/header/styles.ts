import styled, { css } from 'styled-components';

interface IMenuProps {
  visible: boolean;
}

export const Container = styled.header<IMenuProps>`
  margin: 0 auto;
  padding: 0 50px;  
  background-color: #FCDB00;
  height: 100px;
  z-index: 999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
  @media (max-width: 700px) {
  width: 100%;
  padding: 0;
  grid-template-rows: 90%;
  ${props => props.visible && css` position: fixed; z-index: 9999;  display: grid;`}

  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 15px;

    .btn {
      display: none;
      border: none;
      padding: 15px;
      font-size: 30px;

      @media (max-width: 700px) {
        display: block;
        padding: 0;
        ${props => props.visible && css` z-index: 9999;`}
      }
    }
  }
`;

export const Nav = styled.nav<IMenuProps>`

  @media (max-width: 700px) {
    display: none;
    background-color: #FCDB00;
    z-index: 9999;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    transition: 0.2s;
    width: 100vw;

  ${props => props.visible && css` display: flex; `}
  }
`;

export const Link = styled.a`
  color: #000;
  padding: 30px;
  font-size: 22px;
  text-decoration: none;

  @media (max-width: 700px) {
    padding: 30px;
    font-size: 30px;
  }
`;

export const NavButton = styled.button`
  border: none;
  display: none;
  background: none;
  @media (max-width: 700px) {
    display: block;
  }
`;
