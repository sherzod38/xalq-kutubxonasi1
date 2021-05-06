import React, { useState, useEffect } from "react";
import { BadiyList } from "../../components/BookCard";
import axios from "axios";

import API_BASE_URL from '../../constants'

import "./Badiy";

const Badiy = () => {
  const [bookList, setBookList] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/books/1`, {})
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
  return <div className="badiy">
      <BadiyList data={bookList}/>
  </div>;

};

export default Badiy;
