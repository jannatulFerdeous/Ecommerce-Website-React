import React, { useContext } from 'react';
import './Popular.Module.css';
import data_product from './Assets/data';
import { Items } from './Items';
import { ShopContext } from './ShopContext';

export const Popular = () => {
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='popular'>
            <h1>Top Ranking</h1>
            <hr />
            <div className='popular-items'>
                {data_product.map((item, i) => (
                    <div key={i} className='items-container'>
                        <div className='rank'>{(i + 1).toString().padStart(2, '0')}</div>
                        <Items
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                        <button onClick={() => { addToCart(item.id) }}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
