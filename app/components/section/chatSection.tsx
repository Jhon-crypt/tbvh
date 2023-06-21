import Image from "next/image";
import { BiShareAlt } from "react-icons/bi"
import { BsArrowDownCircle } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import ChatForm from "../auth/chatForm";
import ChatBubbleSection from "./chatBubbleSection";

export default function ChatSection(props: 
    {
        message: string, fullname: string, avatar: string
    }
) {

   

    return (
        //{props.id}
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

                            <ChatForm />

                            <div className="divider"></div>

                            <ChatBubbleSection />

                        </div>
                    </div>
                </div>

            </section>

        </>

    )

}