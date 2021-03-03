import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Header,
  Home,
  Recipe,
  RecipeList,
  Footer,
  ErrorPage
} from './index.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/rList" component={RecipeList} />
        <Route exact={true} path="/recipe" component={Recipe} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
