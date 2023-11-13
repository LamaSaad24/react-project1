import React from 'react'
import Input from '../../shared/Input'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import UserValidation from '../../validation/UserValidation'
import Loader from '../../shared/Loader'

export default function Create() {

    const [user,setUser] = useState({
        name: '',
        email:'',
        password:''
    })

    const [errors , setErrors] = useState({name:'',email:'',password:''});
    let [loader,setLoader] = useState(false);
    const navigate = useNavigate()

    const handleData = (e) =>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const sendData = async(e) =>{
        e.preventDefault()
        if(Object.keys(UserValidation(user)).length){
            setErrors(UserValidation(user));
        }else{
            setLoader(true)
            try {
                const {data} = await axios.post("https://crud-users-gold.vercel.app/users/",user);
                if(data.message=="success"){
                    toast.success("user added successful")
                    navigate('/users/')
                    setLoader(false)
                }
                
            } catch (error) {
                toast.error(error.response.data.message)
                setLoader(false)
                
            }
        }
    }

    if(loader) return <Loader/>

    return (
        <form onSubmit={sendData}>
            <Input id="name" name="name" type="text" handleData={handleData} errors={errors}/>
            <Input id="email" name="email" type="email" handleData={handleData} errors={errors}/>
            <Input id="password" name="password" type="password" handleData={handleData} errors={errors}/>
            <button className='btn btn-success'>add user</button>
        </form>
    )
}
