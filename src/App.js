import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Do Shopping", completed: true }
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setnewTitle] = useState("");

  const addNew = (title) => {
    setList([...list, { id: Date.now(), title: title, completed: false }]);
    setnewTitle("");
  };

  const markCompleted = (id) => {
    setList(
      list.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };
  const clearCompleted = () => {
    setList(list.filter((item) => !item.completed));
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="add_form">
        <input
          value={newTitle} //yazdigimiz input newTitle olacak
          onChange={(e) => setnewTitle(e.target.value)} //içeriği diziye atıyoruz
          placeholder="Add to the List"
        />
        <button
          onClick={() => {
            addNew(newTitle);
          }}
        >
          Add{""}
        </button>
      </div>
      <div className="list">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => markCompleted(item.id)}
            className={item.completed ? "completed" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button onClick={() => clearCompleted()} className="clear">
        Clear Completed
      </button>
    </div>
  );
}
