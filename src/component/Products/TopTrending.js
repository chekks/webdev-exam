import React, {useState, useEffect} from 'react'

import Item from '../../assets/item.jpeg'

import './product.css';

const TopTrending = () => {
    const [productList, setProductList] = useState([]);
    const { products } = productList;
    const fetchUserData = () => {
        fetch("https://dummyjson.com/products?limit=5")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProductList(data)
            })
    }

    useEffect(() => {
        fetchUserData();
    }, [])
  return (
    <div className='products-trend'>
        <h2>Top Trending</h2>

        {products && (
            <ul>
                {products.map(item => (
                    <div className='item'>
                        <img src={Item} /> 
                        <li key={item.id}>{item.category}</li>

                        <div>
                            <span>3 Colors</span>
                            <h3>Name</h3>
                            <span>Top</span>
                            <span>Price</span>
                        </div>
                    </div>
                ))}
            </ul>
        )}
    </div>
  )
}

export default TopTrending