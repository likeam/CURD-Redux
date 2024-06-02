import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import { updateUser } from './UserReducer'


const Update = () => {

  const {id} = useParams()
  const users = useSelector((state) => state.users)
  const recentUser = users.filter(f => f.id == id)
  const {name, email} = recentUser[0]
  const [uname, setName] = useState(name)
  const [uemail, setEmail] = useState(email)
  const dispath = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault()
    dispath(updateUser({
      id:id,
      name:uname,
      email:uemail,
    }))
    navigate('/')

  } 
  

  return (
    <div className="d-flex w-100 vh-100 justify-content-center items-align-center">
      <div className=" w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={uname}     
              onChange={(e) => setName(e.target.value)}        
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
             value={uemail}
             onChange={(e) => setEmail(e.target.value)}  
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
