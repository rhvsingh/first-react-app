import React from 'react'

const SideBar = ({ addButton, noteData, activateNote, selectedId }) => {
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
                        <div className={`aside-child px-1 py-1 ${selectedId === note.id ? 'active-note' : ''}`} data-id={note.id} onClick={activateNote} key={i}>
                            Note {i + 1}
                        </div>
                    )
                })}

            </div>
        </aside>
    )
}

export default SideBar