import { useEffect, useState } from "react";
import tanstackNotes from "../../../api/tanStack_notes.json";
import { TanStack } from "../../UI/TanStack";

export const TanStackNotes = () => {
  // const [data, setData] = useState([]);
  const [activeID, setActiveID] = useState(null);

  // useEffect(() => {
  //   setData(tanstackNotes);
  // }, []);

  const handleButtonToggle = (id) => {
    setActiveID((prevID) => (prevID === id ? null : id));
  };

  return (
    <div>
      <h1>TanStack Notes</h1>
      <ul className="section-accordion">
        {tanstackNotes.map((curEle) => {
          return (
            <TanStack
              key={curEle.id}
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
