import { Views, Like } from "../../assets/icons/Icons";

import "./BookCard.scss";

const Item = ({
  id,
  poster_path,
  title,
  vote_count,
  release_date = "Muallifi",
  vote_average,
}) => {
  return (
    <div className="book-card container" key={id}>
      <img className='book-card-img' src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
      <h3 className="book-card-name">{title}</h3>
      <p className="book-card-views">
        {release_date ? "Muallifi" : release_date}
        {/* <span className="book-card-views-like">{vote_average}</span> */}
      </p>
      <p className="book-card-author">
        <span className="book-card-author-views"><Views /></span>
        <span className="book-card-author-vote_count">{vote_count}</span>
        <span className="book-card-author-like"><Like /></span>
        <span className="book-card-author-vote_avarage">{vote_average}</span>
      </p>
    </div>
  );
};

export default Item;
