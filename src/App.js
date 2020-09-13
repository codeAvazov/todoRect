import React, { useState } from "react";
import { Form } from "./Components/Form";
import { List } from "./Components/List";

var i = 0;

export const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isUpdate, SetIsUpdate] = useState(false);


  const [list, setList] = useState([
    { title: "Redux", description: "Learn redux", deadline: "12.10.2020" },
  ]);

  const updateTask = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "deadline") {
      setDeadline(value);
    } else {
      setDescription(value);
    }
  };
  

  const addTask = (e) => {
    e.preventDefault();
    if (title === "") alert("Enter title");
    if (description === "") alert("Enter description");
    if (deadline === "") alert("Enter deadline");
    else if (deadline !== "" && title !== "" && deadline !== "") {
      let obj = { title, description, deadline };
      setList([...list, obj]);
      setTitle("");
      setDescription("");
      setDeadline("");
    }
  };

  const deleteTask = (index) => {
    setList(list.filter((item, i) => i !== index));
    setTitle('');
    setDescription('');
    setDeadline('');
    SetIsUpdate(false);
  };
  

  const update = (index) => {
    i = index;
    SetIsUpdate(true);
    let obj = list[i];
    setTitle(obj.title);
    setDescription(obj.description);
    setDeadline(obj.deadline);
  }

  const setTask = (e) => {
    e.preventDefault();
    SetIsUpdate(false);
    let obj = { title, description, deadline };
    list[i] = obj;
    setTitle('');
    setDescription('');
    setDeadline('');
  };


  return (
    <div className="container mt-4">
      <h1 className="text-center">TODO APP</h1>
      <Form
        title={title}
        description={description}
        deadline={deadline}
        updateTask={updateTask}
        addTask={addTask}
        isUpdate={isUpdate}
        setTask={setTask}
      />
      <List list={list} deleteTask={deleteTask} isUpdate={isUpdate} update={update} />
    </div>
  );
};
