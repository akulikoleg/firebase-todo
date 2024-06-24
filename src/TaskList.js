import db  from  "./connectDB"
import {  collection, query, onSnapshot, orderBy, deleteDoc, doc , updateDoc} from 'firebase/firestore';
import {useEffect, useState} from "react";



function TaskList(props) {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const taskColRef = query( collection(db, 'tasks'), orderBy('created', 'asc') );
        onSnapshot(taskColRef, (snapshot) => {
            setTasks(snapshot.docs.map(doc=> ({
                id: doc.id,
                ...doc.data()
            })));

        })

    }, []);

    // delete task from firestore
    const onDeleteTasks = (id) => {
        deleteDoc(doc(db, 'tasks', id))
            .then(r => console.log(r))
            .catch(err => console.log(err))


    }

    const onToggleDone = (id) => {
        const task = tasks.find(task => task.id === id);
        const updatedTask = {...task, completed: !task.completed};

        updateDoc(doc(db, 'tasks', id), updatedTask)
            .then(r => console.log(r))
            .catch(er => console.log(er))

    }

    return (

        <ul>
            { tasks.map(task => (
                    <li key={task.id}>
                        {  task.completed ? <s>{task.title} </s> : task.title }
                        <button onClick={() => onDeleteTasks(task.id)}>Delete</button>
                        <button onClick={() => onToggleDone(task.id)}>Done</button>
                        <button onClick={() => props.onEdit(task.id)}>Edit</button>
                    </li>
             ))}
        </ul>

    )
}

export default TaskList;
