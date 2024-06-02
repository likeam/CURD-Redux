import React from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {

    const users = useSelector((state) => state.users)
    console.log(users)

    return (
        <div className="container">
            <h2>Crud App with JSON Server   </h2>
            <Link to="/create"><Button className="btn btn-sucess my-3">Create +</Button></Link>
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
                                    <Link to={`/update/${user.id}`}><Button className="btn btn-sucess mx-1">Edit</Button></Link>
                                    <Link to={`/update/${user.id}`}><Button className="btn btn-danger mx-1">Delete</Button></Link>                                   
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