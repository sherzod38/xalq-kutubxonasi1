import React, { useState, useEffect } from "react";
import { DarslikList } from "../../components/BookCard";
import axios from "axios";

import API_BASE_URL from "../../constants";

const Darslik = () => {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books/3`, {})
      .then(function (response) {
        setBookList({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setBookList({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, []);
  return (
    <div className="ilmiy">
      <DarslikList data={bookList} />
    </div>
  );
};

export default Darslik;
