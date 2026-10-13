export const NodeContent = ({ curData, isActive }) => {
  const { content } = curData;

  return (
    <ul className="content-accordion">
      {content.map((curEle, id) => {
        const { type, text } = curEle;
        return (
          <li key={id} className="leading-6 sm:leading-7">
            <p>{isActive && `${type} ${text}`}</p>
          </li>
        );
      })}
    </ul>
  );
};
