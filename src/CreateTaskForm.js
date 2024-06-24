import {useState} from "react";
import {collection, addDoc, Timestamp } from "firebase/firestore";
import db from './connectDB';


function CreateTaskForm(){
    //state for title of the rack
    const [title, setTitle] = useState('');


    //function to handle the form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(title);

      addDoc(collection( db, 'tasks'),{
          title: title,
          created: Timestamp.now()
      }).then(r => console.log(r))
          .catch(err => console.log(err));

      setTitle('');

    };


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

export default CreateTaskForm;