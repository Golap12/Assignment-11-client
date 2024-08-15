import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PurchaseCard from '../components/PurchaseCard';

const MyOrderedFood = () => {



    const [purchaseData, setPurchaseData] = useState([]);

    useEffect(() => {

        const getAllPurchaseData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/purchase`)
            setPurchaseData(data)
        }
        getAllPurchaseData()
    }, [])


    return (
        <div className='container mx-auto p-6 bg-gray-900 text-white'>

            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">My Ordered Food</h1>
                <p className="text-sm text-gray-400">Here you can view all the delicious foods you have ordered. Enjoy your meals and manage your orders easily.</p>
            </div>


            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>

                {
                    purchaseData.map(pFood => <PurchaseCard key={pFood._id} pFood={pFood}></PurchaseCard>)
                }



            </div>
        </div>
    );
};

export default MyOrderedFood;
