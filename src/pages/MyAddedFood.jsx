import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './../provider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing necessary icons
import toast from 'react-hot-toast';

const MyAddedFood = () => {
    const [myData, setMyData] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        
        
    }, [user]);


    const getAllFoodData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/user/${user?.email}`);
            setMyData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
   
    getAllFoodData();

    

    const handleUpdate = (id) => {
        console.log(`Update item with id: ${id}`);
    };

    const handleDelete = async (id) => {

        try {
            const { data } = axios.delete(`${import.meta.env.VITE_API_URL}/food/user/${id}`)
            toast.success("Deleted Success")
            getAllFoodData()
        } catch (err){
            console.log(err.message);
            toast.error(err.message)
        }
        
        console.log(`Delete item with id: ${id}`);
    };

    return (
        <div className="overflow-x-auto p-10 bg-gray-900 text-gray-300">
            {myData && myData.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className='bg-gray-700'>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {
                            myData.map((food) => (
                                <tr key={food._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={food.foodImage} alt={food.foodName} className="h-12 w-12 rounded-md" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{food.foodName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{food.foodCategory}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">${food.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                        <button onClick={() => handleUpdate(food._id)} className="text-blue-500 hover:text-blue-300">
                                            <FaEdit size={20} />
                                        </button>
                                        <button onClick={() => handleDelete(food._id)} className="ml-4 text-red-500 hover:text-red-300">
                                            <FaTrash size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            ) : (
                <p className="text-center py-4">No food items found.</p>
            )}
        </div>
    );
};

export default MyAddedFood;
