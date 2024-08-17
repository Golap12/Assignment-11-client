import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeFoodCard = ({ food }) => {
    return (
        <div className="relative w-full shadow-[0px_0px_5px_4px_#702459] rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img className="w-full h-36 object-cover" src={food.foodImage} alt={food.foodName} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-4 bg-gray-900 relative z-10">
                <h2 className="text-xl font-bold text-white mb-2">{food.foodName}</h2>
                <p className="text-gray-400 mb-2 text-sm">
                    <span className="font-semibold text-sm text-yellow-500">Category:</span> {food.foodCategory}
                </p>
                <p className="text-gray-400 mb-4 text-sm">
                    <span className="font-bold text-blue-400">Price:</span> ${food.price}
                </p>
                <Link to={`/details/${food._id}`}>
                    <button className="flex items-center mt-2 bg-orange-700 text-white font-bold py-2 px-4 rounded transition-colors hover:bg-green-600 text-sm">
                        <FaInfoCircle className="mr-2" />
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomeFoodCard;
