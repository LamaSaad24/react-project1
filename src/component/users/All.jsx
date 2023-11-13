import axios from 'axios';
import { toast } from 'react-toastify';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Loader from '../../shared/Loader';
import { Link } from 'react-router-dom';

export default function All() {
    const [users, setUsers] = useState([]);
    let [loader,setLoader] = useState(true)

    const getUsers = async () => {
        const { data } = await axios.get("https://crud-users-gold.vercel.app/users");
        setUsers(data.users);
        setLoader(false)

    }

    const deleteUser= async(id)=>{
        setLoader(true)
        const {data} = await axios.delete(`https://crud-users-gold.vercel.app/users/${id}`);
        if(data.message=='success'){
            toast.success("user deleted successful");
            setLoader(false)
            //replace useeffect
            getUsers()
        }

    }

    useEffect(() => {
        getUsers()
    }, [])

    // useEffect(()=>{
    //     getUsers()
    // },[users])

    if(loader) return <Loader/>
    return (
        <div className="table-responsive container mt-3">
            {console.log("test")}
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Status</th>
                        <th scope="col">Confirm Email</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) =>
                        <React.Fragment key={index}>
                            <tr>
                                <td scope="row">{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>{user.confirmEmail}</td>
                                <td><Link to={`/users/edit/${user._id}`} className="btn btn-info">update</Link></td>
                                <td><a onClick={()=>deleteUser(user._id)} className="btn btn-danger">delete</a></td>
                                <td><Link to={`/users/details/${user._id}`}>details</Link></td>
                            </tr>
                        </React.Fragment>
                    )}
                </tbody>
            </table>
        </div>

    )
}
