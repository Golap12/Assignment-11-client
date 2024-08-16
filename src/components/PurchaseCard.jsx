import axios from 'axios';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { IoTrashBinSharp } from "react-icons/io5";
import { AuthContext } from '../provider/AuthProvider';

const PurchaseCard = ({ pFood, getAllPurchaseData }) => {
    
    const {user} = useContext(AuthContext)
    console.log(user);
    
    
    const {
        _id,
        foodImage,
        foodName,
        foodCategory,
        price,
        madeBy,
        purchaseDate,
    } = pFood;


    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/purchase/${id}`);
            toast.success("Deleted Successfully");
            getAllPurchaseData();
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };

    return (
        <div className="rounded-lg overflow-hidden flex shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-sm bg-gray-800 cursor-pointer">
            <div className="w-2/3 p-4 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white mb-2 truncate">{foodName}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                    <img src={foodImage} alt="Author" className="rounded-full h-8 w-8 mr-2 object-cover" />
                    {/* <span className='text-sm font-medium text-white'>{user.displayName}</span> */}
                    <span className="font-medium text-xs tracking-wide text-gray-400">Food Owner {madeBy}</span>
                </div>
                
                <p className="text-xs text-gray-400 mt-2">
                    Purchase Time: <span className="text-white">{new Date(purchaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </p>
                <p className="text-xs text-gray-400 mt-2">
                    Price: <span className="text-white">${price}</span>
                </p>
                <button onClick={() => handleDelete(_id)} className="w-[40%]  mt-4 flex gap-2 items-center justify-center bg-red-600 hover:bg-red-500 text-white font-bold p-1 rounded transition duration-300">
                <span><IoTrashBinSharp size={15} /></span>
                <span>Delete</span>
                </button>
            </div>
            <div className="w-1/3">
                <img src={foodImage} alt="Food" className="w-full h-full object-cover rounded-r-lg" />
            </div>
        </div>
    );
};

export default PurchaseCard;