import {useState, useEffect} from "react";
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import db from './connectDB'

function EditTaskForm(props){

    //state for title of the rack
    const [title, setTitle] = useState('');

    getDoc(doc(db, 'tasks', props.id)).then(doc => {
        console.log(doc.data());
        setTitle(doc.data().title);
    })


   

    //
    // useEffect(() => {
    //     getDoc(doc(db, 'tasks', props.id)).then(doc => {
    //                     console.log(doc.data());
    //                     setTitle(doc.data().title);
    //                 });
    // }, []);

    //function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        updateDoc(doc(db, 'tasks', props.id), {title})
            .then(r => console.log(r))
            .catch(er => console.log(er))
        props.onCancel;
    };
    
    
    if(!props.id) return null;
    
    
    return (
        <form>
            <input type="text" placeholder='Enter task title'
                    value = {title}
                   onChange={e => setTitle(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>Save</button>
            <button type="submit" onClick={props.onCancel}>Cancel</button>

        </form>
    );

}

export default EditTaskForm;