import PaymentPage from "@/components/PaymentPage";
import React from "react";
import { notFound } from "next/navigation";
import connectDB from "@/db/connectDb";
import User from "@/models/User";

const Username = async ({params}) => {
  //If the username is not present in the database, show a 404 page
  const checkUser = async() =>{
    await connectDB()
    let u = await User.findOne({username: params.username})
    if(!u){
      return notFound()
    }
  }
  await checkUser()
  return (
    <>
      <PaymentPage username={params.username}/>
    </>
  );
};

export default Username;

// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: `${params.username} - Support Sphere`,
  }
}