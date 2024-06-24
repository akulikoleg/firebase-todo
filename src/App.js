import db  from  "./connectDB"
import {  collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import {useEffect, useState} from "react";
import CreateTaskForm from "./CreateTaskForm";
import TaskList from "./TaskList";


function App() {

    const [editTaskId, setEditTaskId] = useState(null);

    const onEdit = (id) => {
        console.log(id);
    }


  return (
    <div >
        <CreateTaskForm/>
        <TaskList onEdit={onEdit}/>
        
    </div>

  );
}

export default App;
