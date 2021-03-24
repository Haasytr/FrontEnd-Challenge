import React, { useState, useCallback } from 'react';

import { Container, Filter } from './styles';

import ListBooks from '../../components/listBooks';

const Books: React.FC = () => {
  const [filter, setFilter] = useState('wimpy kid');

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    setFilter(e.currentTarget.title.value);
  }, []);

  return (
    <Container>
      <Filter>
        <h1 className="title">Filter</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Titulo" name="title" />

          <button type="submit">Submit</button>
        </form>
      </Filter>

      <ListBooks filter={filter} />
    </Container>
  );
};

export default Books;
