import { useEffect, useState } from "react";
import reduxNotes from "../../../api/reduxNotes.json";
import { ReduxLabel } from "../../UI/ReduxLabel";

export const ReduxNotes = () => {
  const [activeID, setActiveID] = useState(null);

  const handleToggleButton = (id) => {
    setActiveID((prevID) => (prevID === id ? null : id));
  };

  return (
    <>
      <h1>Redux Notes</h1>
      <ul className="section-accordion">
        {reduxNotes.map((curData) => {
          return (
            <ReduxLabel
              key={curData.id}
              curData={curData}
              isActive={activeID === curData.id}
              onToggle={() => handleToggleButton(curData.id)}
            />
          );
        })}
      </ul>
    </>
  );
};
