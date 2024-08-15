import React from 'react';
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            {/* navbar  */}
            <Navbar />

            {/* outlet  */}
            <div className='min-h-[calc(100vh-345.6px)] bg-gray-900'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            {/* footer  */}
        </div>
    );
};

export default Root;