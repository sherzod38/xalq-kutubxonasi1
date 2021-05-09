import { Link } from "react-router-dom";

import Item from "./Item";

const DarslikList = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

  // console.log(data.data);
  return (
    <Link className="book-card-list container" to="/">
      {data.data.map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </Link>
  );
};

export default DarslikList;
