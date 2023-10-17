export function TodoItem(todo) {
  return (
    <>
      <li className="list" key={todo.todo.id}>
        <p>
          <input type="checkbox" />
          {todo.todo.title}
        </p>
        <button className="button">X</button>
      </li>
    </>
  );
}
