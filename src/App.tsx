import React from 'react';
import Layout from './layout';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <GlobalStyles />
    </>
  );
};

export default App;
