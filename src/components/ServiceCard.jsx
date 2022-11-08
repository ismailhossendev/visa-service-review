import React from 'react';
import { Link } from 'react-router-dom';
import {ImStarFull} from "react-icons/im";
import {HiCurrencyBangladeshi} from "react-icons/hi";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'

const ServiceCard = ({service}) => {
    const {title, details, price, country, time, image,_id} = service;

    return (
        <div href="#" className="relative block border border-gray-100">
        <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">
            <span className="sr-only">Wishlist</span>
            <p className="flex text-xs"><ImStarFull />4.5</p>
        </button>
        <div >
            
        <PhotoProvider >
            <PhotoView src={image}>
                <img className="h-56 w-full object-contain lg:h-72" alt={title} src={image} />
            </PhotoView>
        </PhotoProvider>
        </div>
        <div className="p-6">
            <strong className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
            {country}
            </strong>
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className='font-thin'>{time} Need Delivery With Processing</p>
            <p className="mt-2 text-sm text-gray-700 flex gap-1 items-center">Price:{price} <HiCurrencyBangladeshi className='text-[18px]'/> </p>
            <p className='text-sm text-gray-700'>{details.length > 100 ?<> {details.slice(0,90)}<Link to={`/services/${_id}`} className="mt-4 underline text-sm font-medium">
            Read more..
            </Link></>: details}</p>
            <Link to={`/services/${_id}`} type="button" className="mt-4  text-center w-full rounded-sm bg-yellow-500 p-4 text-sm font-medium">
            Details
            </Link>
        </div>
        </div>

    );
};

export default ServiceCard;