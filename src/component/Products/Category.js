import React, {useState, useEffect} from 'react'

import Item from '../../assets/item.jpeg'

import './product.css';

const Category = () => {
    const [productList, setProductList] = useState([]);
    const { products } = productList;
    const fetchUserData = () => {
        fetch("https://dummyjson.com/products?limit=10")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProductList(data)
            })
    }

    console.log(productList.products)

    useEffect(() => {
        fetchUserData();
    }, [])
  return (
    <div className='product-category'>
        <h2>Shop by category</h2>
        {products && (
            <ul>
                {products.map(item => (
                    <div className='item'>
                        <img src={item.thumbnail} /> 
                        <li key={item.id}>{item.category}</li>
                    </div>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Category