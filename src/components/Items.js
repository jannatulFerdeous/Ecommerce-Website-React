import React from 'react';
import './Items.Module.css';
import { Link } from 'react-router-dom';

export const Items = ({ id, name, image, new_price, old_price }) => {
    return (
        <div className='items'>
           <Link to={`/product/${id}`}><img src={image} alt={name} /></Link> 
            <h5>{name}</h5>
            <p className='items-prices'>
                <span className='items-price-new'>Tk.{new_price}</span>
                {old_price && <span className='items-price-old'>Tk.{old_price}</span>}
            </p>
        </div>
    );
};
