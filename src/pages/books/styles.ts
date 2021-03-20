import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  justify-content: center;
`;

export const Filter = styled.div`
  background: #FCDB00;
  max-width: 25%;
  padding: 30px;
  max-height: 500px;

  .title {
    color: #fff;
    font-size: 25px;
  }

  form {
    align-self: center;
    justify-self: center;
    display: flex;
    align-content: center;
    flex-direction: column;
    
    input {
      height: 40px;
      margin: 10px;
      border-radius: 5px;
      border: none;
      padding: 5px;
    }

    button {
      width: 100%;
      border-radius: 5px;
      background: #000;
      color: #fff;
      border: none;
      height: 40px;
    }
  }
`;
