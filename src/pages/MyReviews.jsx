import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEdit,FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { mainContext } from '../context/MainContext';
import EditReview from './EditReview';

const MyReviews = () => {
    const [reviews,setReviews] = React.useState([])
    const [refresh,setRefresh] = React.useState(false)
    const {user} = React.useContext(mainContext)
    const [loading,setLoading] = React.useState(true)
    const [edit,setEdit] = React.useState("");
    React.useEffect(()=>{
        fetch(`https://visa-service-bakcend.vercel.app/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setReviews(data.data)
            setLoading(false)
        })
    },[user?.email,refresh])

    const handleDelete = (id) => {
        setLoading(true)
        window.confirm('Are you sure?') &&  fetch(`https://visa-service-bakcend.vercel.app/reviews/${id}`,{
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
        <div class="bg-white max-w-screen-xl mx-auto my-5 relative">
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
                        return <>
                        <tr class="border-b hover:bg-gray-50">
                        <td class="p-4">
                        {review?.title}
                        </td>
                        <td class="p-4">
                        {review?.reviewText}
                        <p>{review?.time}</p>
                        </td>
                        <td class="p-4">
                        {review?.price} BDT
                        </td>
                        <td onClick={()=>setEdit(review._id)}><FaEdit/></td>
                        <td onClick={()=>handleDelete(review?._id)} className='text-rose-500 cursor-pointer'><FaTrash/></td>
                        </tr>
                        <tr className={`${edit === review._id ? 'block w-full absolute z-50 bg-white': 'hidden'}`} >
                        <fieldset className="mx-auto  gap-6 p-6 rounded-md shadow-sm border w-[100%] border-black">
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3" bis_skin_checked="1">
                                <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                                    <label  className="text-sm">Name</label>
                                    <input id="username" type="text" defaultValue={user?.displayName} readOnly placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  " />
                                </div>
                                <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                                    <label  className="text-sm ">Product</label>
                                    <input id="website" type="text" placeholder="https://" defaultValue={review?.title} readOnly className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  " />
                                </div>
                                <div className="col-span-full" bis_skin_checked="1">
                                    <label htmlFor="bio" className="text-sm">Review</label>
                                    <textarea id="bio" placeholder="" defaultValue={review.reviewText} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "></textarea>
                                </div>
                                <div className="col-span-full flex gap-2 " bis_skin_checked="1">
                                    <button className='px-6 py-2 bg-indigo-400 rounded hover:bg-indigo-500'>Submit</button>
                                    <button onClick={()=> setEdit('')} className='px-6 py-2 bg-rose-400 rounded hover:bg-rose-500'>Cancel</button>
                                </div>
                            </div>
                        </fieldset>
                        </tr>
                        </> 
                        
                     
                    })
                }
            </tbody>
        </table>
        { reviews?.length === 0 &&
            <div className="h-[80vh] flex justify-center items-center">
                <p>No reviews were added </p>
            </div>

        }
        </div>
        </div>
    );
};

export default MyReviews;