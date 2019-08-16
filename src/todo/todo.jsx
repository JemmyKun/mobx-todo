import React, { Component } from "react";
import Add from "./add";
import TodoList from "./todoList";

class Todo extends Component {
    render() {
        return (
            <div className="todo-box">
                <h1>mobx-todo</h1>
                <Add />
                <TodoList />
            </div>
        )
    }
}

export default Todo;