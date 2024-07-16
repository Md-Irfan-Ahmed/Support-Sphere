"use client"
import { useRouter } from "next/navigation"
import React from 'react'
import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { updateProfile, fetchUser } from "@/actions/useractions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const[form, setform] = useState({})

    const getData = async() => {
        let u = await fetchUser(session.user.name)
        setform(u)
    }

    useEffect(()=>{
        if(!session){
            router.push('/login')
        }
        else{
            getData()
        }
    }, [router, session])

    const handleChange = (e)=>{
        setform({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit= async (e)=>{
        let a = await updateProfile(e, session.user.name)
        toast('Profile Udated Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }



    return (
        <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
        <ToastContainer />
        <div className="container mx-auto py-5 max-sm:px-6">
            <h1 className="text-center my-5 text-3xl font-bold">Welcome to your Dashboard</h1>
            <form className="max-w-2xl mx-auto" action={handleSubmit}>
            <div className="my-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Name</label>
                    <input value={form.name?form.name:""} onChange={handleChange} type="text" name="name" id="name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="my-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Email</label>
                    <input value={form.email?form.email:""} onChange={handleChange} type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="my-2">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">username</label>
                    <input value={form.username?form.username:""} onChange={handleChange} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="my-2">
                    <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Profile Picture</label>
                    <input value={form.profilepic?form.profilepic:""} onChange={handleChange} type="text" name="profilepic" id="profilepic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div> 
                <div className="my-2">
                    <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Cover</label>
                    <input value={form.coverpic?form.coverpic:""} onChange={handleChange} type="text" name="coverpic" id="coverpic" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div> 
                {/*RazorPay id */}
                <div className="my-2">
                    <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Razorpay Id</label>
                    <input value={form.razorpayid?form.razorpayid:""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                {/*RazorPay secret */}
                <div className="my-2">
                    <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Razorpay Secret</label>
                    <input value={form.razorpaysecret?form.razorpaysecret:""} onChange={handleChange} type="text" name="razorpaysecret" id="razorpaysecret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div> 
                <div className="my-6">
                <button type="submit" className="justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
                </div> 
            </form>
        </div>
        </>
    )
}

export default Dashboard
