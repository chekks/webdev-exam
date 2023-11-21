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
                        <div className='overlay'>
                            <img src={Item} />
                            <div className='bestSeller'>Best Seller</div>
                            <span className='favorite'>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="heart" d="M14.1772 3.48952C13.9523 2.90833 13.6281 2.38166 13.2227 1.93899C12.8169 1.495 12.3385 1.14217 11.8135 0.899686C11.2691 0.647244 10.6852 0.51803 10.0956 0.519544C9.26859 0.519544 8.46167 0.772348 7.76044 1.24987C7.59268 1.3641 7.43331 1.48956 7.28233 1.62626C7.13134 1.48956 6.97197 1.3641 6.80421 1.24987C6.10298 0.772348 5.29606 0.519544 4.46902 0.519544C3.87347 0.519544 3.29638 0.646883 2.75117 0.899686C2.22441 1.14313 1.74965 1.49331 1.342 1.93899C0.936014 2.38116 0.611705 2.90795 0.387449 3.48952C0.154265 4.09437 0.0351562 4.73668 0.0351562 5.39772C0.0351562 6.0213 0.149232 6.6711 0.375706 7.33213C0.565273 7.88455 0.837042 8.45758 1.1843 9.03622C1.73455 9.95193 2.49114 10.907 3.43059 11.8751C4.98739 13.4799 6.52909 14.5885 6.59452 14.6335L6.9921 14.9181C7.16825 15.0436 7.39473 15.0436 7.57087 14.9181L7.96846 14.6335C8.03389 14.5867 9.57391 13.4799 11.1324 11.8751C12.0718 10.907 12.8284 9.95193 13.3787 9.03622C13.7259 8.45758 13.9994 7.88455 14.1873 7.33213C14.4137 6.6711 14.5278 6.0213 14.5278 5.39772C14.5295 4.73668 14.4104 4.09437 14.1772 3.48952ZM7.28233 13.4369C7.28233 13.4369 1.31012 9.16543 1.31012 5.39772C1.31012 3.48952 2.72433 1.94273 4.46902 1.94273C5.69533 1.94273 6.75892 2.70676 7.28233 3.82284C7.80573 2.70676 8.86932 1.94273 10.0956 1.94273C11.8403 1.94273 13.2545 3.48952 13.2545 5.39772C13.2545 9.16543 7.28233 13.4369 7.28233 13.4369Z" fill="black"/>
                                </svg>

                            </span>
                        </div>
                        <li key={item.id}>
                            <span>3 Colors</span>
                            <h3>Men's UA Tech™ Polo</h3>
                            <span>Tops</span>
                            <div className='item-price'>
                                <span className='orig-price'>$39.99</span>
                                <span className='new-price'>$29.99</span>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        )}
    </div>
  )
}

export default TopTrending