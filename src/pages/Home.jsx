import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeFoodCard from '../components/HomeFoodCard';
import Hero from '../components/Hero';

const Home = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <div>
                <Hero />
            </div>

            <div className="container mx-auto p-6 bg-gray-900">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Top Selling Foods</h2>
                    <p className="text-gray-400 mt-2">
                        Explore our top-selling dishes made with premium ingredients, ensuring a delightful experience for every craving.
                    </p>
                </div>
                <div className="grid justify-items-center items-center xl:px-16 px-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        data.map(food => (
                            <HomeFoodCard key={food._id} food={food} />
                        ))
                    }
                </div>
            </div>

            
        </div>
    );
};

export default Home;
