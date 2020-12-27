import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container id="home">
      <Header textColor="var(--color-primary)" />
      <h1>Home</h1>
    </Container>
  );
};

export default Home;
