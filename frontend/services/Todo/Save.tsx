import {TodoController} from "Frontend/generated/endpoints";

const Save = async (task:string) => {
    return await TodoController.save(task);
}

export default Save;