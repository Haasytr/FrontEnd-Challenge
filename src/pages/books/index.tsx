import React from 'react';

import { Container, Filter } from './styles';

import ListBooks from '../../components/listBooks';

const Books: React.FC = () => {
  return (
    <Container>
      <Filter>
        <h1 className="title">Filter</h1>
        <form>
          <input type="text" placeholder="Palavra-passe" />

          <input type="text" placeholder="Titulo" />

          <input type="text" placeholder="Categoria" />

          <input type="text" placeholder="Ano" />

          <input type="text" placeholder="Autor" />

          <input type="text" placeholder="Categoria" />

          <button type="button">Submit</button>
        </form>
      </Filter>

      <ListBooks />
    </Container>
  );
};

export default Books;
