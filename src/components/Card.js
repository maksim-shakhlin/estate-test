import React from 'react';
import { Link } from 'react-router-dom';
import BookmarkIcon from './BookmarkIcon';
import { dict, getAddresString, getNameString } from '../utils/utils';
import getWordForm from '../utils/morphology';

const Card = React.memo(
  ({
    card: {
      type,
      attributes: { title, rooms, address, area, unit },
      relationships: { type: agent, id: agentId, attributes: name },
      id,
    },
  }) => {
    const dictUnit =
      (dict.unit[unit] &&
        (Array.isArray(dict.unit[unit])
          ? ' ' + dict.unit[unit][0]
          : ' ' + dict.unit[unit])) ||
      '';

    const dimension =
      dictUnit && Array.isArray(dict.unit[unit]) ? dict.unit[unit][1] : '';

    const [isLiked, setIsLiked] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    function handleLikeClick() {
      setIsLiked(!isLiked);
    }

    function handleMouseOver() {
      setIsHovered(true);
    }

    function handleMouseLeave() {
      setIsHovered(false);
    }

    return (
      <article className={isHovered ? 'card card_hovered' : 'card'}>
        <div className="card__top-block card__section">
          <p className="card__tag card__tag_top">{dict.type[type]}</p>
          <BookmarkIcon isLiked={isLiked} onClick={handleLikeClick} />
        </div>
        <Link
          className="link-wrapper card__link-wrapper  card__section"
          to={`/flats/${id}`}
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
        >
          <h2 className="card__title">{title}</h2>
          <p className="card__info">
            {`${rooms} ${getWordForm('комната', rooms)}`}
            <span className="card__divider">|</span>
            {`${area}${dictUnit}`}
            {dimension && <sup>{dimension}</sup>}
          </p>
          <p className="card__text">{getAddresString(address)}</p>
        </Link>
        <div className="card__section">
          <p className="card__tag">{dict.agent[agent]}</p>
          <Link
            to={`/users/${agentId}`}
            className="card__text card__text_type_link"
          >
            {getNameString(name)}
          </Link>
        </div>
      </article>
    );
  }
);

export default Card;
