// import { Link } from "react-router-dom";

import Item from "./Item";
// import Data from '../../assets/database/book.json'

// import "./BookCard.scss";

const BadiyList = ({ data }) => {

  console.log(data);
  return (
    <div className="book-card-list container">
      {data.map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default BadiyList;
