import React from 'react'

const Editor = ({ noteData, setNoteData }) => {

  return (
    <div className='notes-editor'>
      <textarea value={noteData} placeholder="Enter note here" onChange={(e) => { setNoteData(e.target.value) }} />
    </div>
  )
}

export default Editor