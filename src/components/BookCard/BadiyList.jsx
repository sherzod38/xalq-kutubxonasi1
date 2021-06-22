// import { Link } from "react-router-dom";

import Item from "./Item";
import Data from '../../assets/database/book.json'

// import "./BookCard.scss";

const BadiyList = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

  console.log(data.data);
  return (
    <div className="book-card-list container">
      {Data.filter(i => i.type === 'badiy').map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default BadiyList;
