import React, { useState, useEffect } from 'react'
import StudentTd from './StudentTd'
import { Link } from 'react-router-dom'
export default function Table() {

    const [student, setStudent] = useState([{
        id: 0,
        name: 'Raja Harsh Vardhan Singh',
        age: 20,
        year: 2,
        branch: 'CSE',
        phoneNo: 7755003846,
        email: 'rhvsingh004@gmail.com',
        github: 'rhvsingh',
        linkedIn: 'rhvsingh'
    }, {
        id: 1,
        name: 'Shivam Singh',
        age: 19,
        year: 3,
        branch: 'CSE',
        phoneNo: 8883333111,
        email: 'shivamsingh@gmail.com',
        github: 'shivsingh',
        linkedIn: 'shivsingh'
    }, {
        id: 2,
        name: 'Saurabh Mishra',
        age: 21,
        year: 3,
        branch: 'B.Sc',
        phoneNo: 9100003145,
        email: 'saurabh@gmail.com',
        github: 'sau',
        linkedIn: 'sau'
    }, {
        id: 3,
        name: 'Krishna Yadav',
        age: 22,
        year: 3,
        branch: 'Civil',
        phoneNo: 9838226066,
        email: 'krishna@gmail.com',
        github: 'krishna',
        linkedIn: 'krishna'
    }, {
        id: 4,
        name: 'Sanskar Srivastava',
        age: 22,
        year: 4,
        branch: 'CSE',
        phoneNo: 5555003846,
        email: 'sansri@gmail.com',
        github: 'sanskar',
        linkedIn: 'sanskar'
    }])

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

    const sorter = (id) => {
        switch (id) {
            case 1:
                console.log('Sort by name')
                if (counter === 0 || idChecker !== id) {
                    setStudent(student.slice().sort((a, b) => a.name > b.name ? 1 : -1))
                    setCounter(1)
                    setIdChecker(id)
                } else if (idChecker === id) {
                    setStudent(student.slice().sort((a, b) => a.name > b.name ? -1 : 1))
                    setCounter(0)
                }
                break;
            case 2:
                console.log('Sort by age')
                if (counter === 0 || idChecker !== id) {
                    setStudent(student.slice().sort((a, b) => a.age > b.age ? 1 : -1))
                    setCounter(1)
                    setIdChecker(id)
                } else if (idChecker === id) {
                    setStudent(student.slice().sort((a, b) => a.age > b.age ? -1 : 1))
                    setCounter(0)
                }
                break;
            case 3:
                console.log('Sort by year')
                if (counter === 0 || idChecker !== id) {
                    setStudent(student.slice().sort((a, b) => a.year > b.year ? 1 : -1))
                    setCounter(1)
                    setIdChecker(id)
                } else if (idChecker === id) {
                    setStudent(student.slice().sort((a, b) => a.year > b.year ? -1 : 1))
                    setCounter(0)
                }
                break;
            case 4:
                console.log('Sort by branch')
                if (counter === 0 || idChecker !== id) {
                    setStudent(student.slice().sort((a, b) => a.branch > b.branch ? 1 : -1))
                    setCounter(1)
                    setIdChecker(id)
                } else if (idChecker === id) {
                    setStudent(student.slice().sort((a, b) => a.branch > b.branch ? -1 : 1))
                    setCounter(0)
                }
                break;
            case 5:
                console.log('Sort by phone number')
                if (counter === 0 || idChecker !== id) {
                    setStudent(student.slice().sort((a, b) => a.phone > b.phone ? 1 : -1))
                    setCounter(1)
                    setIdChecker(id)
                } else if (idChecker === id) {
                    setStudent(student.slice().sort((a, b) => a.phone > b.phone ? -1 : 1))
                    setCounter(0)
                }
                break;
            case 6:
                console.log('Sort by email')
                if (counter === 0 || idChecker !== id) {
                    setStudent(student.slice().sort((a, b) => a.email > b.email ? 1 : -1))
                    setCounter(1)
                    setIdChecker(id)
                } else if (idChecker === id) {
                    setStudent(student.slice().sort((a, b) => a.email > b.email ? -1 : 1))
                    setCounter(0)
                }
                break;
            case 7:
                console.log('Sort by github')
                if (counter === 0 || idChecker !== id) {
                    setStudent(student.slice().sort((a, b) => a.github > b.github ? 1 : -1))
                    setCounter(1)
                    setIdChecker(id)
                } else if (idChecker === id) {
                    setStudent(student.slice().sort((a, b) => a.github > b.github ? -1 : 1))
                    setCounter(0)
                }
                break;
            case 8:
                console.log('Sort by linkedIn')
                if (counter === 0 || idChecker !== id) {
                    setStudent(student.slice().sort((a, b) => a.linkedIn > b.linkedIn ? 1 : -1))
                    setCounter(1)
                    setIdChecker(id)
                } else if (idChecker === id) {
                    setStudent(student.slice().sort((a, b) => a.linkedIn > b.linkedIn ? -1 : 1))
                    setCounter(0)
                }
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
                                <th onClick={() => sorter(1)}>Name</th>
                                <th onClick={() => sorter(2)}>Age</th>
                                <th onClick={() => sorter(3)}>Year</th>
                                <th onClick={() => sorter(4)}>Branch</th>
                                <th onClick={() => sorter(5)}>Phone Number</th>
                                <th onClick={() => sorter(6)}>Email Id</th>
                                <th onClick={() => sorter(7)}>Github ID</th>
                                <th onClick={() => sorter(8)}>LinkedIn ID</th>
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
