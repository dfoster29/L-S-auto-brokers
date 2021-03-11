import smLogoWhite from '../Images/L&S_White_500px.png';
import '../App.css';

function Header() {
  return (
    <div>
      <header>
        <div className="header-grid">
          <img src={smLogoWhite} alt="L&S" className="logo-sm-white"></img>

          <div className="top-links">
            <a href="tel:2015721516"><span className="red red-text-border">Sal:</span> (201) 572-1516</a>
            <a href="tel:9738760921"><span className="red">Luis:</span> (973) 876-0921</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
