import Todo from "Frontend/generated/com/example/application/Todo/Domain/Entity/Todo";

const LocalStorageTaks = (todo : Todo[]) => {
    // @ts-ignore
    localStorage.setItem("taks", JSON.stringify(todo))
}

export default LocalStorageTaks;