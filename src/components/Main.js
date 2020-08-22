import React from 'react';
import Flats from './Flats';
import CapPage from './CapPage';
import { Route, Switch } from 'react-router-dom';

function Main({ cards }) {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/">
          <Flats />
        </Route>
        <Route path="/flats/:id">
          <CapPage caption="Страница в разработке" />
        </Route>
        <Route path="/users/:id">
          <CapPage caption="Страница в разработке" />
        </Route>
        <Route path="*">
          <CapPage />
        </Route>
      </Switch>
    </main>
  );
}

export default Main;
