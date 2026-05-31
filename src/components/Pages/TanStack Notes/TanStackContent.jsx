export const TanStackContent = ({ curData, isActive }) => {
  const { answer } = curData;

  return (
    <ul className="content-accordion">
      <p className="answer-section">{isActive && `${answer}`}</p>
    </ul>
  );
};
