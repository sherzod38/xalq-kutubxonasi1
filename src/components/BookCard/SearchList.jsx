

import Item from "./Item";
import Data from '../../assets/database/book'

const SearchList = ({ type }) => {


 
  return (
    <div className="">
      {Data.filter(i => i.type===type).slice(0, 3).map((book, index) => (
        <Item {...book} key={index} />
      ))}
    </div>
  );
};

export default SearchList;
