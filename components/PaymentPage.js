"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { fetchpayments, fetchuser, initiate } from '@/action/useraction'
import { session } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation'


const PaymentPage = ({ username }) => {
  //const { data: session } = useSession()
  const [paymentform, setpaymentform] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [payments, setpayments] = useState([])
  const searchParams = useSearchParams()
  const router = useRouter()



  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") { // we are searching payment done are true or not , payment hua h ke nhi
      toast('Payment Successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
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
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(username)
    setCurrentUser(u)
    let dbpayments = await fetchpayments(username)
    setpayments(dbpayments)
  }


  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id

    var options = {
      "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
      "amount": amount,
      "currency": "INR",
      "name": "Get Me A Chai",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId,
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }

    var rzp1 = new Razorpay(options);
    rzp1.open();
  }




  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} />
      <ToastContainer />


      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img className="object-cover text-red-500 w-full h-48 rounded-xl md:h-[350]" src={currentUser.coverpic} alt='Please Put Cover Photo Link' />
        <div className="absolute -bottom-10 text-red-600 right-[36%] md:right-[46%] border-2 border-white size-20 md:size-28 rounded-full overflow-hidden">
          <img width={85} height={85} className="rounded-full object-cover size-20 md:size-28" src={currentUser.profilepic} alt="Please Put Profile Pic Link" />
        </div>
      </div>
      <div className="info flex flex-col gap-2 justify-center items-center my-10 pb-32">
        <div className="font-bold text-lg">
          @{username}
        </div>
        <div className="text-slate-400">
          Let's Help {username} To Get a Tea!
        </div>

        <div className="text-slate-400">
          {payments.length} Payments • ₹{payments.reduce((acc, curr) => acc + curr.amount, 0)} raised
        </div>
        <div className="payment flex gap-3 w-[80%] mt-5 flex-col md:flex-row">

          <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-4 sm:p-6 md:p-7">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-center md:text-left">
              Supporters
            </h2>
            <ul className="mx-0 sm:mx-5 text-sm">
              {payments.length === 0 && (
                <li className="text-center sm:text-left">
                  No Payments Yet
                </li>
              )}
              {payments.map((p, i) => {
                return (<li key={i} className="my-4  flex flex-col sm:flex-row  sm:items-center  gap-3 sm:gap-2 bg-slate-800/30 sm:bg-transparent p-3 sm:p-0 rounded-lg">
                  <div className="flex items-center gap-2">
                    <img width={33} src="avatar.gif" alt="User Avatar" className="flex-shrink-0" />
                    <span className="sm:hidden font-semibold">
                      {p.name}
                    </span>
                  </div>

                  <span className="leading-relaxed">
                    <span className="hidden sm:inline">{p.name}</span>{" "}donated{" "}<span className="font-bold">₹{p.amount}</span>{" "}with a message{" "}<span className="italic">"{p.message}"</span>
                  </span>
                </li>);
              })}
            </ul>
          </div>

          <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-4 sm:p-6 md:p-8">

            <h2 className="text-xl sm:text-2xl font-bold my-4 sm:my-5 text-center md:text-left">
              Make a payment
            </h2>

            <div className="flex flex-col gap-3 sm:gap-2">
              <input type="text" onChange={handleChange} value={paymentform.name} name="name" className="w-full p-3 rounded-lg bg-slate-800 text-white text-sm sm:text-base" placeholder="Enter Name" />

              <input type="text" onChange={handleChange} value={paymentform.message} name="message" className="w-full p-3 rounded-lg bg-slate-800 text-white text-sm sm:text-base" placeholder="Enter Message" />

              <input type="text" onChange={handleChange} value={paymentform.amount} name="amount" className="w-full p-3 rounded-lg bg-slate-800 text-white text-sm sm:text-base" placeholder="Enter Amount" />

              <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 3 || paymentform.amount?.length < 1} className=" w-full sm:w-auto text-white  bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-gradient-to-bl  focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium text-sm px-4 py-3 sm:py-2.5  rounded-3xl  disabled:from-red-700">Pay</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 mt-6 justify-center-safe">
              <button className="bg-slate-800 p-3 rounded-lg w-full sm:w-auto" onClick={() => pay(1000)}>Pay ₹10 </button>

              <button className="bg-slate-800 p-3 rounded-lg w-full sm:w-auto" onClick={() => pay(2000)}>Pay ₹20</button>

              <button className="bg-slate-800 p-3 rounded-lg w-full sm:w-auto" onClick={() => pay(3000)}>Pay ₹30</button>
            </div>
          </div>





          {/* <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-7">
            <h2 className="text-2xl font-bold mb-5">Supporters</h2>
            <ul className="mx-5 text-sm">
              {payments.length === 0 && <li>No Payments Yet</li>}
              {payments.map((p, i) => {
                return <li key={i} className="my-4 flex items-center gap-2">
                  <img width={33} src="avatar.gif" alt="User Avtar" />

                  <span> {p.name} donated <span className="font-bold">₹{p.amount}</span> with a message "{p.message}" </span>
                </li>
              })}
            </ul>
          </div> */}
          {/* <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-8">
            <h2 className="text-2xl font-bold my-5">Make a payment</h2>
            <div className="flex flex-col gap-2">
              <input type="text" onChange={handleChange} value={paymentform.name} name='name' className="w-full p-3 rounded-lg bg-slate-800 text-white" placeholder="Enter Name" />
              <input type="text" onChange={handleChange} value={paymentform.message} name='message' className="w-full p-3 rounded-lg bg-slate-800 text-white" placeholder="Enter Message" />
              <input type="text" onChange={handleChange} value={paymentform.amount} name='amount' className="w-full p-3 rounded-lg bg-slate-800 text-white" placeholder="Enter Amount" />
              <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5  rounded-3xl disabled:from-red-700" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 3 || paymentform.amount?.length < 1}>Pay</button>
            </div>

            <div className="flex gap-2 mt-5 justify-center-safe">
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(1000)}>Pay ₹10</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(2000)}>Pay ₹20</button>
              // <button className="bg-slate-800 p-3 rounded-lg" onClick={() => pay(3000)}>Pay ₹30</button>
               </div>
              */}




        </div>
      </div >
    </>
  )
}

export default PaymentPage
