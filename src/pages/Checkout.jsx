import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaImage, FaTags, FaUser, FaEnvelope, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';  // React Icons

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { food } = location.state || {};

    if (!food) {
        return <Navigate to="/" />;
    }

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
    } = food;

    const handlePurchase = async () => {
        if (quantity <= 0) {
            toast.error("Quantity is insufficient for purchase");
            return;
        }

        const purchaseFood = {
            foodName,
            foodImage,
            foodCategory,
            quantity: quantity - 1,
            madeBy,
            price,
            purchaseBy: user?.email,
            foodOrigin,
            description,
            purchase_count: purchase_count + 1,
            purchaseDate: Date.now(),
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/purchase-foods`, purchaseFood);
            toast.success("Purchase Success");
            navigate('/myOrderFood');
        } catch (error) {
            console.log(error);
        }

        handleUpdateQP(food);
    };

    const handleUpdateQP = async (food) => {
        const updateQntAndPrc = {
            quantity: quantity - 1,
            purchase_count: purchase_count + 1,
        };

        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/food/user/${food._id}`, updateQntAndPrc)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-gray-900 py-12 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Checkout</h1>
            <Helmet>
                <title>Foodie's | Checkout</title>
            </Helmet>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full mx-4">

                <div className="p-6">

                    <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-1/2">
                            <img src={foodImage} alt={foodName} className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
                        </div>
                        <div className="flex-auto p-6">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{foodName}</h2>
                            <div className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">${price}</div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">{quantity > 0 ? `In stock: ${quantity}` : 'Out of stock'}</p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <FaTags className="mr-2" />
                                    <p className="text-sm"><span className="font-semibold">Category:</span> {foodCategory}</p>
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <FaUser className="mr-2" />
                                    <p className="text-sm"><span className="font-semibold">Made By:</span> {madeBy}</p>
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <FaMapMarkerAlt className="mr-2" />
                                    <p className="text-sm"><span className="font-semibold">Origin:</span> {foodOrigin}</p>
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <FaInfoCircle className="mr-2" />
                                    <p className="text-sm"><span className="font-semibold">Purchase Count:</span> {purchase_count}</p>
                                </div>

                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <FaUser className="mr-2" />
                                    <p className="text-sm"><span className="font-semibold">Your Name:</span> {user?.displayName || 'N/A'}</p>
                                </div>
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <FaEnvelope className="mr-2" />
                                    <p className="text-sm"><span className="font-semibold">Your Email:</span> {user?.email || 'N/A'}</p>
                                </div>

                            </div>
                            <button
                                onClick={handlePurchase}
                                className={`py-2 px-4 rounded-sm font-bold text-white ${quantity > 0 ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-400 cursor-not-allowed'} transition duration-300`}
                                disabled={quantity <= 0}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
