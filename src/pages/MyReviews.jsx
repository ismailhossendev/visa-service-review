import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEdit,FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { mainContext } from '../context/MainContext';

const MyReviews = () => {
    const [reviews,setReviews] = React.useState([])
    const [refresh,setRefresh] = React.useState(false)
    const {user} = React.useContext(mainContext)
    const [loading,setLoading] = React.useState(true)
    React.useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setReviews(data.data)
            setLoading(false)
        })
    },[user?.email,refresh])

    const handleDelete = (id) => {
        setLoading(true)
        window.confirm('Are you sure?') &&  fetch(`http://localhost:5000/reviews/${id}`,{
        method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                setRefresh(!refresh)
                toast.success(data.message)
                setLoading(false)
            }
        })
    }


    return (
        <div class="bg-white max-w-screen-xl mx-auto my-5">
            <Helmet>
                <title>Visa Dalal -My Review</title>
            </Helmet>
            { loading &&
                <div className="flex items-center justify-center space-x-2" bis_skin_checked="1">
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400" bis_skin_checked="1"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400" bis_skin_checked="1"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400" bis_skin_checked="1"></div>
                </div>
            }
        <h1 className='text-xl font-serif font-semibold my-2'>All Reviews</h1>
        <div class="overflow-x-auto border-x border- shadow-md shadow-gray-600">
        <table class="table-auto w-full">
            <thead class="border-b">
                <tr class="bg-gray-100">
                    <th class="text-left p-4 font-medium">
                    Product Name
                    </th>
                    <th class="text-left p-4 font-medium">
                    Review/Time
                    </th>
                    <th class="text-left p-4 font-medium">
                    Price 
                    </th>
                    <th>
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    reviews.map(review =>{
                        const {title,price,reviewText,_id,time} = review;
                        return <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">
                        {title}
                        </td>
                        <td class="p-4">
                        {reviewText} 
                        <p>{time}</p>
                        </td>
                        <td class="p-4">
                        {price} BDT
                        </td>
                        <td><FaEdit/></td>
                        <td onClick={()=>handleDelete(_id)} className='text-rose-500 cursor-pointer'><FaTrash/></td>
                    </tr>
                    })
                }
            </tbody>
        </table>
        { reviews.length === 0 &&
            <div className="h-[80vh] flex justify-center items-center">
                <p>No reviews were added </p>
            </div>

        }
        </div>
        </div>
    );
};

export default MyReviews;