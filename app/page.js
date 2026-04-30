import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base">
        <div className=" font-bold md:text-5xl gap-2 flex justify-center items-center text-2xl ">Get Me a Chai <span><img className="invertImg" src="/tea.gif" alt="Tea Cup" width={88} /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators to fund their Projects!
        </p>

        <p className="text-center md:text-left">
          A place where your fans can buy you a chai. unleach the power of your fans and get your projects funded.
        </p>

        <div className="flex flex-row md:flex-none">
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs px-3 py-2 md:text-sm md:px-5 md:py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs px-3 py-2 md:text-sm md:px-5 md:py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* <div className="text-white container mx-auto pb-30 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans Can Buy You a Chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/man.gif" alt="" width={88} className="bg-slate-400 rounded-full p-2 text-black" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/coin.gif" alt="" width={88} className="bg-slate-400 rounded-full p-2 text-black" />
            <p className="font-bold text-center">Fund Yourself</p>
            <p className="">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/group.gif" alt="" width={88} className="bg-slate-400 rounded-full p-2 text-black" />
            <p className="font-bold text-center">Fans Want To help</p>
            <p className="">Your fans are available for you to help you</p>
          </div>
        </div>
      </div> */}

      <div className="text-white container mx-auto pb-20 pt-10 md:pb-30 md:pt-14">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 md:mb-14 px-4">
          Your Fans Can Buy You a Chai
        </h2>

        <div className="flex flex-col md:flex-row gap-10 md:gap-5 justify-around items-center">

          {/* Item 1 */}
          <div className="item space-y-3 flex flex-col items-center justify-center max-w-xs text-center">
            <img
              src="/man.gif"
              alt=""
              width={88}
              className="bg-slate-400 rounded-full p-2"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-sm sm:text-base">
              Your fans are available for you to help you
            </p>
          </div>

          {/* Item 2 */}
          <div className="item space-y-3 flex flex-col items-center justify-center max-w-xs text-center">
            <img
              src="/coin.gif"
              alt=""
              width={88}
              className="bg-slate-400 rounded-full p-2"
            />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-sm sm:text-base">
              Your fans are available for you to help you
            </p>
          </div>

          {/* Item 3 */}
          <div className="item space-y-3 flex flex-col items-center justify-center max-w-xs text-center">
            <img
              src="/group.gif"
              alt=""
              width={88}
              className="bg-slate-400 rounded-full p-2"
            />
            <p className="font-bold">Fans Want To Help</p>
            <p className="text-sm sm:text-base">
              Your fans are available for you to help you
            </p>
          </div>

        </div>
      </div>


      <div className="bg-white h-1 opacity-10"></div>

      {/* <div className="text-white pb-28 pt-14 ">
       <Link href={"/about"}> <h2 className="text-3xl font-bold text-center mb-14 px-5 md:px-0">Learn More About Us</h2> </Link>
        <video src="/148594-794221537.mp4" className="w-full h-[340px] m-auto  block object-cover aspect-auto " muted autoPlay loop></video>
      </div> */}

      <div className="text-white pb-20 pt-10 md:pb-28 md:pt-14">

        <Link href="/learnaboutus">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 md:mb-14 px-4 md:px-0">
            Learn More About Us
          </h2>
        </Link>

        <video src="/148594-794221537.mp4" className="w-full h-[220px] sm:h-[280px] md:h-[340px]  block object-cover rounded-lg" muted autoPlay loop playsInline></video>
      </div>

    </>
  );
}
