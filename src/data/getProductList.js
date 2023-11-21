import React, { useState, useEffect } from 'react'

export default getProductList = () => {
    const [productLsit, setProductList] = useState([]);
    
    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProductList(data)
            })
    }

    console.log({useEffect})

    useEffect(() => {
        fetchUserData();
    }, [])
}