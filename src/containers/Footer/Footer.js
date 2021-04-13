import './Footer.scss'
import { Link } from "react-router-dom";
import footerlogo from "../../assets/images/footerlogo.svg";
import channellogo from "../../assets/images/channellogo.svg";
import sitelogo from "../../assets/images/sitelogo.svg";
import travellogo1 from "../../assets/images/travellogo1.svg";

const Footer = () => {
    return (
        <footer className="container footer">
            <div className="footer-left">
                <Link to="/home" className="footer-link footer-logo-link">
                    <img className="footer-img footer-logo-img" src={footerlogo} alt="footer-logo" />
                </Link>
                <p claasName="footer-text footer-copyright">
                    All rights reserved 2020
                </p>
            </div>
            <div className="footer-center">
                <p className="footer-text bold-text">Bizning loyihalarimiz</p>
                <div className="footer-center-bottom">
                    <a href="https://www.azon.uz" className=" footer-link " target="_balnk"><img className="footer-img azon-site-logo" src={sitelogo} alt="logo" /></a>
                    <a href="https://t.me/azonuztv_official" className=" footer-link channel-link" target="_blank"><img className="footer-img azon-channel-logo" src={channellogo} alt="logo" /></a>
                    <a href="https://www.azon.uz" className=" footer-link" target="_blank"><img className="footer-img azon-travel-logo" src={travellogo1} alt="logo" /></a>
                </div>
            </div>
            <div className="footer-right">
                <Link to="/about" className="footer-link about-us"> Biz haqimizda</Link>
                <Link to="/connect" className="footer-link">Aloqa</Link>
            </div>
        </footer>
    )
}

export default Footer;