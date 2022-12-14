import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Navigation from './components/Navigation'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import Params from './components/Params'
import Table from './components/Table'
import NotFoundPage from './components/NotFoundPage'
import CardSkeleton from './components/CardSkeleton'

import Notes from './pages/Notes'
import Tenzies from './pages/Tenzies'
import Scrimba from './pages/Scrimba'
import QuizApp from './pages/QuizApp'

const Index = () => {

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
            setIsLoading(false)
        }

        getTasks()
    }, [])

    //Fetch Tasks

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

    const [addTaskToggle, setAddTaskToggle] = useState(false)


    const deleteFun = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
        setTasks(tasks.filter(task => task.id !== id))
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }

    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        console.log(updTask)

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
    }

    const addTask = async (task) => {

        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()

        setTasks([...tasks, data])

        /* const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
        setAddTaskToggle(!addTaskToggle) */
    }

    const TaskTracker = () => {
        return (
            <div className="main">
                <div className='task-box'>
                    <Header onAddToggle={() => { setAddTaskToggle(!addTaskToggle) }} addTaskToggle={addTaskToggle} />
                    {addTaskToggle && <AddTask addTask={addTask} />}
                    <Link to="/nav" style={{ color: "green" }}>Navigation</Link>
                    <br />
                    <Link to="/table" style={{ color: "green" }}>Table</Link>
                    <br />
                    {isLoading && <CardSkeleton cards={4} />}
                    {tasks.length > 0 && (<Tasks tasks={tasks} loading={isLoading} onDelete={deleteFun} onToggle={toggleReminder} />)}
                </div>
            </div>
        )
    }
    return (
        <Routes>
            <Route index element={<><Navigation /> <TaskTracker /></>} />
            <Route path="/name/:name" element={<><Navigation /><Params /></>} />
            <Route path="/table" element={<><Navigation /><Table /></>} />
            <Route path="/notes" element={<><Navigation /><Notes /></>} />
            <Route path="/tenzies" element={<><Navigation /><Tenzies /></>} />
            <Route path="/scrimba" element={<><Navigation /><Scrimba /></>} />
            <Route path="/quizapp" element={<><Navigation /><QuizApp /></>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Index