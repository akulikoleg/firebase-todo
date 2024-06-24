import {useState} from "react";
import {collection, addDoc, Timestamp } from "firebase/firestore";
import db from './connectDB';


function EditTaskForm(props){


    //state for title of the rack
    const [title, setTitle] = useState('');


    //function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(title);
        setTitle('');

    };

    //hide form if id null
    if(!props.id) return null;

    return (
        <form>
            <input type="text" placeholder='Enter task title'
                    value = {title}
                   onChange={e => setTitle(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>Add task</button>

        </form>
    );

}

export default EditTaskForm;