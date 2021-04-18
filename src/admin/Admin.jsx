import React from "react";
import PropTypes from "prop-types";
import API_BASE_URL from "../constants";

function Admin(props) {
  return (
    <div>
      <h2>Book add page</h2>
      <form
        id="form"
        action={API_BASE_URL + "/api/books"}
        method="POST"
        enctype="multipart/form-data"
      >
        <input
          type="text"
          name="author_name"
          placeholder="author_name"
          required
        />
        <input type="file" name="book_img" placeholder="book_img" required />
        <input
          type="text"
          name="book_title"
          placeholder="book_title"
          required
        />
        <input
          type="number"
          name="book_release_year"
          placeholder="book_release_year"
          required
        />
        <input
          type="number"
          name="book_pages"
          placeholder="book_pages"
          required
        />
        <input
          type="text"
          name="book_summary"
          placeholder="book_summary"
          required
        />
        <input
          type="text"
          name="book_language"
          placeholder="book_language"
          required
        />
        <input
          type="number"
          name="book_count"
          placeholder="book_count"
          required
        />
        <select name="book_type">
          <option value="1">religious </option>
          <option value="2">magazine </option>
          <option value="3">textbook </option>
          <option value="4">hadya </option>
          <option value="0">undefined </option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
}

Admin.propTypes = {};

export default Admin;
