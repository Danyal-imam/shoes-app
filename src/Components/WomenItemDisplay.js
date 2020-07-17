import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { WomenData } from './ProductsData'

function WomenItemDisplay() {
    const navigate = useNavigate()
    const {womenId} =useParams()
    const womenProducts=WomenData[womenId]
    const {womenProductId, img} =womenProducts
    return (
        <div>
            <h3>{womenProductId}</h3>
            <img src={img} alt={womenProductId} />
            <button onClick={()=>{
                navigate('/women')
            }}>back to products</button>
            <br />
            <button onClick={()=>{
                navigate('/')
            }}>back to home</button>
        </div>
    )
}

export default WomenItemDisplay
