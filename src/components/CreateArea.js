import React, { useState } from "react";
import "./CreateArea.css";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function updateTitle(e) {
        const value = e.target.value;
        setTitle(value);
    }

    function updateContent(e) {
        const value = e.target.value;
        setContent(value);
    }

    function createNote(e){
        const note = {
            title: title,
            content: content
        }
        setTitle("");
        setContent("");
        props.addNote(note);
        e.preventDefault();
    }

    return (<div>
        <form>
          <input name="title" placeholder="Title" onChange={updateTitle} value={title}/>
          <textarea name="content" placeholder="Take a note..." rows="3" onChange={updateContent} value={content} />
          <button onClick={createNote}>Add</button>
        </form>
      </div>);
}

export default CreateArea;