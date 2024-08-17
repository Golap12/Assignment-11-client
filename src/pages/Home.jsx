import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeFoodCard from '../components/HomeFoodCard';
import Hero from '../components/Hero';
import ContactPage from '../components/ContactPage';
import Testimonial from '../components/Testimonial';
import { Helmet } from 'react-helmet-async';
import ReactPaginate from 'react-paginate';
import '../index.css'; // Import global styles

const Home = () => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/top-selling-foods?page=${currentPage + 1}&limit=${itemsPerPage}`);
                const result = await response.json();
                setData(result.topSellingFoods);
                setTotalPages(result.totalPages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage]);

    const handlePageChange = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <div className="min-h-screen text-white">
            <Helmet>
                <title>Foodie's | Home Page</title>
            </Helmet>

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
                    {data.map(food => (
                        <HomeFoodCard key={food._id} food={food} />
                    ))}
                </div>
                <div className="mt-10">
                    <ReactPaginate
                        pageCount={totalPages}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        activeClassName="active"
                    />
                </div>
            </div>

            <div>
                <Testimonial />
            </div>

            <div>
                <ContactPage />
            </div>
        </div>
    );
};

export default Home;
