"use client"

export default function ChatForm(props:
    {
        chatbox_id: any
    }
) {

    async function handleChatMessage(event: any) {

        event.preventDefault()

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

        } else if (!response.ok) {

            console.log("Could Not Create Chat Message")

        }

    }

    return (

        <>

            <form className="mt-7" onSubmit={handleChatMessage}>
                <textarea id="message" className="textarea textarea-primary w-full text-black bg-white" placeholder="Comment" rows={2}></textarea>
                <button type="submit" className="mt-3 ml-2 rounded-lg bg-primary p-2 text-white hover:bg-primary-focus">
                    Comment
                </button>
            </form>

        </>

    )

}