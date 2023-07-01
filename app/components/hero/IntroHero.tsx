import Image from "next/image";
import { BiLogIn, BiUserCircle } from "react-icons/bi"
import Link from "next/link"

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
                            <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">TBVH lets you find out the truth on people&apos;s thoughts about you and other stuffs going on.</p>
                            <div className="flex flex-wrap -m-2.5 mb-20">
                                <div className="w-full md:w-auto p-2.5">
                                    <div className="block">
                                        <Link href="/login">
                                        <button className="py-4 px-6 w-full text-white font-semibold rounded-xl bg-neutral">
                                            <div className="flex flex-wrap justify-center items-center -m-1">
                                                <div className="w-auto p-1">
                                                    <BiLogIn />
                                                </div>
                                                <div className="w-auto p-1">
                                                    <span>Login Now</span>
                                                </div>
                                            </div>
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full md:w-auto p-2.5">
                                    <div className="block">
                                        <Link href="/signup">
                                        <button className="py-4 px-9 w-full font-semibold rounded-xl bg-secondary text-white" type="button">
                                            <div className="flex flex-wrap justify-center items-center -m-1">
                                                <div className="w-auto p-1">
                                                    <BiUserCircle className="text-white-focus"/>
                                                </div>
                                                <div className="w-auto p-1 text-white">
                                                    <span>Signup Now</span>
                                                </div>
                                            </div>
                                        </button>
                                        </Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <Image className="transform hover:-translate-y-16 transition ease-in-out duration-1000" src="https://res.cloudinary.com/db7wwc9ex/image/upload/v1688244767/tbvh/hero1_gip164.png" width={600} height={700} alt="Hero image" />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}