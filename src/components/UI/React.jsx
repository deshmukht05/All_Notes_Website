import { ReactContent } from "../Pages/React Notes/ReactContent";

export const React = ({ curData, isActive, onToggle }) => {
  const { title, id } = curData;

  return (
    <li key={id}>
      <div className="accordion-grid">
        <p className="accordion-question">{id}: {title}</p>
        <button
          onClick={onToggle}
          className={isActive ? "active-btn" : "deactive-btn"}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <ReactContent key={id} curData={curData} isActive={isActive} />
    </li>
  );
};
