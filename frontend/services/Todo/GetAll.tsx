import {TodoController} from "Frontend/generated/endpoints";

const GetAllTodo = async () => {
    return  await TodoController.getAll();
}

export default GetAllTodo;