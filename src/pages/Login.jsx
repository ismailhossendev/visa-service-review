import React, { useState,useContext } from 'react';
import loginImg from '../assest/img/login.svg';
import {FaEye, FaEyeSlash,FaGoogle} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mainContext } from '../context/MainContext';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const Login = () => {
    const [show, setShow] =useState(false);
    const {withGoogle,withEmail} = useContext(mainContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();


    const handleGoogle = () =>{
        withGoogle()
        .then(data => {
                fetch("https://visa-service-bakcend.vercel.app/jwt",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email:data.user.email})
                })  
                    .then(res => res.json())
                    .then(result =>{
                       localStorage.setItem('token',result.token)
                        toast.success("login success")
                       navigate(from, { replace: true });
                    })
        })
        .catch(error => {
            toast.error(error.message)
        });
    }

    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        withEmail(email,password)
        .then(data => {
            fetch("https://visa-service-bakcend.vercel.app/jwt",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:data.user.email})
            })  
                .then(res => res.json())
                .then(result =>{
                   localStorage.setItem('token',result.token)
                    toast.success("login success")
                   navigate(from, { replace: true });
                })
            })
            .catch(error => {
                toast.error(error.message)
            });
        }
    

    return (
        <section className="relative flex flex-wrap lg:h-[80vh] lg:items-center bg-gray-300">
            <Helmet>
                <title>Visa Dalal -login</title>
            </Helmet>
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="shadow-2xl p-4 rounded lg:w-1/2 mx-auto">
                    <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-gray-500">
                        Welcome Back to our website. Please login to your account.
                    </p>
                    </div>
                    <form  onSubmit={handleLogin} className="mx-auto mt-8 mb-0 max-w-md space-y-4 ">
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <div className="relative">
                        <input type="email" name='email' className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter email" />
                        <span className="absolute inset-y-0 right-4 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                        <input type={show ? "text" : "password"} name="password" className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm" placeholder="Enter password" />
                        <span onClick={()=>setShow(!show)} className="absolute inset-y-0 right-4 inline-flex items-center">
                            {   
                                show ? <FaEyeSlash className="h-5 w-5 text-gray-400"/> : <FaEye className="h-5 w-5 text-gray-400"/>
                            }
                        </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                        No account?
                        <Link to='/register' className="underline">Sign up</Link>
                        </p>
                        <button type="submit" className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                        Sign in
                        </button>
                    </div>
                    </form>
                    <div onClick={handleGoogle} className="flex items-center justify-center cursor-pointer my-2 gap-5 shadow-md text-gray-700 mx-auto w-[250px] hover:bg-indigo-500 rounded hover:text-gray-200 py-1">
                        <FaGoogle/>  Login with Google 
                    </div>
                </div>
            </div>
            <div className="h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img className='h-full' alt="Welcome" src={loginImg} />
            </div>
            </section>
    );
};

export default Login;