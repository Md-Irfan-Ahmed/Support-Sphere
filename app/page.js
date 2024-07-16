import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4 px-5 sm:px-0 text-xs sm:text-base">
        <div className="font-bold flex gap-2 text-xl sm:text-5xl justify-center items-center">
          Support Sphere
          <span>
            <Image
              className="bg-black rounded-full max-sm:size-12"
              src="/bulb.gif"
              height={70}
              width={70}
              alt=""
            />
          </span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by yours fans and
          followers. Start Now!
        </p>
        <div className="flex gap-5">
          <Link href={"/login"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start Here
            </span>
          </button>
          </Link>
          <Link href={"/about"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read More
            </span>
          </button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5"></div>
      <div className="text-white container mx-auto pt-12 pb-20 max-sm:px-10">
        <h1 className="text-2xl font-bold text-center mb-12">
          Your Followers can Support You!!!
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              width={75}
              height={70}
              className="p-2 bg-slate-500 rounded-full"
              src="/funding.gif"
              alt=""
            />
            <p className="font-bold pt-2 text-center">Fans want to collaborate</p>
            <p className="text-center">
              {" "}
              Your fans are ready to collaborate with you
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              width={75}
              height={70}
              className="p-2 bg-slate-500 rounded-full"
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold pt-2 text-center">Fans want to contribute</p>
            <p className="text-center">
              {" "}
              Your fans are willing to contribute financially
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              width={75}
              height={70}
              className="p-2 bg-slate-500 rounded-full"
              src="/man.gif"
              alt=""
            />
            <p className="font-bold pt-2 text-center">Fans want to help</p>
            <p className="text-center">
              {" "}
              Your fans are available for you to help you
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-5"></div>
      <div className="text-white container mx-auto pt-12 pb-20 max-sm:px-10">
        <h2 className="text-2xl font-bold text-center mb-12">
          Learn more about us
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              width={75}
              height={70}
              className="p-2 bg-slate-500 rounded-full"
              src="/funding.gif"
              alt=""
            />
            <p className="font-bold pt-2 text-center">Get Support</p>
            <p className="text-center">
              {" "}
              To help creators financially
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              width={75}
              height={70}
              className="p-2 bg-slate-500 rounded-full"
              src="/coin.gif"
              alt=""
            />
            <p className="font-bold pt-2 text-center">Our Aim</p>
            <p className="text-center">
            {" "}
              To help creators continue their passion
            </p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image
              width={75}
              height={70}
              className="p-2 bg-slate-500 rounded-full"
              src="/man.gif"
              alt=""
            />
            <p className="font-bold pt-2 text-center">Who we are</p>
            <p className="text-center">
              {" "}
              We are the pathway for Your Dreams
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
