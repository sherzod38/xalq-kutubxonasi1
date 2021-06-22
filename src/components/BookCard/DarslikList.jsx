// import { Link } from "react-router-dom";

import Item from "./Item";
import Data from '../../assets/database/book'

const DarslikList = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }
  return (
    <div className="book-card-list container">
      {Data.filter(i => i.type === 'darslik').map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default DarslikList;
