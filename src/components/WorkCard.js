import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";

const WorkCard = ({ img, title, text, view, source }) => {
  return (
    <div className="project-card">
      <img alt="img" src={img} />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p> {text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            view
          </NavLink>
          <NavLink to={source} className="btn">
            source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
