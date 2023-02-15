// @ts-nocheck
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowProducts from './ShowProducts';

const Products = () => {
    const products = useLoaderData()
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 pt-4  container mx-auto px-8 bg-gray-100'>
            {
                products.map(product => <ShowProducts key={product.sl} product={product}></ShowProducts>)
            }
        </div>
    );
};

export default Products;