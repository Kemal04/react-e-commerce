import React from 'react'
import { BrandSlider, HomeBanner } from '../../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faChildDress, faComputer, faFireFlameCurved, faGift, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'

import img_1 from '../../../assets/products/1.png'
import img_2 from '../../../assets/products/2.png'
import img_3 from '../../../assets/products/3.png'
import img_4 from '../../../assets/products/4.png'
import img_5 from '../../../assets/products/5.png'

import banner_1 from '../../../assets/banners/2.png'

import discount_1 from '../../../assets/discounts/1.jpg'
import discount_2 from '../../../assets/discounts/2.jpg'
import discount_3 from '../../../assets/discounts/3.jpg'
import discount_4 from '../../../assets/discounts/4.jpg'
import discount_5 from '../../../assets/discounts/5.jpg'
import discount_6 from '../../../assets/discounts/6.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {

    const recommendedOption = {
        type: 'loop',
        perPage: 5,
        perMove: 1,
        pagination: false,
        arrows: true,
        breakpoints:
        {
            991: { perPage: 5, gap: '1.5rem', },
            768: { perPage: 3, gap: '1.5rem', },
            575: { perPage: 2, gap: '1rem', },
        }
    }

    const products = [
        {
            id: 1,
            product_img: img_1,
            title: "Jacke mit Woman cee",
            price: 350,
            dis_price: 450,
            percent: 25,
        },
        {
            id: 2,
            product_img: img_2,
            title: "Jacke mit Woman cee",
            price: 1050,
        },
        {
            id: 3,
            product_img: img_3,
            title: "Jacke mit Woman cee",
            price: 350,
            dis_price: 450,
            percent: 25,
        },
        {
            id: 4,
            product_img: img_4,
            title: "Jacke mit Woman cee",
            price: 350,
        },
        {
            id: 5,
            product_img: img_5,
            title: "Jacke mit Woman cee",
            price: 350,
            dis_price: 450,
            percent: 25,
        }
    ]

    return (
        <>
            <BrandSlider />
            <HomeBanner />

            <div className='container text-center h3 fw-black my-4'>
                <Link to="/" className='text-decoration-none text-dark'>
                    POPULAR CATEGORY
                </Link>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 mb-3'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faMobileAlt} className='h3 me-2' />
                                <div className='h5'>Mobile</div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-xl-3 mb-3'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faGift} className='h3 me-2' />
                                <div className='h5'>Mobile</div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-xl-3 mb-3'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faChildDress} className='h3 me-2' />
                                <div className='h5'>Mobile</div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-xl-3 mb-3'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faComputer} className='h3 me-2' />
                                <div className='h5'>Mobile</div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-xl-3 mb-3'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faMobileAlt} className='h3 me-2' />
                                <div className='h5'>Mobile</div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-xl-3 mb-3'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faGift} className='h3 me-2' />
                                <div className='h5'>Mobile</div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-xl-3 mb-3'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faChildDress} className='h3 me-2' />
                                <div className='h5'>Mobile</div>
                            </div>
                        </Link>
                    </div>
                    <div className='col-xl-3 mb-3'>
                        <Link to="/" className='text-decoration-none text-dark'>
                            <div className='bg-light border py-4 d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faComputer} className='h3 me-2' />
                                <div className='h5'>Mobile</div>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className='container h3 fw-black my-4'>
                    <Link to="/" className='text-decoration-none text-dark'>
                        RECOMMENDED FOR YOU
                    </Link>
                </div>

                <Splide options={recommendedOption} hasTrack={false}>
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
                            products.map((product, index) => (
                                <SplideSlide key={index}>
                                    <Link to="/" className='card border-0 rounded-0 mx-2 text-decoration-none text-dark'>
                                        <div className='d-flex align-items-stretch'>
                                            <img src={product.product_img} alt={product.title} className='img-fluid' />
                                        </div>
                                        <div className='card-body'>
                                            <div className='card-title h5 fw-black'>{product.title}</div>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='fw-black fs-18'>{product.price}<small>TMT</small></div>
                                                {product.dis_price && <div className='text-secondary small text-decoration-line-through'>{product.dis_price}<small>TMT</small></div>}
                                                {
                                                    product.percent &&
                                                    <div className='bg-dark py-1 px-2 text-white d-flex align-items-center'>
                                                        <FontAwesomeIcon icon={faFireFlameCurved} />
                                                        <div className='fs-13 ms-1 fw-black'>-{product.percent}%</div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                </SplideSlide>
                            ))
                        }
                    </SplideTrack>
                </Splide>

                <div className='mt-4'>
                    <Link to="/">
                        <img src={banner_1} alt="" className='img-fluid' />
                    </Link>
                </div>

                <div className='row my-4 gx-3'>
                    <div className='col-xl-4 mb-3'>
                        <Link to="/">
                            <img src={discount_1} alt="" className='img-fluid' />
                        </Link>
                    </div>
                    <div className='col-xl-4 mb-3'>
                        <Link to="/">
                            <img src={discount_2} alt="" className='img-fluid' />
                        </Link>
                    </div>
                    <div className='col-xl-4 mb-3'>
                        <Link to="/">
                            <img src={discount_3} alt="" className='img-fluid' />
                        </Link>
                    </div>
                    <div className='col-xl-4 mb-3'>
                        <Link to="/">
                            <img src={discount_4} alt="" className='img-fluid' />
                        </Link>
                    </div>
                    <div className='col-xl-4 mb-3'>
                        <Link to="/">
                            <img src={discount_5} alt="" className='img-fluid' />
                        </Link>
                    </div>
                    <div className='col-xl-4 mb-3'>
                        <Link to="/">
                            <img src={discount_6} alt="" className='img-fluid' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home