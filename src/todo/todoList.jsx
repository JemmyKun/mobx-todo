import React from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { store } from "../store";

const TodoList = () => {
    let { list } = store.todo;
    return (
        <div>
            {
                Array.isArray(list) && list.map((item, index) => {
                    let { name, createTime } = item;
                    return (
                        <div key={index}>
                            {name} -- {createTime}
                            <span onClick={action(() => {
                                store.todo.list.splice(index, 1);
                            })}>删除</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default observer(TodoList);