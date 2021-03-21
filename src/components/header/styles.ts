import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 0 50px;  
  background-color: #FCDB00;
  height: 100px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    z-index: 99;
    padding: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const Nav = styled.nav`
    @media (max-width: 700px) {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 15px;
    }
    
`;

export const Link = styled.a`
  color: #000;
  padding: 30px;
  font-size: 22px;
  text-decoration: none;

  @media (max-width: 700px) {
    padding: 0px;
  }
`;
