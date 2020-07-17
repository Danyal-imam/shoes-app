import React from 'react'
import {Outlet} from 'react-router-dom'

function Men() {
    return (
        <div>
            <h1>men products</h1>
            <Outlet />
        </div>
    )
}

export default Men
