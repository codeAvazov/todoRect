import React from "react";

export const Form = ({
  title,
  description,
  deadline,
  updateTask,
  addTask,
  isUpdate,
  setTask,
}) => {
  return (
    <div className="w-50 mx-auto">
      <form className="form" onSubmit={isUpdate ? setTask : addTask}>
        <div className="form-group">
          <label>
            <strong>Title</strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={updateTask}
          />
        </div>
        <div className="form-group">
          <label>
            <strong>Description</strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={description}
            onChange={updateTask}
          />
        </div>
        <div className="form-group">
          <label>
            <strong>Deadline</strong>
          </label>
          <input
            type="text"
            className="form-control"
            name="deadline"
            placeholder="Enter date!!! example: 12.02.2002"
            value={deadline}
            onChange={updateTask}
          />
        </div>
        <button type="submit" className={isUpdate ? 'btn btn-warning float-right' : 'btn btn-primary float-right'}>
          {isUpdate ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
};
