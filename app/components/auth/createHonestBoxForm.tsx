"use client"
import Link from "next/link"
import React from "react";

export default function CreateHonestBoxForm() {

    const [loading, setLoading] = React.useState(false)

    const [alertStatus, setAlertStatus] = React.useState(false)

    const [chatbox_uuid, setChatboxUuid] = React.useState("")

    async function handleHonestBox(event : any){

        setLoading(true)

        event.preventDefault()
        
        const honest_box_data = {
            message: String(event.target.message.value)
        }

        console.log(honest_box_data)

        const response = await fetch('/api/chatbox/createChatBox', {
            method: "POST",
            headers: {
                "Content-Type": "apllication/json",
            },
            body: JSON.stringify(honest_box_data),
        });

        if(response.ok){

            console.log("Chat Box Created")
            const response_data = await response.json()

            

            if(response_data.message === true){

                setLoading(false)

                setAlertStatus(true)

                setChatboxUuid(response_data.chat_box_uuid)

            }else{

                setLoading(false)

                setAlertStatus(false)

            }

            

        }else if(!response.ok){
            setLoading(false)
            console.log("Could Not Create Chat Box")
        }

    }

    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h3 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">
                            Create Honest Box
                        </h3>
                        <p className="mb-12 font-medium text-lg text-gray-600 leading-normal"></p>

                        {alertStatus?
                        
                            <>
                            
                                <div className="alert alert-success shadow-lg mb-3">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="font-medium text-center">Chatbox created, view <Link className="text-primary" href={`/chat/${chatbox_uuid}`}>here</Link></span>
                                    </div>
                                        
                                </div>
                            
                            </>
                            :
                            <>
                            
                            
                            </>
                        
                        }

                        <form onSubmit={handleHonestBox}>
                            <label className="block mb-5">
                            <textarea id="message" className="p-4 w-full h-48 font-medium text-gray-500 placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 resize-none rounded-lg focus:ring focus:ring-indigo-300" placeholder="E.g What do you think about me" required></textarea>
                            </label>

                            {loading? 
                            
                                <>
                                
                                    <button className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-secondary hover:bg-secondary-focus transition ease-in-out duration-200 cursor-not-allowed" type="submit" disabled>
                                        Loading
                                    </button>
                                
                                </>
                                :
                                <>
                                
                                    <button className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-secondary hover:bg-secondary-focus transition ease-in-out duration-200" type="submit">
                                        Create
                                    </button>
                                
                                </>

                            }
                            
                            
                        </form>
                    </div>
                </div>
            </section>

        </>

    )

}