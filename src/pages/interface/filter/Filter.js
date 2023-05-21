import React from 'react'
import { Link } from 'react-router-dom'
import img_1 from '../../../assets/products/1.png'
import img_2 from '../../../assets/products/2.png'
import img_3 from '../../../assets/products/3.png'
import img_4 from '../../../assets/products/4.png'
import img_5 from '../../../assets/products/5.png'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Filter = () => {

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
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-xl-2'>
                        <div className='mb-4 d-flex flex-column'>
                            <div className='fw-black mb-1'>Related Categories</div>
                            <div className='d-flex flex-column'>
                                <Link to='/' className='text-dark text-decoration-none'>Dresses</Link>
                                <Link to='/' className='text-dark text-decoration-none'>Dresses</Link>
                                <Link to='/' className='text-dark text-decoration-none'>Dresses</Link>
                            </div>
                        </div>
                        <div className='mb-4 d-flex flex-column'>
                            <div className='fw-black mb-1'>Opportunity Products</div>
                            <div className='d-flex flex-column'>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck1" />
                                    <label className="form-check-label small" for="exampleCheck1">Opportunity Products</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck2" />
                                    <label className="form-check-label small" for="exampleCheck2">Crazy Deal Product</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Great Deal Product</label>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 d-flex flex-column' style={{ width: "185px" }}>
                            <div className='fw-black mb-1'>Brand</div>
                            <input type="search" className='form-control rounded-0 py-0 mb-1' placeholder="Search" style={{ height: "25px", fontSize: "12px" }} />
                            <div className='d-flex flex-column position-relative' style={{ maxHeight: "100px", overflowX: "hidden", overflowY: "auto" }}>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck1" />
                                    <label className="form-check-label small" for="exampleCheck1">Lacoste</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck2" />
                                    <label className="form-check-label small" for="exampleCheck2">Koton</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Zara</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Nike</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Adidas</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Bosch</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Great Deal Product</label>
                                </div>
                            </div>
                        </div>
                        <div className='mb-4 d-flex flex-column' style={{ width: "185px" }}>
                            <div className='fw-black mb-1'>Size</div>
                            <input type="search" className='form-control rounded-0 py-0 mb-1' placeholder="Search" style={{ height: "25px", fontSize: "12px" }} />
                            <div className='d-flex flex-column position-relative' style={{ maxHeight: "100px", overflowX: "hidden", overflowY: "auto" }}>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck1" />
                                    <label className="form-check-label small" for="exampleCheck1">Lacoste</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck2" />
                                    <label className="form-check-label small" for="exampleCheck2">Koton</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Zara</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Nike</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Adidas</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Bosch</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input p-2 rounded-0" id="exampleCheck3" />
                                    <label className="form-check-label small" for="exampleCheck3">Great Deal Product</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-10'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='h5'>"TRENDYOLMİLLA- Yeni Sezon Fırsatları" araması için 18 sonuç listeleniyor</div>
                            <select className="form-select py-0 rounded-0" style={{ width: "150px" }}>
                                <option selected>Filter</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='row mt-4'>
                            {
                                products.map((product, index) => (
                                    <div className='col-xl-3 mb-4' key={index}>
                                        <Link to="/" className='card rounded-0 mx-2 text-decoration-none text-dark'>
                                            <div className='d-flex align-items-stretch'>
                                                <img src={product.product_img} alt={product.title} className='img-fluid' />
                                            </div>
                                            <div className='card-body py-1 px-2'>
                                                <div className='card-title fw-black' style={{ lineHeight: "20px" }}>{product.title} <span className='fw-normal small'>Mavi Düşük Bel Wide Leg Jeans TWOAW23JE00566</span></div>
                                                <div className='d-flex align-items-center small'>
                                                    <FontAwesomeIcon icon={faStar} className='text-warning' />
                                                    <FontAwesomeIcon icon={faStar} className='text-warning' />
                                                    <FontAwesomeIcon icon={faStar} className='text-warning' />
                                                    <FontAwesomeIcon icon={faStar} className='text-warning' />
                                                    <FontAwesomeIcon icon={faStarHalfAlt} className='text-warning' />
                                                    <div className='fs-10 ms-1'>(31)</div>
                                                </div>
                                                <div className='d-flex align-items-center my-3'>
                                                    <div className='fw-black me-4'>{product.price}<small> TMT</small></div>
                                                    {product.dis_price && <div className='text-secondary small text-decoration-line-through'>{product.dis_price}<small>TMT</small></div>}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter