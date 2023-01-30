import {useEffect, useState} from "react";
import Todo from "Frontend/generated/com/example/application/Todo/Domain/Entity/Todo";

export default function RecordView(){

    const[recordTaks , setRecordTaks] = useState<Todo[]>([])
    useEffect(() => {
        // @ts-ignore
        setRecordTaks(JSON.parse(localStorage.getItem("taks")))
    },[])
    return(


        <div className="p-m">
            <h4>Record</h4>
            <br/>
                <ul>
                    {recordTaks.map(taks => (
                        <li key={taks.id}>{taks.task}</li>
                    ))}
                </ul>
        </div>
    )
}