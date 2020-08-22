import React from 'react';
import Card from './Card';
import { flats } from '../utils/utils';

function Flats() {
  return (
    <section className="cards section">
      {flats ? (
        <ul className="cards__list">
          {flats.map((flat) => (
            <li className="cards__list-item" key={flat.id}>
              <Card card={flat} />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className="section__cap">Квартир нет :(</h2>
      )}
    </section>
  );
}

export default Flats;
