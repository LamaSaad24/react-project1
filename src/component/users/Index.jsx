import React from 'react'
import All from './All'
import Create from './Create'

export default function Index() {
    return (
        <div className="container-fluid">
            <div className="row">
                <nav className='col-3 bg-dark vh-100'>
                    <div className="nav nav-tabs flex-column border-0" id="nav-tab" role="tablist">
                        <a className="nav-lin text-white text-decoration-none my-3 active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                        <a className="nav-lin text-white text-decoration-none my-3" id="nav-create-tab" data-bs-toggle="tab" data-bs-target="#nav-create" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Create</a>
                    </div>
                </nav>
                <div className="tab-content col-9" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex={0}>
                        <All />
                    </div>
                    <div className="tab-pane fade" id="nav-create" role="tabpanel" aria-labelledby="nav-create-tab" tabIndex={0}>
                        <Create />
                    </div>
                </div>

            </div>
        </div >

    )
}
