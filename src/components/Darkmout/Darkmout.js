import './Darkmout.scss'

const Darkmout = ({rejim1,rejim2}) => {
    return (
        <select className="darkmout">
            <option defaultValue className="darkmout-text">{rejim1}</option>
            <option className="darkmout-text">{rejim2}</option>
        </select>
    )
}

export default Darkmout;