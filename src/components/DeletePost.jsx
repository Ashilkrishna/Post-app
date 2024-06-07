import React from 'react'
import NavBar from './NavBar'

const DeletePost = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Post id</label>
                        <input type="text" className="form-control" />
                        <button className="btn btn-danger">delete</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default DeletePost
