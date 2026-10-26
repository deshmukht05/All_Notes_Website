import { useState } from "react";
import mongoNotes from "../../../api/mongodb_notes.json"
import { MongoDBLabel } from "../../UI/MongoDBLabel";

export const MongoDBNotes = () => {
  const [activeID, setActiveID] = useState(null);

  const handleButton = (id) => {
    setActiveID((prevID) => (prevID === id ? null : id));
  };

  return (
    <>
      <h1>ReactJS Notes</h1>
      <ul className="section-accordion">
        {mongoNotes.map((curEle) => {
          return (
            <MongoDBLabel
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
}