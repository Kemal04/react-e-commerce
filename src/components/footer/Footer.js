import { faAppleAlt, faEnvelope, faPhoneAlt, faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {

    const dataYear = new Date().getFullYear()

    return (
        <>
            <div className='bg-dark pt-5 pb-3 text-white'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-3'>
                            <div className='h5 mb-2'>COMPANY INFO</div>
                            <div className='mb-2'>About</div>
                            <div className='d-flex align-items-center mb-2'>
                                <FontAwesomeIcon icon={faPhoneAlt} className='me-2' />
                                +993650000000
                            </div>
                            <div className='d-flex align-items-center mb-2'>
                                <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                                trendyol@mail.com
                            </div>
                        </div>
                        <div className='col-xl-3'>
                            <div className='h5 mb-2'>HELP & SUPPORT</div>
                            <div className='mb-2'>Shipping Info</div>
                            <div className='mb-2'>Returns</div>
                            <div className='mb-2'>How To Order</div>
                            <div className='mb-2'>How To Track</div>
                            <div className='mb-2'>Size Guide</div>
                        </div>
                        <div className='col-xl-3'>
                            <div className='h5 mb-2'>APP</div>
                            <div className='d-flex align-items-center mb-2'>
                                <FontAwesomeIcon icon={faAppleAlt} className='me-2' />
                                iOS
                            </div>
                            <div className='d-flex align-items-center mb-2'>
                                <FontAwesomeIcon icon={faRobot} className='me-2' />
                                Android
                            </div>
                        </div>
                        <div className='col-xl-3'>
                            <div className='h5 mb-2'>FIND US ON </div>
                            <div className='mb-2'>Instagram</div>
                            <div className='mb-2'>TikTok</div>
                            <div className='mb-2'>YouTube</div>
                        </div>
                        <div className='col-xl-12 text-center mt-5'>
                            © {dataYear} All Rights Reserved by MK studio
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer