import React from 'react';

// import { Container } from './styles';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Books from '../pages/books';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/livros" exact component={Books} />
  </Switch>
);

export default Routes;
