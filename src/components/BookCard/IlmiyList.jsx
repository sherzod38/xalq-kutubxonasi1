// import { Link } from "react-router-dom";

import Item from "./Item";
import Data from '../../assets/database/book'

const IlmiyList = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

 
  return (
    <div className="book-card-list container">
      {Data.filter(i => i.type === 'ilmiy').map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default IlmiyList;
