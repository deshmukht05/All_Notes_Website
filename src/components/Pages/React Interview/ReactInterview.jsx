import { useEffect, useState } from "react";
import reactIntQues from "../../../api/react_interview_questions.json";
import { ReactIntLabel } from "../../UI/ReactIntLabel";

export const ReactInterview = () => {
  const [data, setData] = useState([]);
  const [activeID, setActiveID] = useState(false);

  useEffect(() => {
    setData(reactIntQues);
  }, []);

  const handleButtonToggle = (id) => {
    setActiveID((prevID) => (prevID === id ? false : id));
  };

  return (
    <div>
      <h1>40+ ReactJS Interview Questions</h1>
      <ul className="section-accordion">
        {data.map((curEle, id) => {
          return (
            <ReactIntLabel
              key={id}
              curData={curEle}
              isActive={activeID === curEle.id}
              onToggle={() => handleButtonToggle(curEle.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};
