import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full sm:w-8/12 mb-10">
                <div className="container mx-auto h-full sm:p-10">
                    <motion.nav 
                        className="flex px-4 justify-between items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="md:text-4xl text-2xl font-bold">
                            Foodie's<span className="text-red-600">Haven</span>
                        </div>
                    </motion.nav>
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <motion.div 
                            className="w-full"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.h1 
                                className="md:text-4xl text-3xl lg:text-6xl font-bold"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                Discover the <span className="text-red-600">Taste</span> of Freshness
                            </motion.h1>
                            <motion.div 
                                className="w-20 h-2 bg-red-600 my-4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            ></motion.div>
                            <motion.p 
                                className="md:text-lg text-sm mb-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Satisfy your cravings with our delicious meals made from the finest ingredients. Whether you're looking for a quick bite or a full-course meal, we've got you covered.
                            </motion.p>
                            <Link to='/allFood'>
                                <motion.button 
                                    className="bg-red-500 hover:bg-white hover:text-red-500 transition-all duration-300 text-white md:text-2xl font-semibold px-4 py-2 rounded shadow"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    Explore More
                                </motion.button>
                            </Link>
                        </motion.div>
                    </header>
                </div>
            </div>
            <motion.img 
                src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" 
                alt="Delicious Food" 
                className="w-full h-48 object-cover sm:h-screen sm:w-4/12 px-4 md:px-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
            />
        </div>
    );
};

export default Hero;
