import React,{useContext,useEffect,useState} from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import CreateReview from '../components/CreateReview';
import StoredReview from '../components/StoredReview';
import { mainContext } from '../context/MainContext';

const ProductDetails = () => {
    const {data} = useLoaderData();
    const {title, details, price, country, image,_id} = data;
    const {user,loading} = useContext(mainContext)
    const [reviews,setReviews] = useState([])
    const [refresh,setRefresh] = useState(false);
    window.scroll(0,0)
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?productId=${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data.data))
    },[_id,refresh])
    
    return (
        <section className=' mx-auto max-w-screen-xl'>
                        <Helmet>
                <title>{title} -Product Details</title>
            </Helmet>
            <div className="relative px-4 py-8">
                <div className="items-start gap-8 ">
                    <div className="h-96">
                        <img className='h-full w-full object-cover rounded-lg' alt="Les Paul" src={image} />
                    </div>
                    <div className="">
                        <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                       {country}
                        </strong>
                        <div className="mt-8 flex justify-between">
                        <div className="max-w-[35ch]">
                            <h1 className="text-2xl font-bold">
                            {title}
                            </h1>
                            <p className="mt-0.5 text-sm">Highest Rated Service</p>
                            <div className="mt-2 -ml-0.5 flex">
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            </div>
                        </div>
                        <p className="text-lg font-bold">{price} BDT</p>
                        </div>
                        <form className="mt-8">
                        <div className="mt-8 flex">
                            <div>
                            <label htmlFor="quantity" className="sr-only">Qty</label>
                            <input type="number" id="quantity" min={1} defaultValue={1} className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
                            </div>
                            <button type="submit" className="ml-3 block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500">
                            Add to Cart
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
                <details className="">
                    <summary className="block">
                        <div>
                        <div className="prose max-w-none group-open:hidden">
                            <p>
                                {details}
                            </p>
                        </div>
                        </div>
                    </summary>  
                </details>
            </div>
            <div className="my-5 grid md:grid-cols-2 gap-2">
                {
                    reviews.map(review => <StoredReview key={review._id} review={review}/>)
                }

            </div>
            <CreateReview user={user} refresh={refresh} setRefresh={setRefresh} data={data}/>
        </section>

    );
};

export default ProductDetails;