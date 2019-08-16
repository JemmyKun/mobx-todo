import React from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import { store } from "./store";
import Todo from "./todo/todo";

const App = () => {
    let { app } = store;
    let { timer } = app;

    return (
        <div>
            timer:{timer}
            <button onClick={action(() => {
                store.app.timer++
            })}>increment</button>
            <button onClick={action(() => {
                store.app.timer--
            })}>decrement</button>
            <button onClick={action(() => {
                store.app.timer = 0;
            })}>reset</button>
            <hr />
            <Todo />
        </div>
    )
}

export default observer(App);