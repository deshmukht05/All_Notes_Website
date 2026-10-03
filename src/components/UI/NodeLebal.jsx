import { NodeContent } from "../Pages/Node JS Notes/NodeContent";

export const NodeLabel = ({ curData, isActive, onToggle }) => {
  const { title, id } = curData;

  return (
    <li key={id}>
      <div className="accordion-grid">
        <p className="accordion-question">{id}. {title}</p>
        <button
          onClick={onToggle}
          className={isActive ? "active-btn" : "deactive-btn"}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <NodeContent key={id} curData={curData} isActive={isActive} />
    </li>
  );
};
