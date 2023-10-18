import PropTypes from "prop-types";

export function TodoItem({ todo, onChangeTodo, onDeleteTodo, onChange }) {
  const classes = ["textCheck"];

  if (todo.done) {
    classes.push("done");
  }
  return (
    <>
      <li className="list" key={todo.id}>
        <p className={classes.join(" ")}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onChange(todo.id)}
          />
          {todo.title}
        </p>
        <button className="button" onClick={() => onDeleteTodo(todo.id)}>
          X
        </button>
      </li>
    </>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onChangeTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
