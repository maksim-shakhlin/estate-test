import React from 'react';
import { Link } from 'react-router-dom';

const CapPage = React.memo(
  ({ caption = 'Страница не найдена', showLink = true, children }) => {
    return (
      <section className="section section_type_cap">
        <h2 className="section__cap">{caption}</h2>
        {children}
        {showLink && (
          <Link className="section__link" to="/">
            Вернуться на главную
          </Link>
        )}
      </section>
    );
  }
);

export default CapPage;
