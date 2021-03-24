import styled from 'styled-components';

export const Container = styled.div`
  background: #010101;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 584px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 50px 20px;

  h1{
    color: #FCDB00;
    font-size: 25px;
  }

  .text {
    color: #fff;
  }

  form {
    display: grid;
    margin: 55px;
    grid-template-columns: 80% 20%;
    width: 50%;
    grid-gap: 10px;

    
    @media (max-width: 768px) {
      width: 90%;
    }

    input {
      padding: 5px;
      border-radius: 5px;
      border: none;
    }
  }
`;

export const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;
  
`;

export const MeetUp = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  background:  #010101;

  @media (max-width: 768px) {
   grid-template-columns: 1fr;
  }
  
`;

export const Item = styled.ul`
  color: #fff;
  margin-top: 40px;
  list-style-type: none;
  margin: auto;

  li {
    margin: 15px 0;

    @media (max-width: 768px) {
      margin: 15px 5px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin: 15px 5px;
    background: rgba(255,255,255,0.1);
  }
`;
