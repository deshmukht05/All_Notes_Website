export const ReactIntContent = ({ curData, isActive }) => {
  const { answer } = curData;

  return (
    <ul className="content-accordion">
      {answer.map((curEle, id) => {
        const { text } = curEle;
        return (
          <li key={id}>
            <p>{isActive && `${text}`}</p>
          </li>
        );
      })}
    </ul>
  );
};
