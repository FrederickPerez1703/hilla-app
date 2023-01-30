import Todo from '../../generated/com/example/application/Todo/Domain/Entity/Todo';
import {TodoController} from "Frontend/generated/endpoints";
import {useEffect, useState} from "react";
import { TextField } from '@hilla/react-components/TextField.js';
import { Notification } from '@hilla/react-components/Notification.js';
import {Button} from "@hilla/react-components/Button.js";
import {Checkbox} from "@hilla/react-components/Checkbox.js";

export default function TodoView() {
    const [task , setTask] = useState('')
    const [todos , setTodos] = useState<Todo[]>( []);

    useEffect(() => {
        getAll()
    },[])

    const getAll = async () => {
        await TodoController.getAll().then( data => {
            // @ts-ignore
            setTodos(data);
        })
    }
    const save = async () => {
      const saved = await TodoController.save(task);

        // @ts-ignore
        if (saved){
            setTodos([...todos, saved]);
            setTask('')
            localStorageTaks([...todos, saved])
        }
    }

    const updateTodo = async (todo: Todo, done:boolean) => {
       const resp = await TodoController.update({...todo,done});

        if (resp){
            setTodos(todos.map(existing => existing.id === resp.id ? resp : existing))
            if (resp.done){
                Notification.show("done task");
            }
        }
    }

    const deleteTodo = async (id : number | undefined) => {
        await TodoController.delete(id);
        getAll()
        Notification.show("delete task");
    }

    const localStorageTaks = (todo : Todo[]) => {
        console.log(task)
        // @ts-ignore

        localStorage.setItem("taks", JSON.stringify(todo))
    }


    return (
            <div className="p-m">

               <div className="flex gap-s">
                   <TextField value={task} onChange={e => setTask(e.target.value)}/>
                   <Button theme="primary" onClick={() => save()} >Add</Button>
               </div>
                <br/>

                    {todos.map( todo => (
                        <div key={todo.id} className="p-s">
                            <Checkbox checked={todo.done} onCheckedChanged={e => updateTodo(todo ,e.detail.value)}>
                              <span>{todo.task} </span>
                            </Checkbox>

                            <Button theme="secondary error" className="p-s"
                            onClick={() => deleteTodo(todo.id)}>x</Button>

                        </div>
                     ))
                    }
            </div>

    );
}

