import React from 'react';
import './notesListing.scss'

const NotesListing = ({notesList, newNote, deleteAll}) => {
  
  const savedNotes = notesList.map((note) => (
    <div key={note.id} className="note">
      <div> 
        <h3>{note.title}</h3>
        <p>
          {note.content.length > 140 ? `${note.content.substring(0, 140)}...` : note.content}
        </p>
      </div>
    </div>
  ));
  
  return(
    <div className="main-notes">
      <div className="buttons">
        <button className="new-note" type="submit" onClick={() => {newNote()}}>Ajouter une note</button>
        <p onClick={() => {deleteAll()}}> X </p>
      </div>
      {savedNotes}
    </div>
  )
}

export default NotesListing;