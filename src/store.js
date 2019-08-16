import { observable } from "mobx";

const store = observable({
    app: {
        timer: 0
    },
    todo: {
        list: [],
        name: "",
        editName: ""
    }
});

export { store }