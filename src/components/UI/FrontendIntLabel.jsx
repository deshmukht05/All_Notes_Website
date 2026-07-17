import { FrontendIntContent } from "../Pages/Frontend Interview/FrontendIntContent";

export const FrontendIntLabel = ({ curData, isActive, onToggle }) => {
  const { id, question, category, difficulty } = curData;

  return (
    <li key={id}>
      <div className="accordion-grid">
        <div className="accordion-grid-2">
          <p className="accordion-question">
            {id}. {question}
          </p>
          <p className="accordion-subtitle">
            Category: {category}, Difficulty: {difficulty}
          </p>
        </div>
        <button
          onClick={onToggle}
          className={isActive ? "active-btn" : "deactive-btn"}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <FrontendIntContent key={id} curData={curData} isActive={isActive} />
    </li>
  );
};
