import "./HeaderBottom.scss";

const HeaderBottom = () => {
  return (
    <div className="header-bottom">
      <div className="header-bottom-inner container">
        <div className="header-bottom-inner-block">
          <label className="header-bottom-inner-block-label" htmlFor="search1">
            <input
              className="header-bottom-inner-block-label-input"
              placeholder="izlash"
              type="search"
              name=""
              id="search1"
            />
          </label>
        </div>
        <select className="header-bottom-inner-select" name="" id="">
          <option
            className="header-bottom-inner-select-option"
            value=""
          >
              Badiiy kitoblar
          </option>
          <option
            className="header-bottom-inner-select-option"
            value=""
          >
              Diniy kitoblar
          </option>
          <option
            className="header-bottom-inner-select-option"
            value=""
          >
              Darslik kitoblar
          </option>
          <option
            className="header-bottom-inner-select-option"
            value=""
          >
              Ilmiy
          </option>
        </select>
        <select className="header-bottom-inner-select" name="" id="">
          <option className="header-bottom-inner-select-option" value="">
            O'zbekcha
          </option>
          <option className="header-bottom-inner-select-option" value="">
            Arabcha
          </option>
          <option className="header-bottom-inner-select-option" value="">
            Russia
          </option>
          <option className="header-bottom-inner-select-option" value="">
            English
          </option>
        </select>
      </div>
    </div>
  );
};

export default HeaderBottom;
