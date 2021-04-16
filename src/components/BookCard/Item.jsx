import { useState } from "react";
import { Views, Like } from "../../assets/icons/Icons";
import imgs from '../../assets/images/rasm.png'

import "./BookCard.scss";

const Item = ({
  id,
  img,
  title,
  
  vote_count,
  author = "Muallifi",
  vote_average,
}) => {
  const [imgState, setImagestate] = useState('')
  fetch(`http://xalqkutubxonasi.herokuapp.com/images/${img}`)
  .then(res => {
    if (res.status === 200) {
      setImagestate(true)
    }
  })
  return (
    <div className="book-card container" key={id}>
      <img className='book-card-img' src={imgState ? `https://xalqkutubxonasi.herokuapp.com/images/${img}` : imgs} alt="" />
      <h3 className="book-card-name">{title}</h3>
      <p className="book-card-authors">
        {author ? author : "Muallifi"}
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
