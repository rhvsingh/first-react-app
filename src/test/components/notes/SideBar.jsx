import React from 'react'
import { FaTrash } from 'react-icons/fa'

const SideBar = ({ addButton, noteData, activateNote, selectedId, deleteNote }) => {
    return (
        <aside>
            <div className='px-1 py-1'>
                <div className='main-heading d-flex gap-2 justify-center'>
                    Notes
                    <button className='btn' onClick={addButton}>+</button>
                </div>
            </div>
            <div>
                {noteData.map((note, i) => {
                    return (
                        <div style={{ position: 'relative' }} key={i}>
                            <div className={`aside-child px-1 py-1 ${selectedId === note.id ? 'active-note' : ''}`} data-id={note.id} onClick={activateNote}>
                                Note {i + 1}
                                <br />
                                {note.content.split("\n").length > 20 ? note.content.split("\n")[0].slice(0, 20) + '...' : note.content.split("\n")[0]}
                            </div>
                            <div className="note-delete-button" onClick={() => { deleteNote(note.id) }}><FaTrash /></div>
                        </div>
                    )
                })}

            </div>
        </aside>
    )
}

export default SideBar