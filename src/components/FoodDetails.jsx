import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const FoodDetails = () => {
    const { user } = useContext(AuthContext)
    const food = useLoaderData();
    const navigate = useNavigate()

    const {
        foodImage,
        foodName,
        foodCategory,
        price,
        quantity,
        madeBy,
        foodOrigin,
        description,
        purchase_count
    } = food


    const handlePurchase = async (food) => {

        const purchaseFood = {
            foodName,
            foodImage,
            foodCategory,
            quantity,
            madeBy,
            price,
            purchaseBy: user?.email,
            foodOrigin,
            description,
            purchase_count,
            purchaseDate: Date.now(),

        };

        if (quantity <= 0) {
            toast.error("Quantity is insufficient for purchase");
            return;
        }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/purchase-foods`, purchaseFood)
            toast.success("Purchase Success")
            navigate('/myOrderFood')

        }
        catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-5">


                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={foodImage} alt="Product Image" />
                        </div>
                    </div>

                    <div className='border'></div>

                    <div className="md:flex-1 px-4 flex flex-col justify-center">
                        <div className='flex justify-between'>
                            <h2 className="text-2xl md:text-4xl mb-5 font-bold text-gray-800 dark:text-white">{foodName}</h2>
                            <p className="font-bold text-gray-700 dark:text-gray-300">Quantity: {quantity}</p>
                        </div>
                        <div className="flex mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Category : </span>
                            <span className="text-gray-600 dark:text-gray-300">{foodCategory}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {description}
                        </p>
                        <div className=" mb-4 space-y-4">
                            <div className="mr-4 ">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                <span className="text-gray-600 dark:text-gray-300">${price}</span>
                            </div>
                            <div className="mr-4">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Made By: </span>
                                <span className="text-gray-600 dark:text-gray-300">{madeBy}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Food Origin: </span>
                                <span className="text-gray-600 dark:text-gray-300">{foodOrigin}</span>
                            </div>
                        </div>

                        <div>
                            <div className="mt-4">
                                <div className="">
                                    <button
                                        onClick={handlePurchase}
                                        className={`py-2 px-4 rounded-sm font-bold ${quantity === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 duration-300'} text-white`}
                                        disabled={quantity === 0}
                                    >
                                        Purchase
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default FoodDetails;
