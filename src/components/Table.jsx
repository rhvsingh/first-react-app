import React, { useState, useEffect } from 'react'
import StudentTd from './StudentTd'
import { Link } from 'react-router-dom'
import { BiSortAlt2 as Sorter } from 'react-icons/bi'
export default function Table() {

    const [student, setStudent] = useState([])

    const fetchTable = async () => {
        const res = await fetch('http://localhost:5000/table')
        const data = await res.json()
        return data
    }

    useEffect(() => {
        const getTable = async () => {
            const tableFromServer = await fetchTable()
            setStudent(tableFromServer)
        }

        getTable()
    }, [])

    /* function update(dataA,dataB) {
        if (dataA < dataB) {
            return -1;
        } else if (dataA > dataB) {
            return 1;
        }
        return 0;
    } */

    const [counter, setCounter] = useState(0)
    const [idChecker, setIdChecker] = useState(0)

    useEffect(() => {
        console.log(counter, idChecker)
    }, [counter, idChecker])

    /* function update(data) {
        setStudent(student.slice().sort((a, b) => a.data > b.data ? 1 : -1))
    } */

    function update(data,id) {
        if (counter === 0 || idChecker !== id) {
            setStudent(student.slice().sort((a, b) => a[data] > b[data] ? 1 : -1))
            setCounter(1)
            setIdChecker(id)
        } else if (idChecker === id) {
            setStudent(student.slice().sort((a, b) => a[data] > b[data] ? -1 : 1))
            setCounter(0)
        }
    }

    const sorter = (id) => {
        switch (id) {
            case 1:
                update('name',id)
                break;
            case 2:
                update('age',id)
                break;
            case 3:
                update('year',id)
                break;
            case 4:
                update('branch',id)
                break;
            case 5:
                update('phone',id)
                break;
            case 6:
                update('email',id)
                break;
            case 7:
                update('github',id)
                break;
            case 8:
                update('linkedIn',id)
                break;

            default: break;
        }
    }

    return (
        <div className='main'>
            <div>
                <Link to="/">TaskTracker</Link>
                <br />
                <Link to="/nav">Navigation</Link>
                <br />
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th onClick={() => sorter(1)}>Name <Sorter className='dropDown-arrow ' /></th>
                                <th onClick={() => sorter(2)}>Age <Sorter  className='dropDown-arrow '/></th>
                                <th onClick={() => sorter(3)}>Year <Sorter className='dropDown-arrow ' /></th>
                                <th onClick={() => sorter(4)}>Branch <Sorter className='dropDown-arrow ' /></th>
                                <th onClick={() => sorter(5)}>Phone Number <Sorter className='dropDown-arrow ' /></th>
                                <th onClick={() => sorter(6)}>Email Id <Sorter className='dropDown-arrow ' /></th>
                                <th onClick={() => sorter(7)}>Github ID <Sorter className='dropDown-arrow ' /></th>
                                <th onClick={() => sorter(8)}>LinkedIn ID <Sorter className='dropDown-arrow ' /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.map((stuData, i) => (<StudentTd key={i} stuData={stuData} />))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
