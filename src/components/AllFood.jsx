import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaUtensils, FaTag, FaShoppingCart } from 'react-icons/fa';
import axios from 'axios'

const AllFood = () => {

    const [allFoodData, setAllFoodData] = useState([]);

    useEffect(()=> {

        const getAllFoodData = async () =>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/allFood`) 
            setAllFoodData(data)
        }
        getAllFoodData()
    }, [])

    return (
        <div className="container mx-auto p-6 bg-gray-900 text-white">
            <div className="text-center mb-8">
                <h2 className="md:text-2xl text-2xl  font-bold">All Foods</h2>
                <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
                    Discover a variety of delicious meals, crafted with love and fresh ingredients. Enjoy the flavors from around the world!
                </p>
            </div>

            <div className="grid justify-items-center items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    allFoodData.map(food => (
                        <div key={food._id} className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                            <img className="w-full h-48 object-cover" src={food.foodImage} alt={food.foodName} />
                            <div className="p-4">
                                <h2 className="text-2xl font-bold text-white mb-2">{food.foodName}</h2>
                                <p className="text-gray-400 flex items-center mb-1">
                                    <FaUtensils className="mr-2 text-orange-500" />
                                    <span className="font-semibold">Category:</span> {food.foodCategory}
                                </p>
                                <p className="text-gray-400 flex items-center mb-1">
                                    <FaTag className="mr-2 text-orange-500" />
                                    <span className="font-bold text-orange-500">Price:</span> ${food.price}
                                </p>
                                <p className="text-gray-400 flex items-center mb-2">
                                    <FaShoppingCart className="mr-2 text-orange-500" />
                                    <span className="font-semibold">Quantity:</span> {food.quantity}
                                </p>
                                <Link to={`/details/${food._id}`}>
                                    <button className="mt-4 bg-orange-500 text-white font-bold py-2 px-4 rounded transition-colors hover:bg-orange-600 flex items-center">
                                        <FaUtensils className="mr-2" />
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllFood;
