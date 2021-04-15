import React, { useState, useEffect } from "react";
import { List } from "../../components/BookCard";
import axios from "axios";

export default function Religion() {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: "0a0d562707b514c880247d92ed4795be",
        },
      })
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
