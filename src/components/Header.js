import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

const HeaderInner = React.memo(() => {
  return (
    <div className="container">
      <h1 className="header__title ">Квартиры в Тюмени</h1>
      <p className="header__subtitle">без комиссии Apple</p>
    </div>
  );
});

const Header = React.memo(() => {
  return (
    <header className="header page__header">
      <Switch>
        <Route exact path="/">
          <HeaderInner />
        </Route>
        <Route path="*">
          <Link to="/" className="link-wrapper">
            <HeaderInner />
          </Link>
        </Route>
      </Switch>
    </header>
  );
});

export default Header;
