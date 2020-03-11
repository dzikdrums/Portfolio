import 'normalize.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from 'views/HomePage';
import MainLayout from 'components/layout/MainLayout';
import React from 'react';

const Root = () => (
  <BrowserRouter>
    <MainLayout data-testid="hehe">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Root;
