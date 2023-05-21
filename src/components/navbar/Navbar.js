import { faHeart, faSearch, faShoppingBag, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'

const Navbar = () => {

    const handleSearch = () => {
        console.log("Search");
    }

    return (
        <>
            <header className="navbar navbar-expand-lg bg-white navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo" className='img-fluid me-3' style={{ width: "40px" }} />
                        Commerce
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex ms-auto position-relative align-items-center">
                            <input className="form-control pe-5 bg-light border-0 py-2 ps-3" type="text" placeholder="Write the product, category or ..." style={{ width: "400px", fontSize: "14px" }} />
                            <FontAwesomeIcon icon={faSearch} onClick={handleSearch} className='position-absolute' style={{ right: "5%", cursor: "pointer" }} />
                        </form>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-2">
                                <NavLink className="nav-link" to="/login">
                                    <FontAwesomeIcon icon={faUserCircle} className='me-1' />
                                    Giriş etmek
                                </NavLink>
                            </li>
                            <li className="nav-item me-2">
                                <NavLink className="nav-link" to="/">
                                    <FontAwesomeIcon icon={faHeart} className='me-1' />
                                    Halanýanlarym
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    <FontAwesomeIcon icon={faShoppingBag} className='me-1' />
                                    Sepetim
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className='container mt-3 w-100'>
                <nav className='navbarcss'>
                    <ul className="nav w-100">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Zenanlar</Link>
                            <div className="nav-dropdown">
                                <div className="nav-dropdown-center">
                                    <div className="nav-dropdown-row">
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                </ul>
                                            </div>
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                    <li><Link to="/">Blouse</Link></li>
                                                    <li><Link to="/">Jacket</Link></li>
                                                    <li><Link to="/">Skirt</Link></li>
                                                    <li><Link to="/">Beach Wear</Link></li>
                                                    <li><Link to="/">Hijab</Link></li>
                                                    <li><Link to="/">Big size</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                    <li><Link to="/">Blouse</Link></li>
                                                    <li><Link to="/">Jacket</Link></li>
                                                    <li><Link to="/">Skirt</Link></li>
                                                    <li><Link to="/">Beach Wear</Link></li>
                                                    <li><Link to="/">Hijab</Link></li>
                                                    <li><Link to="/">Big size</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                    <li><Link to="/">Blouse</Link></li>
                                                    <li><Link to="/">Jacket</Link></li>
                                                    <li><Link to="/">Skirt</Link></li>
                                                    <li><Link to="/">Beach Wear</Link></li>
                                                    <li><Link to="/">Hijab</Link></li>
                                                    <li><Link to="/">Big size</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="nav-dropdown-column">
                                            <div className="nav-dropdown-box">
                                                <Link to="/" className="nav-dropdown-box__link">CLOTHES</Link>
                                                <ul>
                                                    <li><Link to="/">Dress</Link></li>
                                                    <li><Link to="/">T-shirt</Link></li>
                                                    <li><Link to="/">Shirt</Link></li>
                                                    <li><Link to="/">Jeans</Link></li>
                                                    <li><Link to="/">Denim Jacket</Link></li>
                                                    <li><Link to="/">Trousers</Link></li>
                                                    <li><Link to="/">Shorts</Link></li>
                                                    <li><Link to="/">Blouse</Link></li>
                                                    <li><Link to="/">Jacket</Link></li>
                                                    <li><Link to="/">Skirt</Link></li>
                                                    <li><Link to="/">Beach Wear</Link></li>
                                                    <li><Link to="/">Hijab</Link></li>
                                                    <li><Link to="/">Big size</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="campaign-container">
                                            <div className="campaign-column">
                                                <Link to="/">
                                                    {/* <img src="img/bg/banner_2.png" alt="" className="img-fluid"> */}
                                                </Link>
                                                <Link to="/">
                                                    {/* <img src="img/bg/banner_2.png" alt="" className="img-fluid"> */}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Erkekler</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Ejeler we Çagalar</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Hojalyk tehnikasy</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Süpermarket</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Kosmetika</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Ayakgap & Sumka</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Sagat & Aksesuar</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Elektronika</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark">Sport</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <hr className='p-0 m-0'/>
        </>
    )
}

export default Navbar