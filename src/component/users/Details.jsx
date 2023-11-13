import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const {id} = useParams('id');
    const [user, setUser] = useState({})

    const getUser=async()=>{
        const {data} = await axios.get(`https://crud-users-gold.vercel.app/users/${id}`);
        setUser(data.user)
    }

    useEffect(()=>{
        getUser()
    },[])
    return (
        <div>name is {user.name}</div>
    )
}
