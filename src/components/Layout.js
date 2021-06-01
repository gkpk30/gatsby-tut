import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

function Layout({children}) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright &copy; 2021 Web Warrio</p>
            </footer>
            
        </div>
    )
}

export default Layout
