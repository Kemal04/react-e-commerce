import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import './App.css'

//USER INTERFACE
import { Home } from './pages/interface'

//COMPONENTS
import { Footer, Navbar } from './components'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    {/* USER INTERFACE */}
                    <Route path='' element={<InterfaceLayout />}>
                        <Route path='/' element={<Home />} />
                    </Route>

                </Routes>
            </Router>
        </>
    )
}

const InterfaceLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
}


export default App