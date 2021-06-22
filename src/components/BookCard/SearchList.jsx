

import Item from "./Item";
import Data from '../../assets/database/book.json'

const SearchList = ({ data }) => {
  if (!data.isFetched) {
    return <div>loading...</div>;
  }

 
  return (
    <div className="">
      {Data.map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default SearchList;
