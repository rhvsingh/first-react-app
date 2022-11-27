import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Confetti from "react-confetti"

import Die from '../components/tenzies/Die'

import TenziesStyle from './tenzies.module.css'

const Tenzies = () => {

    const [dieElement, setDieElement] = useState(allNewDies())
    const [tenzies, setTenzies] = useState(false)
    const [rollCount, setRollCount] = useState(0)
    const [secCount, setSecCount] = useState(0)
    const [gameStart, setGameStart] = useState(false)
    const timerInterval = useRef()

    useEffect(() => {
        let allHeld = dieElement.every(die => die.isHeld)
        let firstValue = dieElement[0].value
        let allSameValue = dieElement.every(die => die.value === firstValue)

        if (allHeld && allSameValue) {
            setGameStart(false)
            setTenzies(true)
            clearInterval(timerInterval.current)
        }
    }, [dieElement, timerInterval])

    function generateNewDies() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: uuid()
        }
    }

    function allNewDies() {
        let newArray = []
        for (let i = 0; i < 10; i++) {
            newArray.push(generateNewDies())
        }
        return newArray
    }

    function rollDice() {
        if (!gameStart) {
            setSecCount(0)
            timerStart()
        }
        setRollCount(oldValue => oldValue + 1)
        setDieElement(oldElement =>
            oldElement.map(item => {
                return item.isHeld ? item : generateNewDies()
            })
        )
    }

    function timerStart() {
        timerInterval.current = setInterval(() => {
            console.log('timer calling')
            setSecCount(oldValue => oldValue + 1)
        }, 1000)
    }

    function holdDice(id) {
        if (!gameStart) {
            setSecCount(0)
            timerStart()
        }
        setGameStart(true)
        setDieElement(oldElement =>
            oldElement.map(item => {
                return item.id === id ? { ...item, isHeld: !item.isHeld } : item
            })
        )
    }

    function dieReset() {
        setTenzies(false)
        setRollCount(0)
        setDieElement(allNewDies())
    }

    return (
        <div className='tenzies'>
            <div className={`d-flex align-items-center justify-around flex-direc-col gap-2 ${TenziesStyle.tenziesMain}`}>
                {tenzies && <Confetti />}
                <h1>Tenzies</h1>
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className={TenziesStyle.tenziesMainGrid} >
                    {dieElement.map(item => <Die value={item.value} isHeld={item.isHeld} key={item.id} id={item.id} holdDice={() => holdDice(item.id)} />)}
                </div>
                <button className={TenziesStyle.rollDice} onClick={tenzies ? dieReset : rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
                {rollCount > 0 && `Rolled: ${rollCount}`}
                <br />
                {(gameStart || tenzies) && `Timer: ${secCount} seconds`}
            </div>
        </div>
    )
}

export default Tenzies