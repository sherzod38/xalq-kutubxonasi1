import { useState } from 'react';
import './Language.scss';
// import AuthContext from "../../context/Auth/context";
// import { useContext } from 'react';

const Language = (active) => {
    // const {methods} = useContext(AuthContext)
    // function langCanger(e) {
    //     methods.setLang(e.target.value)
    //     localStorage.setItem("lang", e.target.value)
    // }

    const [ activeLanguage, setActiveLanguage ] = useState('lotin')
    return (
        // <select className="language" onChange={langCanger}>
        //    <option value="Lotin">Lotin</option>
        //    < option value="Krill"> Крилл </option>
        // </select>
        
        <div className="language">
            <button onClick={() => setActiveLanguage('lotin')} className={`language-lotin ${activeLanguage === 'lotin' ? 'active' : ''}`}>Lotin</button>
            <span className="language-span">|</span>
            <button onClick={() => setActiveLanguage('kiril')} className={`language-kiril ${activeLanguage === 'kiril' ? 'active' : ''}`}>Кирил</button>
        </div>
    )
}

export default Language;