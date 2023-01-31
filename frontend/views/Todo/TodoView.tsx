import Todo from '../../generated/com/example/application/Todo/Domain/Entity/Todo';
import { useEffect, useState} from "react";
import {TextField} from '@hilla/react-components/TextField.js';
import {Notification} from '@hilla/react-components/Notification.js';
import {Button} from "@hilla/react-components/Button.js";
import {Checkbox} from "@hilla/react-components/Checkbox.js";
import GetAllTodo from '../../services/Todo/GetAll.js';
import Save from '../../services/Todo/Save.js';
import Update from '../../services/Todo/Update.js';
import LocalStorageTaks from '../../util/LocalStorageTaks.js'
import Delete from '../../services/Todo/Delete.js'

export default function TodoView() {
    const [task, setTask] = useState('')
    const [todos, setTodos] =useState<Todo[]>([]);

    useEffect(() => {
        // @ts-ignore
        GetAllTodo().then( (data )=> setTodos(data))
    },[])

    const save = async () => {
      const saved = await Save(task);
        // @ts-ignore
        if (saved){
            setTodos([...todos, saved]);
            setTask('')
            LocalStorageTaks([...todos, saved])
        }
    }

    const updateTodo = async (todo: Todo, done:boolean) => {
       const resp = await Update({...todo,done});

        if (resp){
            setTodos(todos.map(existing => existing.id === resp.id ? resp : existing))
            if (resp.done){
                Notification.show("done task");
            }
        }
    }

    const deleteTodo = async (id : number | undefined) => {
        await Delete(id);
        // @ts-ignore
        GetAllTodo().then((data) => setTodos(data))
        Notification.show("delete task");
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

