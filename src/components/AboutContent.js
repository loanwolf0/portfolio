import "./AboutContentStyles.css";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>I am a Rect Developer. I create responsive websites.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              className="img"
              alt="true"
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="img-stack bottom">
            <img
              className="img"
              alt="true"
              src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
