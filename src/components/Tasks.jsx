import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  let completeRequest = 0

  const undoButton = (id, targetIndex) => {
    let taskDelete = document.getElementsByClassName('task-each')[targetIndex]
    taskDelete.style.display = 'none'
    document.getElementsByClassName('task-undo-modal')[0].style.display = 'flex'
    console.log('Show undo button')

    completeRequest = 0

    setTimeout(() => {
      console.log('Time Out', id)
      if (completeRequest === 0) {
        onDelete(id)
        console.log(tasks)
      } else {
        taskDelete.style.display = 'flex'
        taskDelete.style.transform = 'translateX(0px)'
        taskDelete.style.opacity = 1
        taskDelete.style.filter = 'brightness(100%)'
        document.getElementsByClassName('task-undo-modal')[0].style.display = 'none'
      }
    }, 1500)
  }

  return (
    <div className='tasks'>
      <div className='task-undo-modal'>
        <button type='button' onClick={() => { completeRequest = 1 }}>Undo</button>
      </div>
      {tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} onDelete={onDelete} undoButton={undoButton} onToggle={onToggle} />
      ))}

    </div>
  )
}

export default Tasks