import React, { useState } from 'react'

const AddTask = ({ addTask }) => {

    const onSubmit = (e) => {
        e.preventDefault()

        if(!task.length > 0) {
            alert('Please Enter Task')
            return
        }

        if(!date.length >0) {
            alert('Please Enter Date')
            return
        }

        addTask({task,date,reminder})

        settask('')
        setDate('')
        setReminder(false)

    }

    const [task, settask] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className='form' onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input type="text" placeholder="Add a task" value={task} onChange={(e)=>settask(e.target.value)}/>
            </div>
            <div>
                <label>Day &amp; Time</label>
                <input type="text" placeholder="Add Day &amp; Time" value={date} onChange={(e)=>setDate(e.target.value)} />
            </div>
            <div>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Add Task" />
        </form>
    )
}

export default AddTask