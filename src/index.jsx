import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

// Others Libs

import shortid from 'shortid';

// Components
import MarkdownInput from './components/MarkdownInput'
import NoteDisplay from './components/NoteDisplay'
import NotesListing from './components/NotesListing'

// SCSS
import './index.scss';

const App = () => {
  const [content, setContent] = useState('')
  const [title , setTitle] = useState('')
  const [id, setId] = useState('')
  const [notesList, setNotesList] = useState([])

  const handleChange = (input) =>  {
    if (input.title !== undefined) setTitle(input.title);
    if (input.content !== undefined) setContent(input.content);
  }

  const handleSave = (note) => {
    note.id = shortid.generate();
    setContent(note.content);
    setTitle(note.title)
    setNotesList([...notesList, note])
  }

  useEffect(() => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      setNotesList(JSON.parse(notes))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notesList));
  }, [notesList])


  const newNote = () => {
    setId(shortid.generate());
    setTitle('');
    setContent('');
  };

  const deleteAll = () => {
    localStorage.clear();
    setNotesList([]);
  }

  return (
    <div className="main">
      <aside className="notes-list">
        <NotesListing notesList={notesList} newNote={newNote} deleteAll={deleteAll} />
      </aside>
      <section className="space-creation">
        <NoteDisplay title={title} content={content} id={id} />
        <MarkdownInput title={title} content={content} id={id} handleSave={handleSave} handleChange={handleChange} />
      </section> 
    </div> 
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));