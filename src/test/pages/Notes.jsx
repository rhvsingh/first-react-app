import React, { useState } from 'react'
import Split from 'react-split'
import { v4 as uuid } from 'uuid'

import SideBar from '../components/notes/SideBar'
import Editor from '../components/notes/Editor'

import './Notes.css'

const Notes = () => {

    const [noteData, setNoteData] = useState([])
    const [selectedId, setSelectedId] = useState(0)

    const createNewOne = () => {
        setNoteData((oldValue) => {
            let unique_id = uuid();
            let small_id = unique_id.slice(0, 8)
            setSelectedId(small_id)
            return ([
                ...oldValue,
                {
                    id: small_id,
                    content: ''
                }
            ])
        })
        console.log('add button')
    }

    const addButton = () => {
        setNoteData((oldValue) => {
            let unique_id = uuid();
            let small_id = unique_id.slice(0, 8)
            return ([
                ...oldValue,
                {
                    id: small_id,
                    content: ''
                }
            ])
        })
        //console.log('add button')
    }

    const activateNote = (e) => {
        //console.log(e.target.getAttribute('data-id'))
        setSelectedId(e.target.getAttribute('data-id'))
    }

    return (
        noteData.length ?
            <Split className='d-flex' style={{ height: 'calc(100vh - 56px)' }}
                gutterSize={10}
                sizes={[25, 75]}
                minSize={[100, 300]}
            >
                <SideBar addButton={addButton} noteData={noteData} activateNote={activateNote} selectedId={selectedId} />
                <Editor />
            </Split>
            :
            <div className='main'>
                <div className='ta-center'>
                    <h1>You have no notes</h1>
                    <button className='px-2 py-1 my-1' onClick={createNewOne}>Create one now</button>
                </div>
            </div>
    )
}

export default Notes