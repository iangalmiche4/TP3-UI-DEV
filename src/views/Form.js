import { useState } from "react";
import Item from "../Components/Item";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [data, setData] = useState([
    { text: "Faire à manger", id: uuidv4() },
    { text: "Dormir", id: uuidv4() },
    { text: "Acheter des cadeaux de Noel", id: uuidv4() },
  ]);
  const [input, setInput] = useState();

  const deleteTask = (id) => {
    const filtered = data.filter((item) => {
      return item.id !== id;
    });
    setData(filtered);
  };

  const addTask = (e) => {
    e.preventDefault();
    const newArr = [...data];
    const newTask = {};
    newTask.text = input;
    newTask.id = uuidv4();
    newArr.push(newTask);
    setData(newArr);

    setInput("");
  };

  const linkedInput = (e) => {
    setInput(e);
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={addTask} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Choses à faire
        </label>
        <input
          value={input}
          onInput={(e) => linkedInput(e.target.value)}
          type="text"
          className="form-control"
          id="todo"
        />

        <button className="mt-2 btn btn-primary d-block">Créer</button>
      </form>

      <h2>Liste des choses à faire : </h2>
      <ul className="list-group">
        {data.map((item) => {
          return (
            <Item
              text={item.text}
              key={item.id}
              id={item.id}
              delFunc={deleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
}