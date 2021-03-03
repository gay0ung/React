import React from 'react';
import GlobalStyle from './assets/GlobalStyled';
import RouterComponent from './components/Router.js';

const App = () => {
  return (
    <div className="root-wrapper">
      <GlobalStyle />
      <RouterComponent />
    </div>
  );
};

export default App;
