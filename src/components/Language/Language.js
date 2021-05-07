import './Language.scss';
import AuthContext from "../../context/Auth/context";
import { useContext } from 'react';

const Language = () => {
    const {methods} = useContext(AuthContext)
    function langCanger(e) {
        methods.setLang(e.target.value)
        localStorage.setItem("lang", e.target.value)
    }
    return (
        <select className="language" onChange={langCanger}>
           <option value="Lotin">Lotin</option>
           < option value="Krill"> Крилл </option>
        </select>
    )
}

export default Language;