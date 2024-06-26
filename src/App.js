import db  from  "./connectDB"
import {  collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import {useEffect, useState} from "react";
import CreateTaskForm from "./CreateTaskForm";
import TaskList from "./TaskList";
import EditTaskForm from "./EditTaskForm";


function App() {

    const [editTaskId, setEditTaskId] = useState(null);

    const onEdit = (id) => {
        setEditTaskId(id);
    }

    const onEditCancel = () => {
        setEditTaskId(null);

    }

  return (
    <div className="App">
        <CreateTaskForm/>
        <TaskList onEdit={onEdit}/>
        <EditTaskForm id={editTaskId} onCancel={onEditCancel} />

    </div>

  );
}

export default App;
