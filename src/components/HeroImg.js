import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          alt="img"
          src="https://images.pexels.com/photos/7828670/pexels-photo-7828670.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="content">
        <p> I am a React JS Developer </p>
        <h1> React Developer </h1>

        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
