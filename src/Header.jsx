import hLogo from "./assets/hlogo.svg";

export function Header () {
    return (
        <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <a href="./index.html" className="header__link">
                    <img src={hLogo} alt="logo of Coffeeroaster" className="header__logo-img" width="236" height="26"/>
                </a>
                
                <ul className="header__list nav-list">
                    <li className="header__items nav-items">
                        <a href="./index.html" className="nav-link">Home</a>
                    </li>
                    
                    <li className="header__items nav-items">
                        <a href="./about.html" className="nav-link">About us</a>
                    </li>
                    
                    <li className="header__items nav-items">
                        <a href="./subscribe.html" className="nav-link">Create your plan</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
}