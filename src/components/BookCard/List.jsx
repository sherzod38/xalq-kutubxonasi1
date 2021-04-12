import { Link } from "react-router-dom";

import Item from "./Item";

import "./BookCard.scss";

const List = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

  console.log(data.data.results);
  return (
    <Link className="book-card-list">
      {data.data.results.map((book, index) => (
        <Item {...book} />
      ))}
    </Link>
  );
};

export default List;
