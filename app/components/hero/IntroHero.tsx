import Image from "next/image";


export default function IntroHero() {

    return (

        <>

            <div className="overflow-hidden pt-16 bg-white mb-10">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <div className="inline-block mb-6 px-2 py-1 font-semibold bg-primary-content text-primary rounded-full">
                                <div className="flex flex-wrap items-center -m-1">
                                    <div className="w-auto p-1"><a className="text-sm" href="">👋 To Be Very Honest</a></div>
                                    <div className="w-auto p-1">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none text-black">TBVH: Be Honest, Speak Freely Now.</h1>
                            <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">TBVH lets you find out the truth on people's thoughts about you and other stuffs going on.</p>
                            <div className="flex flex-wrap -m-2.5 mb-20">
                                <div className="w-full md:w-auto p-2.5">
                                    <div className="block">
                                        <button className="py-4 px-6 w-full text-white font-semibold rounded-xl bg-neutral">
                                            <div className="flex flex-wrap justify-center items-center -m-1">
                                                <div className="w-auto p-1">
                                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-1">
                                                    <span>Login Now</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto p-2.5">
                                    <div className="block">
                                        <button className="py-4 px-9 w-full font-semibold rounded-xl bg-secondary " type="button">
                                            <div className="flex flex-wrap justify-center items-center -m-1">
                                                <div className="w-auto p-1">
                                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-1 text-white">
                                                    <span>Signup Now</span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <Image className="transform hover:-translate-y-16 transition ease-in-out duration-1000" src="/hero1.png" width={600} height={700} alt="Hero image" />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}