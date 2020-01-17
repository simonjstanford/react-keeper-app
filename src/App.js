import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote(note) {
    if (note) {
      note.id = notes.length;
      setNotes(prev => {
        let newNotes = [...prev, note];
        console.log(newNotes);
        return newNotes;
      });
    }
  }

  function removeNote(index) {
      setNotes(prev => {
        let newNotes = [...prev];
        newNotes.splice(index, 1);
        console.log(newNotes);
        return newNotes;
      });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map(x => (
        <Note key={x.id}
              id={x.id}
              title={x.title} 
              content={x.content}
              removeNote={removeNote}/>))}
      <Footer />
    </div>
  );
}

export default App;
