import React from 'react';
import './Note.css';

function Note(props) {
    function removeNote() {
        props.removeNote(props.id);    
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={removeNote}>DELETE</button>
    </div>
}

export default Note;