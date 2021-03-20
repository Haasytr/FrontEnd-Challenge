import styled from 'styled-components';

export const Container = styled.div`    
  width: 100%;
  display: flex;
  flex-direction: column;

  .primary {
    width: 300px;
    margin: 15px;
  }
`;

export const Books = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);

    .book {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
  }
`;
