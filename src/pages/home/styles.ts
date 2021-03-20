import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Idea = styled.div`
  background: #FCDB00;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Description = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 33px;
    margin: 30px 0;
  }
  .text{
    font-size: 17px;
    margin: 15px 0;
    text-align: left;
  }

  .text {

  }
`;

export const Social = styled.div`
  margin: 15px 0;

  img {
    margin: 0 20px;
  }
`;
