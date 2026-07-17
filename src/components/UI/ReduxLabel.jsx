import { ReduxContent } from "../Pages/Redux Notes/ReduxContent";

export const ReduxLabel = ({ curData, isActive, onToggle }) => {
  const { id, question } = curData;

  return (
    <li>
      <div className="accordion-grid">
        <p className="accordion-question">
          {id}. {question}
        </p>
        <button
          onClick={onToggle}
          className={isActive ? "active-btn" : "deactive-btn"}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <ReduxContent key={id} curData={curData} isActive={isActive} />
    </li>
  );
};
