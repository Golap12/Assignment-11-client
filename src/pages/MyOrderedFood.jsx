import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PurchaseCard from '../components/PurchaseCard';
import NoDataAnimation from '../components/NoDataAnimation';
import { Helmet } from 'react-helmet-async';

const MyOrderedFood = () => {



    const [purchaseData, setPurchaseData] = useState([]);

    useEffect(() => {
        getAllPurchaseData()
    }, [])

    const getAllPurchaseData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/purchase`)
        setPurchaseData(data)

    }


    return (
        <div className='container mx-auto p-6 bg-gray-900 text-white'>
            <Helmet>
                <title>Foodie's | My Ordered</title>
            </Helmet>
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">My Ordered Food</h1>
                <p className="text-sm text-gray-400">Here you can view all the delicious foods you have ordered. Enjoy your meals and manage your orders easily.</p>
            </div>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {purchaseData.length > 0 ? (
                    purchaseData.map(pFood => (
                        <PurchaseCard key={pFood._id} pFood={pFood} getAllPurchaseData={getAllPurchaseData}></PurchaseCard>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center col-span-3">
                        <NoDataAnimation />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrderedFood;
