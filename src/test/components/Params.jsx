import React from 'react'
import { useParams } from 'react-router-dom'

export default function Params() {
    const {name} = useParams()

  return (
    <div className="main">
        {name}
        <br />
    </div>
  )
}
