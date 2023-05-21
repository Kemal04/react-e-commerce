import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Register = () => {
    return (
        <>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='row justify-content-center bg-white py-5'>
                        <div className='col-xl-4'>
                            <div className='h5 text-center mb-3'> Create your Trend account </div>
                            <div className='mb-4'>
                                <input type="text" className="form-control py-3 rounded-0 fw-black" placeholder="*First name" />
                            </div>
                            <div className='mb-4'>
                                <input type="text" className="form-control py-3 rounded-0 fw-black" placeholder="Last name" />
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text bg-white rounded-0 py-3 px-4 fw-black">+993</span>
                                <input type="text" className="form-control rounded-0 py-3 px-4 fw-black" placeholder="*Phone number or gmail" />
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text bg-white rounded-0 py-3 px-4 fw-black border-end-0"><FontAwesomeIcon icon={faLock} /></span>
                                <input type="text" className="form-control rounded-0 py-3 px-4 border-start-0 fw-black" placeholder="Create a password" />
                            </div>
                            <div className="input-group mb-4">
                                <span className="input-group-text bg-white rounded-0 py-3 px-4 fw-black border-end-0"><FontAwesomeIcon icon={faLock} /></span>
                                <input type="text" className="form-control rounded-0 py-3 px-4 border-start-0 fw-black" placeholder="Create a password" />
                            </div>
                            <div className="mb-4 form-check">
                                <input type="checkbox" className="form-check-input p-2" id="exampleCheck1" />
                                <label className="form-check-label small" for="exampleCheck1">I have read and accept the Terms of Service and Privacy Policy</label>
                            </div>
                            <div className='my-4 d-grid'>
                                <button className='btn btn-dark py-2 rounded-0 fw-black'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register