import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEdit,FaTrash } from 'react-icons/fa';
import { mainContext } from '../context/MainContext';

const MyReviews = () => {
    const [reviews,setReviews] = React.useState([])
    const {user} = React.useContext(mainContext)
    React.useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data.data))
    },[user?.email])
    return (
        <div class="bg-white max-w-screen-xl mx-auto my-5">
                        <Helmet>
                <title>Visa Dalal -My Review</title>
            </Helmet>
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
                        const {title,price,reviewText,createdAt,_id,time} = review;
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
                        <td className='text-rose-500'><FaTrash/></td>
                    </tr>
                    })
                }
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default MyReviews;