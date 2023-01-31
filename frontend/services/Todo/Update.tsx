import Todo from "Frontend/generated/com/example/application/Todo/Domain/Entity/Todo";
import {TodoController} from "Frontend/generated/endpoints";

const UpdateTodo = async (todo: Todo) => {
    return await TodoController.update({...todo});
}

export default UpdateTodo;