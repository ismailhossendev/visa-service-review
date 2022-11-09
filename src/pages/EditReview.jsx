import React from 'react';

const EditReview = ({review}) => {
    return (
        <fieldset className=" max-w-screen-xl mx-auto gap-6 p-6 rounded-md shadow-sm ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3" bis_skin_checked="1">
                <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                    <label for="username" className="text-sm">Username</label>
                    <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  " />
                </div>
                <div className="col-span-full sm:col-span-3" bis_skin_checked="1">
                    <label for="website" className="text-sm">Website</label>
                    <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  " />
                </div>
                <div className="col-span-full" bis_skin_checked="1">
                    <label for="bio" className="text-sm">Bio</label>
                    <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "></textarea>
                </div>
                <div className="col-span-full" bis_skin_checked="1">
                    <label for="bio" className="text-sm">Photo</label>
                    <div className="flex items-center space-x-2" bis_skin_checked="1">
                        <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full  " />
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default EditReview;