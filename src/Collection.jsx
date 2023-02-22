import expresso from "./assets/expresso.png";
import planalto from "./assets/planalto.png";
import picollo from "./assets/picollo.png";
import danche from "./assets/danche.png";

export function Collection () {
    return (
        <section className="collection">
        <div className="container">
            <div className="collection__wrapper">
                <ul className="collection__list">
                    <li className="collection__list-items">
                        <img src={expresso} alt="Gran espresso cofee collection" className="collection__img" width="255" height="193"/>
                        
                        <h2 className="collection__heading">Gran Espresso</h2>
                        
                        <p className="collection__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                    </li>
                    
                    <li className="collection__list-items">
                        <img src={planalto} alt="Planalto cofee collection" className="collection__img" width="255" height="193"/>
                        
                        <h2 className="collection__heading">Planalto</h2>
                        
                        <p className="collection__text">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.</p>
                    </li>
                    
                    <li className="collection__list-items">
                        <img src={picollo} alt="Piccollo cofee collection" className="collection__img" width="255" height="193"/>
                        
                        <h2 className="collection__heading">Piccollo</h2>
                        
                        <p className="collection__text">Mild and smooth blend featuring notes of toasted almond and dried cherry.</p>
                    </li>
                    
                    <li className="collection__list-items">
                        <img src={danche} alt="Danche cofee collection" className="collection__img" width="255" height="193"/>
                        
                        <h2 className="collection__heading">Danche</h2>
                        
                        <p className="collection__text">Ethiopian hand-harvested blend densely packed with vibrant fruit notes.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    )
}