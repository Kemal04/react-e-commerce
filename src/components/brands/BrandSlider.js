import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react'
import '@splidejs/react-splide/css';

import adidas from '../../assets/brands/adidas.webp'
import puma from '../../assets/brands/puma.webp'
import apple from '../../assets/brands/apple.webp'
import karaca from '../../assets/brands/karaca.webp'
import koton from '../../assets/brands/koton.webp'
import mi from '../../assets/brands/mi.webp'
import pierro_cardin from '../../assets/brands/pierro-cardin.webp'
import samsung from '../../assets/brands/samsung.webp'
import vestel from '../../assets/brands/vestel.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRight, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const BrandSlider = () => {

    const brandOption = {
        type: 'loop',
        perPage: 10,
        perMove: 1,
        pagination: false,
        arrows: true,
        breakpoints:
        {
            991: { perPage: 10, gap: '1.5rem', },
            768: { perPage: 6, gap: '1.5rem', },
            575: { perPage: 3, gap: '1rem', },
        }
    };

    const brands = [
        {
            id: 1,
            brand_img: adidas,
            title: "Adidas",
        },
        {
            id: 1,
            brand_img: puma,
            title: "puma",
        },
        {
            id: 1,
            brand_img: apple,
            title: "apple",
        },
        {
            id: 1,
            brand_img: karaca,
            title: "karaca",
        },
        {
            id: 1,
            brand_img: koton,
            title: "koton",
        },
        {
            id: 1,
            brand_img: mi,
            title: "mi",
        },
        {
            id: 1,
            brand_img: pierro_cardin,
            title: "pierro cardin",
        },
        {
            id: 1,
            brand_img: samsung,
            title: "samsung",
        },
        {
            id: 1,
            brand_img: vestel,
            title: "vestel",
        },
    ]

    return (
        <div className='container my-5'>
            <Splide options={brandOption} hasTrack={false}>
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
                        brands.map((brand, index) => (
                            <SplideSlide key={index}>
                                <div className='text-center'>
                                    <img src={brand.brand_img} alt="" className='img-fluid rounded-circle border' style={{ width: "68px" }} />
                                    <div className='text-capitalize'>{brand.title}</div>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </SplideTrack>
            </Splide>
        </div>
    )
}

export default BrandSlider