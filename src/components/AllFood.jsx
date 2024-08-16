import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaInfoCircle } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllFood = () => {

    const [allFoodData, setAllFoodData] = useState([]);

    useEffect(() => {
        const getAllFoodData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allFood`);
            setAllFoodData(data);
        };
        getAllFoodData();
    }, []);

    return (
        <div className="container mx-auto p-6 bg-gray-900 text-white">
            <div className="text-center mb-8">
                <h2 className="md:text-2xl text-2xl font-bold">All Foods</h2>
                <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
                    Discover a variety of delicious meals, crafted with love and fresh ingredients. Enjoy the flavors from around the world!
                </p>
            </div>

            <div className="grid justify-items-center items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allFoodData.map(food => (

                    <div key={food._id} className="shadow-lg border border-gray-600 w-full bg-gray-900 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <img className="w-full h-48 object-cover" src={food.foodImage} alt={food.foodName} />
                        <div className="p-6">
                            <div className="flex justify-between items-baseline">
                                <span className="inline-block bg-purple-500 text-white py-1 px-3 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                                <div className="ml-2 text-gray-300 text-xs uppercase font-semibold tracking-wide">Category: {food.foodCategory}</div>
                            </div>
                            <h4 className="mt-2 font-semibold text-xl leading-tight text-gray-100 truncate">{food.foodName}</h4>
                            <p className="text-gray-400 text-sm mt-2 truncate">{food.description}</p>
                            <div className="mt-4 items-center">
                                <span className="text-green-400 font-bold">${food.price}</span>
                                <span className="text-gray-400 text-sm">/ meal</span>
                            </div>
                            <div className="mt-2 flex justify-between items-center">
                                <span className="text-cyan-300 mr-2 text-sm flex items-center">
                                    <GiWorld className="mr-1" /> {food.foodOrigin}
                                </span>
                                <span className="text-amber-300 text-xs ml-auto flex items-center">
                                    <FaUserAlt className="mr-1" />{food.madeBy.toUpperCase().split('').slice(0, 10).join('')}
                                </span>
                            </div>
                            <Link to={`/details/${food._id}`}>
                                <button className="flex items-center mt-4 bg-green-800 text-white font-bold py-2 px-4 rounded transition-colors hover:bg-green-600 text-sm">
                                    <FaInfoCircle className="mr-2" />
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFood;
