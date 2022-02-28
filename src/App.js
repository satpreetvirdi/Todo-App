import "./App.css";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import TodoList from "./TodoList";
function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleinput = (e) => {
    setText(e.target.value);
  };
  const handleChange = (e) => {
    if (text == "") {
    } else setTodos([...todos, text]);
    e.preventDefault();

    setText("");
  };
  return (
    <div className="App">
      <h3 style={{ fontSize: 60, justifyContent: "center", marginRight: 40 }}>
        {" "}
        TODO LIST
      </h3>
      <TextField
        style={{ color: "darkgoldenrod", backgroundColor: "white" }}
        value={text}
        onChange={handleinput}
        placeholder="Enter the Todo"
      />
      <button
        onClick={handleChange}
        style={{ textAlign: "center", margin: 10 }}
      >
        <AddIcon />
      </button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
