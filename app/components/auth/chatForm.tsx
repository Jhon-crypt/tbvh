"use client"
import { useState } from 'react'

export default function ChatForm(props:
    {
        chatbox_id: any
    }
) {

    const [loading, setLoading] = useState(false)

    const [alertStatus, setAlertStatus] = useState(false)

    async function handleChatMessage(event: any) {

        event.preventDefault()

        setLoading(true)

        try {

            const chat_message = {
                message: String(event.target.message.value),
                chat_box_id: props.chatbox_id
            }

            console.log(chat_message)

            const response = await fetch('/api/chat/createChatMessage', {
                method: "POST",
                headers: {
                    "Content-Type": "apllication/json",
                },
                body: JSON.stringify(chat_message),
            });

            if (response.ok) {

                console.log("Chat Message Created")

                const response_data = await response.json()

                console.log(response_data.message)

                if (response_data.message === true) {

                    setLoading(false)

                    setAlertStatus(true)

                } else {

                    setLoading(false)

                    setAlertStatus(false)

                }  

            } else if (!response.ok) {

                setLoading(false)

                console.log("Could Not Create Chat Message")

            }

        } catch (error) {

            setLoading(false)

            console.log(error)

        }

    }

    function closeAlert() {

        setAlertStatus(false)

    }

    return (

        <>

            <form className="mt-7" onSubmit={handleChatMessage}>

                {alertStatus ?

                    <>
                        <div className="flex bg-primary-content rounded-lg p-4 mb-4 text-sm text-primary-focus" role="alert" onClick={closeAlert}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                                <span className="font-medium">Comment posted</span>.
                            </div>
                        </div>
                    </>

                    :

                    <></>

                }

                <textarea id="message" className="textarea textarea-primary bg-white text-black" placeholder="Comment" required></textarea><br />
                {loading ?
                    <>
                        <button type="submit" className="mt-3 ml-2 rounded-lg bg-primary p-2 text-white hover:bg-primary-focus opacity-50 cursor-not-allowed" disabled>
                            Posting comment
                        </button>
                    </>
                    :
                    <>
                        <button type="submit" className="mt-3 ml-2 rounded-lg bg-primary p-2 text-white hover:bg-primary-focus">
                            Comment
                        </button>
                    </>
                }

            </form>

        </>

    )

}