import { MongoDBContent } from "../Pages/MongoDB Notes/MongoDBContent";

export const MongoDBLabel = ({ curData, isActive, onToggle }) => {
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
        <MongoDBContent key={id} curData={curData} isActive={isActive} />
      </li>
    );
}