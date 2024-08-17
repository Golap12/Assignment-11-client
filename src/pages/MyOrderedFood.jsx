import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import PurchaseCard from '../components/PurchaseCard';
import NoDataAnimation from '../components/NoDataAnimation';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { AuthContext } from '../provider/AuthProvider';

const MyOrderedFood = () => {
    const { user } = useContext(AuthContext)
    const [purchaseData, setPurchaseData] = useState([]);

    useEffect(() => {
        getAllPurchaseData();
    }, []);

    const getAllPurchaseData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/purchase/foods/${user?.email}`, {
                withCredentials: true,
            });
            setPurchaseData(data);
        } catch (error) {
            console.error("Error fetching purchase data:", error);
        }
    };

    return (
        <div className='container mx-auto p-6 bg-gray-900 text-white'>
            <Helmet>
                <title>Foodie's | My Ordered</title>
            </Helmet>
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-2xl md:text-3xl font-bold mb-4">My Ordered Food</h1>
                <p className="text-sm text-gray-400">
                    Here you can view all the delicious foods you have ordered. Enjoy your meals and manage your orders easily.
                </p>
            </motion.div>
            <motion.div
                className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {purchaseData.length > 0 ? (
                    purchaseData.map(pFood => (
                        <motion.div
                            key={pFood._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <PurchaseCard pFood={pFood} getAllPurchaseData={getAllPurchaseData} />
                        </motion.div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center col-span-3">
                        <NoDataAnimation />
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default MyOrderedFood;
