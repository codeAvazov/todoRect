import React from "react";

export const List = ({ list, deleteTask, isUpdate, update }) => {
  return (
    <div className="my-5 py-5">
      <ul className="list">
        {list.map((item, index) => (
          <li key={index} className="m-3 list-item rounded bg-dark text-light">
            <h3 className="title text-uppercase text-center">{item.title}</h3>
            <p className="description my-4 text-capitalize" style={{overflow : 'hidden'}}>
              <strong>Description : </strong> {item.description}
            </p>
            <p className="deadline">
              <strong>
                From : _
                <span className="text-muted">
                  {new Date().toLocaleDateString()}
                </span>
                <br />
                To : _<span className="text-muted">{item.deadline}</span>
              </strong>
            </p>
            <button
              className="btn btn-danger float-right mt-3"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning mt-3 mr-3 float-right"
              onClick={() => update(index)}
              disabled={isUpdate}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
