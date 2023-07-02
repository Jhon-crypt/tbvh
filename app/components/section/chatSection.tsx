"use client"

import Image from "next/image";
import { BiShareAlt } from "react-icons/bi"
import ChatForm from "../auth/chatForm";
import ChatBubbleSection from "./chatBubbleSection";

export default function ChatSection(props:
    {
        message: string, fullname: string, avatar: string, chatbox_id: string
    }
) { 



    return (
        
        <>

            <section className="pr-10 pl-10 py-16 bg-white overflow-hidden mb-16">

                <div className="flex bg-white rounded-lg mx-4 md:mx-auto my-10 w-full md:w-full justify-center" style={{
                    overflowWrap: "break-word"
                }}>
                    <div className="flex items-start px-4 py-6">
                        <Image className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={props.avatar} alt="avatar" width={100} height={100} />
                        <div className="">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900 -mt-1">{props.fullname} </h2>
                                <small className="text-sm text-gray-700"></small>
                            </div>
                            <p className="text-gray-700"></p>
                            <p className="mt-3 text-gray-700 text-sm">
                                {props.message}
                            </p>
                            <div className="mt-4 flex items-center">

                                <label htmlFor="my_modal_6" className="btn btn-outline btn-primary btn-sm">


                                    <BiShareAlt />
                                    Share

                                </label>
                            </div>

                            <ChatForm chatbox_id={props.chatbox_id} />

                            <div className="divider"></div>

                            <ChatBubbleSection chatbox_id={props.chatbox_id} />

                        </div>
                    </div>
                </div>

            </section>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white">

                    <h3 className="font-bold text-2xl text-center mb-3"><b>
                        <span className="text-primary">T</span>
                        <span className="text-secondary">B</span>
                        <span className="text-accent">V</span>
                        <span className="text-neutral">H</span>
                    </b></h3>

                    <div className="flex bg-neutral-content rounded-lg p-4 mb-7 text-sm text-neutral-focus" role="alert">
                        <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div>
                            <span className="font-medium">Screenshot and copy the link below, paste the link anywhere with the screenshot and share</span>.
                        </div>
                    </div>

                    <div className="flex items-start px-4 py-6 mb-7">
                        <Image className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={props.avatar} alt="avatar" width={100} height={100} />
                        <div className="">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900 -mt-1">{props.fullname} </h2>
                                <small className="text-sm text-gray-700"></small>
                            </div>
                            <p className="text-gray-700"></p>
                            <p className="mt-3 text-gray-700 text-sm">
                                {props.message}
                            </p>
                        </div>
                    </div>

                    <div className="flex bg-neutral-content rounded-lg p-4 mb-7 text-sm text-neutral-focus" role="alert">
                        <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <div>
                            <span className="font-medium">Copy this : Comment here https://tbvh.vercel.app/chat/9bd10ad4-a26f-4c0a-93be-cfbc561e661e</span>
                        </div>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn btn-primary">Close</label>
                    </div>
                </div>
            </div>

        </>

    )

}