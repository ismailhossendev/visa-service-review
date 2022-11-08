import React from 'react';
import { Link } from 'react-router-dom';
import {ImStarFull} from "react-icons/im";
import {HiCurrencyBangladeshi} from "react-icons/hi";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'

const ServiceCard = () => {
    return (
        <div href="#" className="relative block border border-gray-100">
        <button type="button" className="absolute right-4 top-4 rounded-full bg-black p-2 text-white">
            <span className="sr-only">Wishlist</span>
            <p className="flex text-xs"><ImStarFull />4.5</p>
        </button>
        <div >
            
        <PhotoProvider >
            <PhotoView src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80">
                <img className="h-56 w-full object-contain lg:h-72" alt="Toy" src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" />
            </PhotoView>
        </PhotoProvider>
        </div>
        <div className="p-6">
            <strong className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
            New
            </strong>
            <h3 className="mt-4 text-lg font-bold">Robot Toy</h3>
            <p className="mt-2 text-sm text-gray-700 flex gap-1 items-center">1800 <HiCurrencyBangladeshi className='text-[18px]'/> </p>
            <Link to='/service/details' type="button" className="mt-4  text-center w-full rounded-sm bg-yellow-500 p-4 text-sm font-medium">
            Details
            </Link>
        </div>
        </div>

    );
};

export default ServiceCard;