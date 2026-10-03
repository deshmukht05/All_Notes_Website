import { useState } from "react";
import nodeNotes from "../../../api/nodejs_notes.json";
import { NodeLabel } from "../../UI/NodeLebal";

export const NodeNotes = () => {
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
      <h1>NodeJS Notes</h1>
      <ul className="section-accordion">
        {nodeNotes.map((curEle) => {
          return (
            <NodeLabel
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
