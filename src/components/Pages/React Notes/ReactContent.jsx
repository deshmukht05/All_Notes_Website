export const ReactContent = ({ curData, isActive }) => {
  const { content } = curData;

  return (
    <ul className="content-accordion">
      {content.map((curEle, id) => {
        const { type, text } = curEle;
        return (
          <li key={id} className="leading-5 sm:leading-6">
            <p>{isActive && `${type} ${text}`}</p>
          </li>
        );
      })}
    </ul>
  );
};
