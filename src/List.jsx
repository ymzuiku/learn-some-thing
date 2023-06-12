import "./List.css";

function Item({ id, title, completed, setData }) {
  const handleCompleted = () => {
    setData((data) => {
      return data.map((item) => {
        const nextItem = { ...item };
        if (nextItem.id === id) {
          nextItem.completed = !item.completed;
        }
        return nextItem;
      });
    });
  };
  const handleDelete = () => {
    setData((data) => {
      return data.filter((item) => item.id !== id);
    });
  };
  return (
    <div className="item" data-completed={completed}>
      <span className="title" onClick={handleCompleted}>
        {completed ? (
          <span className="icon">
            <iconify-icon
              className="icon"
              icon="ic:twotone-done"
            ></iconify-icon>
          </span>
        ) : (
          <span className="icon" />
        )}
        <span>{title}</span>
      </span>
      <button onClick={handleDelete}>
        <iconify-icon icon="ic:outline-close"></iconify-icon>
      </button>
    </div>
  );
}

export function List({ data, setData }) {
  return (
    <div className="list">
      {data.map((item) => {
        return <Item key={item.id} setData={setData} {...item} />;
      })}
    </div>
  );
}
