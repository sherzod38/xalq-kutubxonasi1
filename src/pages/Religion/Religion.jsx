import React, { useState, useEffect } from "react";
import { List } from "../../components/BookCard";
import axios from "axios";
import API_BASE_URL from "../../constants";

export default function Religion() {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books/3/1`, {})
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
    //   .then(function () {
    //     // always executed
    //   });
  }, []);

  return (
    <div>
      {/* <h1 className='container'>Badiy kitoblar</h1> */}
      <List data={bookList} />
    </div>
  );
}
