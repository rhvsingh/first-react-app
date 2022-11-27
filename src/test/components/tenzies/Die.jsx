import React from 'react'

const Die = ({ value, isHeld, id, holdDice }) => {
    const styles = {
        fontSize: '2rem',
        backgroundColor: isHeld ? '#59E391' : '#fff'
    }
    return (
        <div style={styles} onClick={holdDice}>{value}</div>
    )
}

export default Die