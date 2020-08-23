import React from 'react';
import Card from './Card';
import CapPage from './CapPage';
import api from '../utils/api';
import { handleError } from '../utils/utils';

function Flats() {
  const [flats, setFlats] = React.useState();

  React.useEffect(() => {
    api
      .getFlats()
      .then((data) => setFlats(data.response))
      .catch((e) => {
        handleError(e);
        setFlats(0);
      });
  }, []);

  if (flats) {
    return (
      <section className="cards section page__section">
        <ul className="cards__list">
          {flats.map((flat) => (
            <li className="cards__list-item" key={flat.id}>
              <Card card={flat} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (Array.isArray(flats)) {
    return <CapPage caption="Квартир нет :(" showLink={false} />;
  }

  if (flats === 0) {
    return (
      <CapPage caption="Что-то пошло не так :(" showLink={false}>
        <p className="section__subtitle">Мы уже разбираемся.</p>
      </CapPage>
    );
  }

  return (
    <section className="cards section page__section">
      <ul className="cards__list">
        <li className="cards__list-item">
          <div className="card card_type_cap cards__loading" />
        </li>
        <li className="cards__list-item">
          <div className="card card_type_cap cards__loading" />
        </li>
        <li className="cards__list-item">
          <div className="card card_type_cap cards__loading" />
        </li>
      </ul>
    </section>
  );
}

export default Flats;
