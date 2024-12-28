import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../redux/cartSlice';

function Details() {
    const [product, setProduct] = useState({});
    const [selectedColor, setSelectedColor] = useState('');
    const [count, setCount] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            axios.get(`https://strapi-store-server.onrender.com/api/products/${id}`)
                .then(response => {
                    if (response.status === 200) {
                        setProduct(response.data.data);
                        if (response.data?.data?.attributes?.colors?.length) {
                            setSelectedColor(response.data.data.attributes.colors[0]);
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    function handleAddCart() {
        if (!selectedColor) {
            alert("Please select a color!");
            return;
        }

        const data = {
            id: product.id,
            count: count,
            color: selectedColor,
            product: {
                id: product.id,
                title: product.attributes.title,
                price: product.attributes.price,
                image: product.attributes.image,
                color: selectedColor,
            },
        };

        dispatch(add(data));
        alert("Product added to bag!");
    }

    return (
        <div>
            {product.id && (
                <div className='container mx-auto flex gap-5 mt-10 items-center'>
                    <img
                        src={product.attributes.image}
                        alt={product.attributes.title}
                        className='w-1/2 h-[500px] rounded-md object-cover'
                    />
                    <div className='w-1/2'>
                        <h3 className='text-2xl font-bold'>{product.attributes.title}</h3>
                        <h4 className='text-lg text-gray-600'>{product.attributes.company}</h4>
                        <p className='text-xl text-green-500'>${product.attributes.price}</p>
                        <p className='mt-4 text-gray-700'>{product.attributes.description}</p>

                        <div className='flex gap-2 mt-4'>
                            {product.attributes?.colors?.map((color, index) => (
                                <span
                                    key={index}
                                    className={`w-8 h-8 rounded-full cursor-pointer`}
                                    style={{
                                        backgroundColor: color,
                                        border: selectedColor === color ? '2px solid black' : 'none',
                                    }}
                                    onClick={() => setSelectedColor(color)}
                                ></span>
                            ))}
                        </div>

                        <div className='flex flex-col gap-4 mt-10'>
                            <select
                                className='border p-3 rounded-md'
                                value={count}
                                onChange={(e) => setCount(Number(e.target.value))}
                            >
                                {[...Array(10).keys()].map((num) => (
                                    <option key={num + 1} value={num + 1}>
                                        {num + 1}
                                    </option>
                                ))}
                            </select>
                            <button
                                onClick={handleAddCart}
                                className='bg-blue-500 py-3 px-5 text-white rounded-md hover:bg-blue-600'
                            >
                                ADD TO BAG
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Details;

