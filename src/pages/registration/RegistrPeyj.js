import React from "react";
import PropTypes from "prop-types";

import HeaderTop from '../../Header/HeaderTop';
import HeaderMiddle from '../../Header/HeaderMiddle';


import './RegistrPeyj.scss';


const RegistrPeyj = (props) => {
    return (
        <div className="registr">
            <div className="registr-header">
                {/* <HeaderTop/>
                <HeaderMiddle/> */}
            </div>
            <div className="section">
                <div className="section-left">
                    <h1>Izoh qoldirish uchun akkauntga kiring</h1>
                    <p>
                        The passage is attributed to an unknown typesetter
                        in the 15th century who is thought to have scrambled
                         parts of  for use in a type specimen book.
                    </p>
                    <div className="section-left-btn">
                        <button className="section-left-btn-left">Ro‘yxatdan o‘tish</button>
                        <button className="section-left-btn-right">Bog‘lanish</button>
                    </div>
                </div>
                <form action="">
                    <input type="text" placeholder='Ismingiz'/>
                    <input type="text" name="" id="" placeholder='Telefon'/>
                </form>
            </div>

        </div>
    )
}

RegistrPeyj.propTypes = {};

export default RegistrPeyj;