import fLogo from "./assets/f_logo.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";

export function Footer () {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__similarities">
                    <a href="./index.html" className="footer__logo-link">
                        <img src={fLogo} alt="logo of coffee roasters" className="footer_logo-img" width="236" height="26"/>
                    </a>
                    
                    <ul className="footer__list nav-list">
                        <li className="footer__items nav-items">
                            <a href="./index.html" className="nav-link">Home</a>
                        </li>
                        
                        <li className="footer__items nav-items">
                            <a href="./about.html" className="nav-link">About us</a>
                        </li>
                        
                        <li className="footer__items nav-items">
                            <a href="./subscribe.html" className="nav-link">Create your plan</a>
                        </li>
                    </ul>
                </div>
                
                <ul className="footer__posts-list footer__similarities">
                    <li className="footer__posts-items">
                        <a href="https://www.facebook.com/" className="footer__post-links">
                            <img src={facebook} alt="icon" className="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                    
                    <li className="footer__posts-items">
                        <a href="https://www.twitter.com/" className="footer__post-links">
                            <img src={twitter} alt="icon" className="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                    
                    <li className="footer__posts-items">
                        <a href="https://www.instagram.com/" className="footer__post-links">
                            <img src={instagram} alt="icon" className="footer__post-icons" width="24" height="24"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    )
}