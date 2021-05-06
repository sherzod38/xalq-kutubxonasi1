// import { useState } from "react";
import { Views, Like } from "../../assets/icons/Icons";
import imgs from "../../assets/images/rasm.png";
import API_BASE_URL from "../../constants";

const Item = ({
  id,
  img,
  title,

  vote_count,
  author = "Muallifi",
  vote_average,
}) => {
  return (
    <div className="book-card" key={id}>
      <img
        className="book-card-img"
        src={img ? `${API_BASE_URL}/images/${img}` : imgs}
        alt=""
      />
      <h3 className="book-card-name">{title}</h3>
      <p className="book-card-authors">
        {author ? author : "Muallifi"}
        {/* <span className="book-card-views-like">{vote_average}</span> */}
      </p>
      <p className="book-card-author">
        <span className="book-card-author-views">
          <Views />
        </span>
        <span className="book-card-author-vote_count">{vote_count}</span>
        <span className="book-card-author-like">
          <Like />
        </span>
        <span className="book-card-author-vote_avarage">{vote_average}</span>
      </p>
    </div>
  );
};

export default Item;
