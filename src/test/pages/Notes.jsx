import React, { useEffect, useState } from 'react'
import Split from 'react-split'
import { v4 as uuid } from 'uuid'

import SideBar from '../components/notes/SideBar'
import Editor from '../components/notes/Editor'

import './Notes.css'

const Notes = () => {

    const [noteData, setNoteData] = useState(() => JSON.parse(localStorage.getItem('noteData')) || [])
    const [selectedId, setSelectedId] = useState((noteData[0] && noteData[0].id) || 0)

    useEffect(() => {
        localStorage.setItem('noteData', JSON.stringify(noteData))
    }, [noteData])

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
    }

    const addButton = () => {
        let unique_id = uuid();
        let small_id = unique_id.slice(0, 8)
        setNoteData((oldValue) => {
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

    const updateData = (e) => {
        setNoteData(oldNotes => {
            let newArray = []
            for (let i = 0; i < oldNotes.length; i++) {
                let oldNote = oldNotes[i]
                if (oldNote.id === selectedId) {
                    newArray.unshift({ ...oldNote, content: e })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        }


            /* oldValue.map(oldNote => {
                return oldNote.id === selectedId ? { ...oldNote, content: e } : oldNote
            }) */
        )
    }

    const deleteNote = (id) => {
        noteData.forEach((note, index) => {
            if (note.id === id) {
                if (noteData[index - 1] != null) {
                    setSelectedId(noteData[index - 1].id)
                } else {
                    setSelectedId(noteData[index + 1].id)
                }
            }
        })
        setNoteData(oldValue => oldValue.filter(item => item.id !== id))
    }

    return (
        noteData.length ?
            <Split className='d-flex' style={{ height: 'calc(100vh - 56px)' }}
                gutterSize={10}
                sizes={[25, 75]}
                minSize={[100, 300]}
            >
                <SideBar addButton={addButton} noteData={noteData} activateNote={activateNote} selectedId={selectedId} deleteNote={deleteNote} />

                <Editor noteData={noteData.find(data => data.id === selectedId).content} setNoteData={updateData} />
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