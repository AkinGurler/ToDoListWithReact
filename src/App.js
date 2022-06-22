import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Do Shopping", completed: true }
];

export default function App() {
  const [liste, setList] = useState(INITIAL_STATE);
  const [newTitle, setnewTitle] = useState("");

  const addNew = (title) => {
    setList([...liste, { id: Date.now(), title: title, completed: false }]);
    setnewTitle("");
  };

  const markCompleted = (id) => {
    setList(
      liste.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };
  const clearCompleted = () => {
    setList(liste.filter((item) => !item.completed));
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="ekleme_formu">
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
      <div className="liste">
        {liste.map((item, index) => (
          <div
            key={index}
            onClick={() => markCompleted(item.id)}
            className={item.completed ? "yapildi" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>
      <button onClick={() => clearCompleted()} className="temizle">
        Clear Completed
      </button>
    </div>
  );
}
