import React from 'react';

function BookmarkIcon({ isLiked, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 169.32 237.04"
      className={
        +isLiked
          ? 'card__like-button card__like-button_liked'
          : 'card__like-button'
      }
      onClick={onClick}
    >
      <title>Сохранить в избранном</title>
      <path d="M0 0v228.56c0 3.36 1.85 6.28 4.92 7.69 3.07 1.41 6.47.94 9.04-1.25l70.7-60.41 70.7 60.41c2.57 2.2 5.97 2.66 9.04 1.25 3.07-1.41 4.92-4.31 4.92-7.69V0H0z" />
    </svg>
  );
}

export default BookmarkIcon;
