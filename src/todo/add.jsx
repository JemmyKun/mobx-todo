import React, { Component } from "react";
import { action } from "mobx";
import { observer } from "mobx-react";
import { store } from "../store";

const Add = () => {
    let { todo } = store;
    let { name } = todo;
    return (
        <div>
            <input type="text" placeholder="add..." onChange={action((e) => {
                let name = e.target.value;
                store.todo.name = name;
            })}
                value={name}
            />
            <button onClick={action(() => {
                let item = {
                    name,
                    createTime: window.Date.now()
                }
                store.todo.list.push(item);
                store.todo.name = "";
            })}>add</button>
        </div>
    )
}

export default observer(Add)