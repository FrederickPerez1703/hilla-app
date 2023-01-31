import {TodoController} from "Frontend/generated/endpoints";

const DeleteTodo = async (id : number | undefined) => {
   return  await TodoController.delete(id);
}

export default DeleteTodo;