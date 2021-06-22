// import { Link } from "react-router-dom";

import Item from "./Item";
import Data from '../../assets/database/book'

import "./BookCard.scss";

const List = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

  // console.log(data.data);
  return (
    <div className="book-card-list container">
      {Data.filter(i => i.type === 'diniy').map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default List;
