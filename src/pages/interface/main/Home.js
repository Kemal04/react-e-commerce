import React from 'react'
import { BrandSlider, HomeBanner } from '../../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <>
            <BrandSlider />
            <HomeBanner />

            <div className='container text-center h3 fw-black my-4'>
                POPULAR CATEGORY
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 mb-3'>
                        <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                            <FontAwesomeIcon icon={faMobileAlt} className='h3 me-2'/>
                            Mobile
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home