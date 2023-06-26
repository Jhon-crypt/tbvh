import ChatSection from "@/app/components/section/chatSection"
import { Suspense } from 'react'
import LoaderSection from "@/app/components/section/loaderSection"

export default async function Chat({ params }: { params: { id: any } }){

      const fetch_chatbox = await fetch(`http://localhost:3000/api/chat/fetchChatHead?id=${params.id}`)

      const chatbox_response = await fetch_chatbox.json()

      console.log(chatbox_response)

    return (

        <>

            

                <ChatSection 
                    message={chatbox_response.chatBox.message} 
                    fullname={chatbox_response.chatBox.fullname} 
                    avatar={chatbox_response.chatBox.avatar}
                    chatbox_id={chatbox_response.chatBox.chat_box_uuid}
                />

            
                       
        </>

    )

}