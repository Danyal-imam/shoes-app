import React from 'react'
import {MenData} from './ProductsData'
import {useParams, useNavigate} from 'react-router-dom'
function MenItemDisplay() {
    const navigate=useNavigate()
    let {menId} = useParams()
    let singleMenproduct=MenData[menId]
    let {productId,img}=singleMenproduct
    return (
        <div>
            <h4>{productId}</h4>
            <img src={img} alt={productId} />
            <button onClick={()=>{
                navigate('/men')
            }}>back to products</button>
            <br />
            <button onClick={()=>{
                navigate('/')
            }}>back to home</button>
        </div>
    )
}

export default MenItemDisplay
