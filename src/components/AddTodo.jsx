import { useState } from "react";

const styles = {
  inputForm: {
    width: "200px",
    height: "20px",
    border: "2px solid #f6e6f7",
    marginTop: "8px",
    marginRight: "10px",
  },
};

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  return (
    <>
      <form>
        <label>
          <input
            placeholder="Add todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.inputForm}
          />
        </label>

        <button
          className="myButton"
          onClick={(e) => {
            e.preventDefault();
            onAddTodo(title);
            setTitle("");
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;
