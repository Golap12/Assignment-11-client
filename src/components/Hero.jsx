import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-white dark:bg-gray-800 flex relative items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative ">
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                    </span>
                    <h1 className="font-bebas-neue uppercase text-6xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                        Welcome to
                        <span className="text-5xl sm:text-7xl">
                            Taste Paradise
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                        Discover the flavors of authentic cuisine. A place where taste meets the tradition, serving dishes that will tantalize your taste buds.
                    </p>
                    <div className="flex mt-8">
                        <Link to='/allFood'><p className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Explore Menu
                        </p></Link>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src="https://www.tailwind-kit.com/images/object/10.png" className="max-w-xs md:max-w-sm m-auto" />
                </div>
            </div>
        </div>
    );
};

export default Hero