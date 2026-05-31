import { useEffect, useState } from "react";
import reactNotes from "../../../api/react_notes.json";
import { React } from "../../UI/React";

export const ReactNotes = () => {
  // const [data, setData] = useState([]);
  const [activeID, setActiveID] = useState(null);

  // useEffect(() => {
  //   setData(reactNotes);
  // }, []);

  const handleButton = (id) => {
    setActiveID((prevID) => (prevID === id ? null : id));
  };

  return (
    <>
      <h1>ReactJS Notes</h1>
      <ul className="section-accordion">
        {reactNotes.map((curEle) => {
          return (
            <React
              key={curEle.id}
              curData={curEle}
              isActive={activeID === curEle.id}
              onToggle={() => handleButton(curEle.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
