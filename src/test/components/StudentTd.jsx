import React from 'react'

const StudentTd = ({ stuData }) => {
    return (
        <tr key={stuData.id}>
            <td>{stuData.name}</td>
            <td>{stuData.age}</td>
            <td>{stuData.year}</td>
            <td>{stuData.branch}</td>
            <td>{stuData.phoneNo}</td>
            <td>{stuData.email}</td>
            <td>{stuData.github}</td>
            <td>{stuData.linkedIn}</td>
        </tr>
    )
}

export default StudentTd