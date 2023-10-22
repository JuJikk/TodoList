import "./App.css";
import AddTodo from "./components/AddTodo.jsx";
import { TodoItem } from "./components/TodoItem.jsx";
import { useState } from "react";

let nextId = 0;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: true },
];

function App() {
  const [todos, setTodos] = useState([]);
  // setTodos(JSON.parse(todos));
  // localStorage.setItem("todos", JSON.stringify(todos));
  function handleAddTodo(title) {
    const raw = JSON.parse(localStorage.getItem("todos"));
    const newTodos = [
      ...raw,
      {
        id: nextId + 1,
        title: title,
        done: false,
      },
    ];

    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  function onToggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      }),
    );
  }

  // function handleAddTodo(title) {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: nextId++,
  //       title: title,
  //       done: false,
  //     },
  //   ]);
  // }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      }),
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <ul className="wrapper">
      <h1>Your TODO list</h1>
      <h3 style={{ margin: 0 }}>Enter your task below</h3>
      <AddTodo onAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
          onChange={onToggleTodo}
        />
      ))}
    </ul>
  );
}

export default App;
