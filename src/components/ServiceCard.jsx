import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation2 ,ImStarFull} from "react-icons/im";
import {HiCurrencyBangladeshi} from "react-icons/hi";

const ServiceCard = () => {
    return (
        <div className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat">
        <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            4.5
            <ImStarFull className="ml-1 text-bg text-yellow-500 mb-0.5"/>
        </span>
        <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
            400
            <HiCurrencyBangladeshi className="ml-1 text-bg text-yellow-500 mb-0.5"/>
        </span>
        <div className="relative bg-black bg-opacity-40 p-8 pt-40 text-white space-y-3">
            <h3 className="text-2xl font-bold">Explore Kolkata</h3>
            <p className="text-sm flex items-center"><ImLocation2 className='mr-1'/> Kolkata,West Bengal,India</p>
            <Link
            class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            href="/download"
            >
            Details
            </Link>
        </div>
        </div>
    );
};

export default ServiceCard;