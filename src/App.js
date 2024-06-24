import db  from  "./connectDB"
import {  collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import {useEffect, useState} from "react";
import CreateTaskForm from "./CreateTaskForm";
import TaskList from "./TaskList";


function App() {

  return (
    <div >
        <CreateTaskForm/>
        <TaskList/>
    </div>

  );
}

export default App;
