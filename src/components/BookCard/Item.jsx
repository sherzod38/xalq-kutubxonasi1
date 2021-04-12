import "./BookCard.scss";

const Item = ({ img, title, overview, release_date, vote_average }) => {
  return (
    <div className="book-card container">
      {/* <img src={img} alt="" /> */}
      <h3 className="book-card-name">{title}</h3>
      {/* <h3 className="book-card-author">{overview}</h3> */}
      <p className="book-card-views">
        {release_date}
        <span className="book-card-views-like">{vote_average}</span>
      </p>
    </div>
  );
};

export default Item;
