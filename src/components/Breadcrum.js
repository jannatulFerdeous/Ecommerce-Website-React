import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

export const Breadcrum = (props) => {
    const {product} = props; 
  return (
    <div className='breadcrum'>
        HOME <MdArrowForwardIos /> SHOP <MdArrowForwardIos/> {product?.name}
    </div>
  )
}
