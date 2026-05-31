import { useEffect, useState } from "react";
import frontendIntQues from "../../../api/frontend_dev_int_ques.json";
import { FrontendIntLabel } from "../../UI/FrontendIntLabel";

export const FrontendInterview = () => {
  const [data, setData] = useState([]);
  const [activeID, setActiveID] = useState(false);

  useEffect(() => {
    setData(frontendIntQues);
  }, []);

  const handleButtonToggle = (id) => {
    setActiveID((prevID) => (prevID === id ? false : id));
  };

  return (
    <>
      <h1>20+ Frontend Interview Questions</h1>
      <ul className="section-accordion">
        {data.map((curEle, id) => {
          return (
            <FrontendIntLabel
              key={id}
              curData={curEle}
              isActive={activeID === curEle.id}
              onToggle={() => handleButtonToggle(curEle.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
