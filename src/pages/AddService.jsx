import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const AddService = () => {
    const country = useLoaderData()

    const [countryDetails, setCountryDetails] = useState(country)
    const HandleServiceAdd = (e) => {
        e.preventDefault()
        const data ={
            title: e.target.title.value,
            details: e.target.details.value,
            price: e.target.price.value,
            country: countryDetails,
            time: e.target.time.value,
            image: e.target.image.value
        }
        fetch('http://localhost:5000/services/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert(data.message)
            }
        })
        
    }

    return (
        <main className="flex min-h-screen flex-col justify-center p-10">
            
            <form onSubmit={HandleServiceAdd} className="mx-auto rounded-xl border border-black  py-6 p-4 lg:w-1/2  shadow-2xl shadow-white/40">
                <h1 className="text-3xl font-bold text-gray-700">Add Services</h1>
                <p className="mb-8  text-gray-500">All * are required</p>
                <div className="flex flex-col">
                        <label htmlFor="price" className="mb-2 font-semibold">Price</label>
                        <input type="number" id="price" name='price' placeholder='200BDT' className="w-full lg:w-60  rounded-lg border border-slate-400 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                    </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="title" className="mb-2 font-semibold">Service title</label>
                        <input type="text" id="title" name='title' placeholder='Indian visa processing' className="w-full max-w-lg rounded-lg border border-slate-400 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="county" className="mb-2 font-semibold">Country</label>
                        <select onChange={e => setCountryDetails(e.target.value)} id="country" className="w-full max-w-lg rounded-lg border border-slate-400 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 " >
                            {
                                country.map((country) => <option key={country.ccn3} value={country.name.common}>{country.name.common}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="image" className="mb-2 font-semibold">Cover image</label>
                            <input type="text" id="image" name='image' placeholder='imbb.com/cover' className="w-full rounded-lg border border-slate-400 pb-0.5 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="time" className="mb-2 font-semibold">Processing Time</label>
                        <div className="relative">
                            <input type="text" name='time' id="time" placeholder='Average (30days)..' className="w-full rounded-lg border border-slate-400 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                        </div>
                    </div>
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="details" className="mb-2 font-semibold">Details</label>
                    <textarea type="text" name='details' id="details" placeholder='here are many types of visas are available for Malaysia, su...' className="w-full rounded-lg border border-slate-400 px-2 pb-10 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
                </div>
                <button type="submit" className='bg-indigo-600 px-8 py-2 text-white rounded hover:bg-indigo-500'>Add</button>
            </form>
        </main>
    );
};

export default AddService;