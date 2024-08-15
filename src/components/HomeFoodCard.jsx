import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeFoodCard = ({ food }) => {
    return (
        <div className="w-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 bg-gray-800">
            <img className="w-full h-36 object-cover" src={food.foodImage} alt={food.foodName} />
            <div className="p-4 bg-gray-800">
                <h2 className="text-xl font-bold text-white mb-1">{food.foodName}</h2>
                <p className="text-gray-300 mb-1">
                    <span className="font-semibold">Category:</span> {food.foodCategory}
                </p>
                <p className="text-gray-300 mb-2">
                    <span className="font-bold text-orange-500">Price:</span> ${food.price}
                </p>
                <Link to={`/details/${food._id}`}>
                    <button className="flex items-center mt-2 bg-orange-500 text-white font-bold py-1 px-3 rounded transition-colors hover:bg-orange-600 text-sm">
                        <FaInfoCircle className="mr-1" />
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomeFoodCard;
