import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes/route';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes />
      </Router>
      <Footer />
    </>
  );
}

export default App;
