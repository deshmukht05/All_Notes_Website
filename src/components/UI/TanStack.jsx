import { TanStackContent } from "../Pages/TanStack Notes/TanStackContent";

export const TanStack = ({ curData, isActive, onToggle }) => {
  const { title, id } = curData;

  return (
    <li>
      <div className="accordion-grid">
        <p className="accordion-question">{id}. {title}</p>
        <button
          onClick={onToggle}
          className={isActive ? "active-btn" : "deactive-btn"}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      <TanStackContent key={id} curData={curData} isActive={isActive} />
    </li>
  );
};
