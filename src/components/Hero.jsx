import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full sm:w-8/12 mb-10">
                <div className="container mx-auto h-full sm:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div className="text-4xl font-bold">
                            Foodie's<span className="text-red-600">Haven</span>
                        </div>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
                        </div>
                    </nav>
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">Discover the <span className="text-red-600">Taste</span> of Freshness</h1>
                            <div className="w-20 h-2 bg-red-600 my-4"></div>
                            <p className="text-xl mb-10">Satisfy your cravings with our delicious meals made from the finest ingredients. Whether you're looking for a quick bite or a full-course meal, we've got you covered.</p>
                            <Link to='/allFood'>
                                <button className="bg-red-500 hover:bg-white hover:text-red-500 transition-all duration-300 text-white text-2xl font-semibold px-4 py-2 rounded shadow">Explore More</button>
                            </Link>
                        </div>
                    </header>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Delicious Food" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
        </div>
    );
};

export default Hero;
