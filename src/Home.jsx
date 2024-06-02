import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import {Link } from 'react-router-dom'
const Home = () => {

    const users = useSelector((state) => state.users)
    console.log(users)

    return (
        <div className="container">
            <h2>Crud App with JSON Server   </h2>
            <Button className="btn btn-sucess my-3">Create +</Button>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button className="btn btn-sucess mx-1">Edit</Button>
                                    <Button className="btn btn-failed mx-1">Delete</Button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home