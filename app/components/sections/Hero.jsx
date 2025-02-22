import React from "react";
export default function index() {
    const goto = () => {
        window.location.href = "https://www.instagram.com/kohinoor_watches.__/";
    }
    return (
        <div>
            <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9   bg-[#f2f0ef]">
                <div className="relative rounded-md">
                    <img src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="city view" className="w-full h-full rounded-md  object-cover  absolute sm:block hidden" />
                    <img src="https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="city view" className="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                    <div className="text-xl relative z-20 bg-gradient-to-r from-[#F8F8F8] to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                        <div>
                        <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-[#7b3911] sm:w-auto w-64">Own a Piece of Time!</h1>
<p className="text-lg leading-6 text-black xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4">
    Discover vintage and rare timepieces that tell stories of craftsmanship, history, and timeless elegance—only at Kohinoor Watches.
</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <button onClick={goto} className="text-base font-medium leading-4 text-[#f2f0ef] bg-[#7b3911] sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-[#7a4d2a] focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
