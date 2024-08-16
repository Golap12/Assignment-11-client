import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeFoodCard from '../components/HomeFoodCard';
import Hero from '../components/Hero';
import ContactPage from '../components/ContactPage';
import Testimonial from '../components/Testimonial';

const Home = () => {
    const data = useLoaderData();

    return (
        <div className=" min-h-screen text-white">
            <div>
                <Hero />
            </div>

            <div className="container mx-auto p-6 bg-gray-900 mt-10">
                <div className="text-center flex flex-col justify-center items-center mb-8">
                    <h2 className="md:text-3xl text-2xl font-bold text-orange-500">Top Selling Foods</h2>
                    <p className="text-gray-400 text-sm w-1/2 mt-2">
                        Explore our top-selling dishes made with premium ingredients, ensuring a delightful experience for every craving.
                    </p>
                </div>
                <div className="mt-5 grid justify-items-center items-center xl:px-16 px-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        data.map(food => (
                            <HomeFoodCard key={food._id} food={food} />
                        ))
                    }
                </div>
            </div>


            <div>

            </div>


            <div>
                <Testimonial></Testimonial>
            </div>

            <div>
                <ContactPage></ContactPage>
            </div>

            
        </div>
    );
};

export default Home;
