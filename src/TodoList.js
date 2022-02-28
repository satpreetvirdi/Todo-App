import React from "react";
import "./todolist.css";

const todoList = ({ todos }) => {
  return todos.map((todo) => (
    <ul className="todoOrder">
      <li>{todo}</li>
    </ul>
  ));
};
export default todoList;
