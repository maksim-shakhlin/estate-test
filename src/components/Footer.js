import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  const tag = year - 2020 ? `—${year}` : '';
  return (
    <footer className="footer page__footer container">{`© 2020${tag}`}</footer>
  );
}

export default Footer;
