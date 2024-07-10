import React, { useContext } from 'react'
import all_product from './Assets/all_product'
import { ShopContext } from './ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from './Breadcrum'
import './Product.Module.css'
import { ProductDisplay } from './ProductDisplay'
import { DescriptionBox } from './DescriptionBox'

export const Product = () => {
    
    const {all_product} = useContext(ShopContext)

    const {productId} = useParams(); 
    const product = all_product.find((e)=> e.id == Number(productId));
    console.log(" product",product)
  return (
    <div className='product'>
      
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        {/* <DescriptionBox/> */}
    </div>
  )
}
