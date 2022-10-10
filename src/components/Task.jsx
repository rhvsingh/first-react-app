import React from 'react'
import { FaTimes, FaRegTrashAlt } from 'react-icons/fa'

const Task = ({ task, index, onDelete, undoButton, onToggle }) => {

  let horizPos = 0
  let checkDelete = 0
  let targetIndex = -1
  let counterStart = -1

  const deleteBox = (e, id) => {
    horizPos = e.pageX
    targetIndex = id
    let taskDelete = document.getElementsByClassName('task-each')[id]
    taskDelete.addEventListener('mousemove', getPosition, true)
  }

  function getPosition(value) {

    let taskDelete = document.getElementsByClassName('task-each')[targetIndex]

    if (horizPos - value.pageX > 0) {

      if (horizPos - value.pageX >= 100) {
        checkDelete = 1
      } else {
        /* value.srcElement.style.transform = 'translateX(-' + (horizPos - value.pageX) + 'px)' */
        taskDelete.style.opacity = 1 - ((horizPos - value.pageX) / 10000)
        console.log(Math.floor((horizPos - value.pageX)))
        taskDelete.style.filter = 'brightness(' + (100 - Math.floor((horizPos - value.pageX) / 3)) + '%)'
        taskDelete.style.transform = 'translateX(-' + (horizPos - value.pageX) + 'px)'
        checkDelete = 0

        counterStart = horizPos - value.pageX
      }
    }
  }

  function mouseUP(id, delID) {
    let taskDelete = document.getElementsByClassName('task-each')[id]
    taskDelete.removeEventListener('mousemove', getPosition, true)
    taskDelete.style.transform = 'translateX(0px)'
    taskDelete.style.opacity = 1
    taskDelete.style.filter = 'brightness(100%)'
    console.log('mouse UP')
    if (checkDelete === 1) {
      var counter = (100 - counterStart)
      console.log('Counter ', counter)
      let interVal = setInterval(() => {
        console.log('working')
        taskDelete.style.transform = 'translateX(-' + counter + '%)'
        counter += 1
      }, 1)

      setTimeout(function () {
        clearInterval(interVal)
        undoButton(delID, targetIndex)
        /* onDelete(delID)  */
      }, 400)

      checkDelete = 0
    }
  }

  function mouseLeave(id) {
    let taskDelete = document.getElementsByClassName('task-each')[id]
    taskDelete.removeEventListener('mousemove', getPosition, true)
    taskDelete.style.transform = 'translateX(0px)'
    taskDelete.style.opacity = 1
    taskDelete.style.filter = 'brightness(100%)'
    console.log('mouse Leave')
  }

  function normalClick(id, delID) {
    let taskDelete = document.getElementsByClassName('task-each')[id]
      let counter = 0
      console.log('Counter ', counter)
      let interVal = setInterval(() => {
        console.log('working')
        taskDelete.style.transform = 'translateX(-' + counter + '%)'
        counter += 1
      }, 1)
      setTimeout(function () {
        clearInterval(interVal)
        undoButton(delID, targetIndex)
        /* onDelete(delID)  */
      }, 400)
    
  }

  return (
    <div className='task-box-child'>
      <div onMouseDown={(e) => deleteBox(e, index)} onMouseUp={() => mouseUP(index, task.id)} onMouseLeave={() => mouseLeave(index)} className={task.reminder ? 'd-flex justify-between align-items-center task-each active' : 'd-flex justify-between align-items-center task-each'} onDoubleClick={() => onToggle(task.id)}>
        <div>
          <h3 key={task.id}>{task.task} </h3>
          <div className="task-date">{task.date}</div>
        </div>
        <div>
          <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => normalClick(index, task.id)} />
        </div>
      </div>
      <div className='delete-box'>
        <FaRegTrashAlt className='delete-box-icons' />
      </div>
    </div>
  )
}

export default Task