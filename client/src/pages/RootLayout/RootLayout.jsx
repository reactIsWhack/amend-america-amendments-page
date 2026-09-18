import React from 'react'
import { Link, Outlet } from 'react-router'

function RootLayout() {
    return (
        <>
            <Link to='/' className='home-link'>Home</Link>

            <Outlet />
        </>
    )
}

export default RootLayout