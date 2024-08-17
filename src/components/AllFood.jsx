import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { GiWorld } from 'react-icons/gi';
import { FaUserAlt, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { motion } from 'framer-motion'; // Import motion

const AllFoodPage = () => {
    const [foods, setFoods] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [allFoods, setAllFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchFoods = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/allFood`);
                setFoods(data);
                setAllFoods(data);
            } catch (error) {
                console.error("Error fetching foods:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFoods();
    }, []);

    const handleSearch = debounce(async () => {
        try {
            if (searchTerm.trim() === '') {
                setFoods(allFoods);
            } else {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/search-foods?name=${searchTerm}`);
                setFoods(data);
            }
        } catch (error) {
            console.error("Error searching foods:", error);
        }
    }, 300);

    return (
        <div className="container mx-auto py-8">
            <div className='flex flex-col justify-center items-center'>
                <motion.h1
                    className="md:text-3xl text-2xl font-bold mb-6 md:text-center  w-[90%] text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Browse Our Extensive Food Collection
                </motion.h1>
                <motion.p
                    className="md:text-center text-sm text-gray-400 mb-8 w-[90%] md:w-9/12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Explore our curated selection of mouth-watering dishes, each crafted with the freshest ingredients and unique flavors. Whether you're looking for a hearty meal or a light snack, our diverse food collection has something to satisfy every craving. Dive in and discover your new favorite meal today!
                </motion.p>
            </div>

            <div className="flex flex-col items-center mb-6">
                <div className="flex w-[60%] md:w-[50%] items-center bg-gray-700 p-1 rounded-full shadow-lg">
                    <input
                        type="text"
                        placeholder="Search Food"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            handleSearch();
                        }}
                        className="w-full  p-1 bg-gray-800 text-white border border-gray-600 rounded-full focus:outline-none"
                    />
                    <button
                        onClick={() => {
                            setSearchTerm('');
                            setFoods(allFoods);
                        }}
                        className="ml-2 py-1 px-2 bg-gray-600 text-white rounded-full hover:bg-gray-500">
                        Clear
                    </button>
                </div>
            </div>

            {loading && <Loading></Loading>}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:px-20 md:px-10 px-5 gap-6">
                {foods.map((food) => (
                    <motion.div
                        key={food._id}
                        className="shadow-lg border border-gray-600 w-full bg-gray-900 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img className="w-full h-48 object-cover" src={food.foodImage} alt={food.foodName} />
                        <div className="p-6">
                            <div className="flex justify-between items-baseline">
                                <span className="inline-block bg-purple-500 text-white py-1 px-3 text-xs rounded-full uppercase font-semibold tracking-wide">New</span>
                                <div className="ml-2 text-gray-300 text-xs uppercase font-semibold tracking-wide">Category: {food.foodCategory}</div>
                            </div>
                            <h4 className="mt-2 font-semibold text-xl leading-tight text-gray-100 truncate">{food.foodName}</h4>
                            <p className="text-gray-400 text-sm mt-2 truncate">{food.description}</p>
                            <div className="mt-4 items-center flex justify-between">
                                <div>
                                    <span className="text-blue-400 font-bold">${food.price}</span>
                                    <span className="text-gray-400 text-sm"> / meal</span>
                                </div>
                                <p className='text-gray-400 text-sm font-bold'>Available : {food.quantity}</p>
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
                                <button className="flex items-center mt-4 bg-orange-800 text-white font-bold py-2 px-4 rounded transition-colors hover:bg-orange-600 text-sm">
                                    <FaInfoCircle className="mr-2" />
                                    Details
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AllFoodPage;
