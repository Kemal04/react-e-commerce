import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../../assets/banners/1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HomeBanner = () => {

    const options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        autoplay: true,
    }

    const banners = [
        {
            id: 1,
            banner_img: banner
        }
    ]

    return (
        <div className='container'>
            <Splide options={options} hasTrack={false}>
                <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev bg-white">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button className="splide__arrow splide__arrow--next bg-white">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                <SplideTrack>
                    {
                        banners.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((banner, index) => (
                            <SplideSlide key={index}>
                                <Link to="/">
                                    <img src={banner.banner_img} alt="banner" className='w-100 position-relative' />
                                </Link>
                            </SplideSlide>
                        ))
                    }
                </SplideTrack>
            </Splide>
        </div >
    )
}

export default HomeBanner