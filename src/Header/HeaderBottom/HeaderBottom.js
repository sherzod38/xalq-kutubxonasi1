import "./HeaderBottom.scss";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="header-bottom-inner container">
        <div className="header-bottom-inner-block">
          <label className="header-bottom-inner-block-label" htmlFor="search">
            <input
              className="header-bottom-inner-block-label-input"
              type="search"
              id="search"
              name="main_search"
              placeholder="Izlash"
            />
          </label>
          <button className="header-bottom-inner-block-button" type="button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="9.80544" cy="9.8055" rx="7.49047" ry="7.49047" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.0152 15.4043L17.9519 18.3333" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <select className="header-bottom-inner-select" name="book_type_select" id="book-type-select">
          <option
            className="header-bottom-inner-select-option"
            value="fiction"
          >
              Badiiy kitoblar
          </option>
          <option
            className="header-bottom-inner-select-option"
            value="religious"
          >
              Diniy kitoblar
          </option>
          <option
            className="header-bottom-inner-select-option"
            value="textbook"
          >
              Darslik kitoblar
          </option>
          <option
            className="header-bottom-inner-select-option"
            value="scientific"
          >
              Ilmiy
          </option>
        </select>
        <select className="header-bottom-inner-select" name="change_language_select" id="change-language_select">
          <option className="header-bottom-inner-select-option" value="uzbek">
            O'zbekcha
          </option>
          <option className="header-bottom-inner-select-option" value="arabic">
            Arabcha
          </option>
          <option className="header-bottom-inner-select-option" value="russia">
            Russia
          </option>
          <option className="header-bottom-inner-select-option" value="english">
            English
          </option>
        </select>
      </div>
    </div>
  );
};

export default HeaderBottom;
