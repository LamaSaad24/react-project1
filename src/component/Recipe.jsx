import React from 'react'

export default function Recipe({recipe}) {
    const {title,image_url,publisher,social_rank} = recipe
    return (
        <div className='col-md-3 mb-4'>
            <h3 className='fs-5'>{title.substring(0,25)}...</h3>
            <div className="position-relative my-2" style={{height: '200px'}}>
            <h2 className='fs-5 text-white rounded p-2 bg-dark d-inline-block position-absolute top-0'>{publisher}</h2>
            <img src={image_url} style={{width: '100%', height: '100%',margin:'auto', objectFit: 'cover' }} />
                
            </div>
            <span className='btn btn-info'>rank is : {social_rank.toFixed(2)}%</span>
        </div>
    )
}
