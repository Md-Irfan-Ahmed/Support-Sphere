"use client"
import React,{useState} from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";
import Script from "next/script";
import { initiate } from "@/actions/useractions";
import { useSession } from "next-auth/react";
import { fetchUser, fetchpayments } from "@/actions/useractions";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const PaymentPage = ({ username }) => {
  //const{data: session} = useSession()
  const [paymentform, setPaymentform] = useState({name:"", message:"", amount:""});
  const [currentUser, setcurrentUser] = useState({})
  const [payments, setPayments] = useState([])
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])
  
  useEffect(() => {
    if(searchParams.get("paymentdone") == "true"){
        toast('🦄 Thanks For Your Support!', {
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
    router.push(`/${username}`)
  }, [])
  

  const handleChange = (e) => {
    setPaymentform({...paymentform, [e.target.name]: e.target.value });
  };

  const getData = async ()=>{
    let u =await fetchUser(username)
    setcurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setPayments(dbpayments)
  }

  const pay = async (amount) => {
    //get the orderid
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;
    var options = {
      key: currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Support Sphere", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "9000090000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  //if the username is not present in the database, show a 404 page

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
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img
          className="object-cover w-full md:h-[300] h-[50]"
          src={currentUser.coverpic}
          alt=""
        />
        <div className="absolute -bottom-12 overflow-hidden right-[36%] md:right-[42%] lg:right-[46%] size-36">
          <img
            className="rounded-lg  border-2 border-white size-36"
            src={currentUser.profilepic}
            alt=""
          />
        </div>
      </div>
      <div className="info flex flex-col justify-center items-center my-24 gap-2">
        <div className="font-bold text-lg">&#64;{username}</div>
        <div className="text-slate-400">Lets help {username} and Support!</div>
        <div className="text-slate-400">
          {payments.length} Payments . Raised &#8377;{payments.reduce((a, b) => a+b.amount, 0)} !
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11 flex-col sm:flex-row">
          <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-5 sm:p-10">
            {/*Show list of all the supoorters as a leaderboard*/}
            <h2 className="text-2xl font-bold my-5">Top Supporters</h2>
            {payments.length === 0 && <li>No Payments Yet</li>}
            <ul className="mx-3 text-lg">
              {payments.map((p, i) =>{
                return  <li key={uuidv4()} className="my-2 flex gap-2 items-center">
                <img width={60} src="profile2.gif" alt="user avatar" />
                <span>
                  {p.name} donated <span className="font-bold">&#8377;{p.amount}</span> with a
                  message &quot;{p.message}&quot;
                </span>
              </li>
            })}
            </ul>
          </div>

          <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
            <div className="flex flex-col gap-2">
              <div>
                <input
                  onChange={handleChange}
                  value={paymentform.name}
                  type="text"
                  name='name'
                  className="rounded-lg w-full p-3 rounded-g bg-slate-800"
                  placeholder="Enter Name"
                />
              </div>
              <input
                onChange={handleChange}
                value={paymentform.message}
                type="text"
                name='message'
                className="rounded-lg w-full p-3 rounded-g bg-slate-800"
                placeholder="Enter Message"
              />
              <input
                onChange={handleChange}
                value={paymentform.amount}
                type="text"
                name='amount'
                className="rounded-lg w-full p-3 rounded-g bg-slate-800"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                onClick={()=>pay(Number.parseInt(paymentform.amount*100))}
                className="text-white disabled:bg-slate-900 disabled:from-purple-900  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={paymentform.name?.length<3 || paymentform.message?.length<4}
              >
                Pay
              </button>
            </div>
            {/*Or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(1000)}
              >
                Pay 50
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(2000)}
              >
                Pay 100
              </button>
              <button
                className="bg-slate-800 p-3 rounded-lg"
                onClick={() => pay(3000)}
              >
                Pay 150
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
