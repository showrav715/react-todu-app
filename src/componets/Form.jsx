import { useState } from "react";
import List from "./List";

const Form = () => {
  const [todu, setTodu] = useState("");
  const [toduList, setToduList] = useState([]);
  const [edit, setEdit] = useState({
    status: false,
    id: null,
    todu: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todu) {
      alert("Todu is required");
      return;
    }
    setToduList([...toduList, { id: Date.now(), todu }]);
    setTodu("");
  };

  const handleEdit = ({ id, todu }) => {
    setEdit({ status: true, id, todu });
    setTodu(todu);
  };

  const handleEditTodu = (e) => {
    e.preventDefault();
    if (!todu) {
      return;
    }
    const newList = toduList.map((item) => {
      if (item.id == edit.id) {
        return { ...item, todu };
      }
      return item;
    });
    setToduList(newList);
    setTodu("");
    setEdit({ status: false, id: null, todu: "" });
  };

  const handleDelete = (id) => {
    let status = confirm("Are you sure you want to delete this item?");
    if (!status) return;
    const newList = toduList.filter((item) => item.id !== id);
    setToduList(newList);
  };

  return (
    <>
      <div className="container">
        <form
          onSubmit={edit.status ? handleEditTodu : handleSubmit}
          className="row g-3 align-items-center"
        >
          <div className="col-12">
            <label className="col-form-label" htmlFor="todu">
              {edit.status ? "Edit Todu" : "Add Todu"}
            </label>
            <div className="input-group">
              <input
                onChange={(e) => setTodu(e.target.value)}
                type="text"
                className="form-control"
                value={todu}
                id="todu"
                placeholder={edit.status ? "Edit Todu" : "Add Todu"}
              />
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              {edit.status ? "Edit Todu" : "Add Todu"}
            </button>
          </div>
        </form>
      </div>

      <div className="py-5">
        <List
          todos={toduList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </>
  );
};

export default Form;
