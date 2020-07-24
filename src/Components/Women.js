import React from 'react'
import { Outlet } from 'react-router'


function Women() {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Ladies Sneakers</h1>
            <Outlet />
        </div>
    )
}

export default Women
