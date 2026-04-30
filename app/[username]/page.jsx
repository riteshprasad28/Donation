
import PaymentPage from "@/components/PaymentPage";
import connectDb from "@/db/connectDB";
import User from "@/models/User";
import { notFound } from "next/navigation";

const Username = async ({ params }) => {
  const {username} = await params
  console.log(username);
  // If the username is not present in database, show a 404 page
  const checkUser = async () => {
    await connectDb()
    let u = await User.findOne({username: username})
    if (!u) {
     return notFound()
    }
  }
  await checkUser()



  return (
    <>

<PaymentPage username={username} />


    {/* 
   <div className="cover w-full relative">
        <img className="object-cover w-full h-[350]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/19.gif?token-hash=6x7o-n9lVDpp1Ia3XHPRwySExQ7W8sdygpeA950IwiE%3D&token-time=1767484800" alt="Cover Picture" />
        <div className="absolute -bottom-8 right-[47%] ">
          <img width={85} height={85} className="rounded-full border-2 border-white" src="/army.png" alt="Profile Pic" />
        </div>
      </div>
      <div className="info flex flex-col gap-2 justify-center items-center my-10 mb-32">
        <div className="font-bold text-lg">
          @{username}
        </div>
        <div className="text-slate-400">
          Creating Animated art for VTT's
        </div>
        <div className="text-slate-400">
          9,719 members . 82 posts . $15,450/release
        </div>
        <div className="payment flex gap-3 w-[80%] mt-5">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-7">
            <h2 className="text-2xl font-bold mb-5">Supporters</h2>
            <ul className="mx-5 text-sm">
              <li className="my-4 flex items-center gap-2">
                <img width={33} src="avatar.gif" alt="User Avtar" />
                <span> Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of 💓 </span>
              </li>
              <li className="my-4 flex items-center gap-2">
                <img width={33} src="avatar.gif" alt="User Avtar" />
                <span> Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of 💓 </span>
              </li>
              <li className="my-4 flex items-center gap-2">
                <img width={33} src="avatar.gif" alt="User Avtar" />
                <span> Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of 💓 </span>
              </li>
             
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-8">
            <h2 className="text-2xl font-bold my-5">Make a payment</h2>
            <div className="flex flex-col gap-2">
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800 text-white" placeholder="Enter Amount" />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800 text-white" placeholder="Enter Message" />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800 text-white" placeholder="Enter Name" />
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5  rounded-3xl">Pay</button>
            </div>

            <div className="flex gap-2 mt-5 justify-center-safe">
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}

export default Username;


export async function generateMetadata({ params }) {
  const { username } = await params;
  return {
    title: `${username} - Get Me A Tea`
  }
}
