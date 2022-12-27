import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects </h1>
      <div className="project-container">
        {WorkCardData.map((item, index) => {
          return (
            <WorkCard
              key={index}
              img={item.img}
              title={item.title}
              text={item.text}
              view={item.view}
              source={item.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
