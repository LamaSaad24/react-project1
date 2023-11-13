import React from 'react'

export default function Input(props) {
    const {id,name,type,handleData,errors,value} = props;
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{name}</label>
            <input type={type} className="form-control" name={name} id={id} onChange={()=>handleData(event)} value={value&&value[name]} />
            {errors[name]&&<p className='text-danger'>{errors[name]}</p>}
        </div>
    )
}
