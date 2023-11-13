import React, { useEffect, useState } from 'react'
import Product from './Product';

export default function Products() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json());
            setProducts(data);
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <section className='container mt-3'>
                <div  className="row">
                    {products.map((product)=> <Product key={product.id} product={product} />
                    )}
                </div>
            </section>
        </>
    )
}
