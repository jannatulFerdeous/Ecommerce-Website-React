import React, { useContext } from 'react'
import './NewCollection.Module.css'
import new_collections from './Assets/new_collections'
import { Items } from './Items'
import { ShopContext } from './ShopContext'

export const NewCollection = () => {
  const { addToCart } = useContext(ShopContext); // Get addToCart function from context

  return (
    <div className='new-collections'>
        <h1>All Products</h1>
        <hr/>
        <div className='new-collections-items'>
            {new_collections.map((item, i) => (
                <div key={i} className='item-container'>
                    <Items  
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                    <button onClick={() => addToCart(item.id)}>ADD TO CART</button> {/* Add to Cart Button */}
                </div>
            ))}
        </div>
    </div>
  )
}
