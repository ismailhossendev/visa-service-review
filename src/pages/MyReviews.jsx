import React from 'react';
import { FaEdit,FaTrash } from 'react-icons/fa';

const MyReviews = () => {
    return (
        <div class="bg-white max-w-screen-xl mx-auto my-5">
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
                <tr class="border-b hover:bg-gray-50">
                    <td class="p-4">
                    Prof. Lucie Waters 
                    </td>
                    <td class="p-4">
                    basic@example.com 
                    <p>12/11/22 - 12:00</p>
                    </td>
                    <td class="p-4">
                    5000 BDT
                    </td>
                    <td><FaEdit/></td>
                    <td className='text-rose-500'><FaTrash/></td>
                </tr>
                <tr class="border-b hover:bg-gray-50">
                    <td class="p-4">
                    Anahi Bashirian (You) 
                    </td>
                    <td class="p-4">
                    admin@example.com  
                    </td>
                    <td class="p-4">
                    Super Administrator 
                    </td>
                    <td><FaEdit/></td>
                    <td className='text-rose-500'><FaTrash/></td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    );
};

export default MyReviews;