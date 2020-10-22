import React from 'react';
import './markdown.scss' 

const MarkdownInput = ({title, content , handleChange, handleSave ,id }) => {

  return (
    <form className="formcontainer">
      <div className="title">
        <input type="text" name="title" value={'' ||  title} onChange={(e) => handleChange({title: e.currentTarget.value})} placeholder="Le nom de votre note" />
      </div>
      <div className="content">
        <textarea type="text" name="content" value={ '' || content}  onChange={(e) => handleChange({content: e.currentTarget.value})} placeholder="Votre note" />
      </div>
      <div className="button">
        <button onClick={() => handleSave({id, content, title })} type="submit" >Sauvegarder</button>
      </div>
    </form>
  )
}

export default MarkdownInput 