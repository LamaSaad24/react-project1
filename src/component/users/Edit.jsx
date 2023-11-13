import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/Input'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import UserValidation from '../../validation/UserValidation'
import Loader from '../../shared/Loader'

export default function Create() {
    const { id } = useParams('id');
    const [user, setUser] = useState({})

    const getUser = async () => {
        const { data } = await axios.get(`https://crud-users-gold.vercel.app/users/${id}`);
        setUser(data.user)
    }

    const [errors, setErrors] = useState({ name: '', email: '', password: '' });
    let [loader, setLoader] = useState(false);
    const navigate = useNavigate()

    const handleData = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editData = async (e) => {
        e.preventDefault()
        if (Object.keys(UserValidation(user)).length) {
            setErrors(UserValidation(user));
        } else {
            setLoader(true)
            try {
                const { data } = await axios.put(`https://crud-users-gold.vercel.app/users/${id}`, user);
                if (data.message == "success") {
                    toast.success("user updated successful")
                    navigate('/users/')
                    setLoader(false)
                }

            } catch (error) {
                toast.error(error.response.data.message)
                setLoader(false)

            }
        }
    }

    useEffect(()=>{getUser()},[])

    if (loader) return <Loader />

    return (
        <form onSubmit={editData}>
            {console.log(user)}
            <Input id="name" name="name" type="text" handleData={handleData} errors={errors} value={user} />
            <Input id="email" name="email" type="email" handleData={handleData} errors={errors} value={user} />
            <Input id="password" name="password" type="password" handleData={handleData} errors={errors} value={user} />
            <button className='btn btn-success'>edit user</button>
        </form>
    )
}