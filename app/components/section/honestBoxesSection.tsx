"use client"
import Image from "next/image";
import { BsChatDots } from "react-icons/bs"
import { BiGhost, BiShareAlt } from "react-icons/bi"
import { BsArrowDownCircle } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import Link from "next/link"


export default function HonestBoxesSection() {

    return (

        <>

            <section className="pr-10 pl-10 py-16 bg-white overflow-hidden mb-16">

                <div className="text-center max-w-md mx-auto">
                    <h3 className=" text-4xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">
                        Chat Boxes
                    </h3>
                </div>

                <div className="divider text-primary"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">

                    <div>

                        <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 w-full md:w-full" style={{
                            overflowWrap: "break-word"
                        }}>

                            <div className="flex items-start px-4 py-6">
                                <Image className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="/avatar.jpg" alt="avatar" width={100} height={100} />
                                <div className="">
                                    <Link href="/chat">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">Brad Adams </h2>
                                            <small className="text-sm text-gray-700">22h ago</small>
                                        </div>
                                        <p className="text-gray-700">@user73477666 </p>
                                        <p className="mt-3 text-gray-700 text-sm">
                                            What do you think about the folks in Emerald Hostel
                                        </p>
                                    </Link>
                                    <div className="mt-4 flex items-center">
                                        <div className="flex text-gray-700 text-sm mr-3 hover:text-primary">
                                            <BsChatDots className="mr-1" />
                                            <span>12</span>
                                        </div>
                                        <div className="flex text-gray-700 text-sm mr-8 hover:text-primary">
                                            <BiGhost className="mr-1" />
                                            <span>8</span>
                                        </div>
                                        <div className="dropdown dropdown-bottom dropdown-end">

                                            <div tabIndex={0} className="flex text-gray-700 text-sm mr-4 hover:text-primary">
                                                <BsArrowDownCircle className="mr-1" />
                                                <span>options</span>
                                            </div>
                                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 text-black">
                                                <li><a><BiShareAlt className="mr-4" />Share</a></li>
                                                <li><a><AiOutlineDelete className="mr-4" />Delete</a></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section >

        </>

    )

}