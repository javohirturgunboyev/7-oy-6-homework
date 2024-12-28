import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Product() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://strapi-store-server.onrender.com/api/products")
            .then(response => {
                if (response.status == 200) {
                    if (response.data?.data) {
                        setProducts(response.data.data)
                    }
                }
            })  
            .catch(error => {
                console.log(error);

            })
    }, []);
const navigate = useNavigate()
    function handleRedirect (product) {
        if (product.id) {
            navigate(`/details/${product.id}`)
        }
    }
    return (
        <div>
  

            <div className='container mx-auto flex flex-wrap gap-5 justify-center'>
                {
                    products.length > 0 && products.map((product, index) => {
                        return (
                            <div className='w-1/3 p-4 border-2 text-center text-2xl cursor-pointer shadow-md rounded-2xl mt-20' onClick={() => {handleRedirect(product)}}  key={index}>
                                <img className='w-full object-cover h-[350px] rounded-md' src={product.attributes.image} alt="" />
                                <h3 className='mt-4 text-[#394E6A]'>{product.attributes.title}</h3>
                                <h3 className='mt-4 text-[#C7C9D1]'>{product.attributes.price}</h3>
                            </div>
                        );
                    })
                }
            </div>
        </div>

    )
}

export default Product
