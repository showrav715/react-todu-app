const List = ({ todos, handleDelete, handleEdit }) => {
  return (
    <>
      <div className="container">
        <ul className="list-group">
          {todos.length === 0 && (
            <li className="list-group-item">No Todos Found</li>
          )}
          {todos.map((item) => {
            return (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.todu}
                <div className="">
                  <button
                    type="button"
                    onClick={() => handleEdit(item)}
                    className="btn btn-sm btn-outline-primary mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
