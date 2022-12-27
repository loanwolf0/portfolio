import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import MenuItmes from "./MenuItems";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1> Anurag Shukla </h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItmes.map((item, index) => {
          return (
            <li>
              <Link to={item.url} onClick={() => handleClick()}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hamburger" onClick={() => handleClick()}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
export default Navbar;
