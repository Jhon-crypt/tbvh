"use client"
import Image from "next/image";
import LoaderSection from "./loaderSection";
import { BiShareAlt } from "react-icons/bi"
import { BsArrowDownCircle } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import Link from "next/link"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Suspense } from 'react'
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react'

export default function HonestBoxesSection() {

    const [chatboxes, setChatBoxes]: any = useState([])
    const [chatBoxStatus, setChatBoxStatus] = useState(false)
    const [loading, setLoading] = useState(false)
    const supabase = createClientComponentClient()

    useEffect(() => {

        async function getChatBoxes() {

            try {

                setLoading(true)

                const { data }: any = await supabase.auth.getUser()

                //console.log(data)

                //console.log(data.user.id)

                const fetch_chatBoxes = await fetch(`http://localhost:3000/api/chatbox/fetchChatBoxes?userId=${data.user.id}`);

                const fetch_chatbox_data = await fetch_chatBoxes.json()

                //console.log(fetch_chatbox_data)

                if (fetch_chatbox_data) {

                    setLoading(false)

                    setChatBoxStatus(true)

                    setChatBoxes(fetch_chatbox_data.chatBox)

                    console.log(chatboxes)

                } else {

                    setLoading(false)

                    setChatBoxStatus(false)

                }


            } catch (error) {

                console.log(error)

            }



        }

        getChatBoxes()

    }, [])

    return (

        <>


            <section className="pr-10 pl-10 py-16 bg-white overflow-hidden mb-16">

                <div className="text-center max-w-md mx-auto">
                    <h3 className=" text-4xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">
                        Chat Boxes
                    </h3>
                </div>



                <div className="divider text-primary"></div>

                {loading?

                    <LoaderSection />

                    :

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">


                        {chatboxes.map((chat: any) => (
                            <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 w-full md:w-full" style={{
                                overflowWrap: "break-word"
                            }} key={chat.id}>

                                <div className="flex items-start px-4 py-6">
                                    <Image className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={chat.avatar} alt="avatar" width={100} height={100} />
                                    <div className="">
                                        <Link href="/chat">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-lg font-semibold text-gray-900 -mt-1">{chat.fullname} </h2>

                                            </div>

                                            <p className="mt-3 text-gray-700 text-sm">
                                                {chat.message}
                                            </p>
                                        </Link>
                                        <div className="mt-4 flex items-center">

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
                        ))}


                    </div>

                }



            </section >

        </>

    )

}