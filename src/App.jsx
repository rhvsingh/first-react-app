import React, { useState } from 'react';
import './style.css'
import Header from './components/Header'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([{
    id: 0,
    task: 'HomeWork',
    date: '08/20/2022',
    reminder: true,
  }, {
    id: 1,
    task: 'Skillvalley Project',
    date: '08/15/2022',
    reminder: false,
  }, {
    id: 2,
    task: 'Internship Work Pending to be done',
    date: '08/10/2022',
    reminder: true,
  }
  ])

  const [addTaskToggle, setAddTaskToggle] = useState(false)


  const deleteFun = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="main">
      <div className='task-box'>
        <Header onAddToggle={() => { setAddTaskToggle(!addTaskToggle) }} addTaskToggle={addTaskToggle} />
        {addTaskToggle && <AddTask addTask={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteFun} onToggle={toggleReminder} />) : ('No Tasks To Show')}

      </div>
    </div>
  );
}

export default App;
