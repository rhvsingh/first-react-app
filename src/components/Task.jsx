import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task,onDelete,onToggle}) => {
  return (
    <div className={task.reminder ? 'd-flex justify-between align-items-center task-each active' : 'd-flex justify-between align-items-center task-each'} onDoubleClick={()=>onToggle(task.id)}>
      <div>
        <h3 key={task.id}>{task.task} </h3>
        <div className="task-date">{task.date}</div>
      </div>
      <div>
        <FaTimes style={{color: 'red', cursor: 'pointer'} } onClick={()=>onDelete(task.id)} />
      </div>
    </div>
  )
}

export default Task