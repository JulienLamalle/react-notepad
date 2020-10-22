import React from 'react'
import Showdown from "showdown";
import './notedisplay.scss'


const NoteDisplay = ({title, content}) => {
  const converter = new Showdown.Converter();
  let HTMLText = converter.makeHtml(content)

  function createMarkup(text) {
    return { __html: text };
  }

  return(
    <div className="divnote">
      <div className="divtitle">
        <h1 className="notetitle">{title}</h1>
      </div>
      <div className="divnotecontent" dangerouslySetInnerHTML={createMarkup(HTMLText)} />
    </div>
  )
}

export default NoteDisplay