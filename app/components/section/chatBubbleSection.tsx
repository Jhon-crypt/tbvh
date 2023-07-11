"use client"
import { useEffect, useState } from 'react'
import Image from "next/image";
import LoaderSection from './loaderSection';
import { createClient } from '@supabase/supabase-js'

export default function ChatBubbleSection(props:
    {
        chatbox_id: any
    }
) {


    const supabase = createClient('https://vgcabbxadiekjzzjamux.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnY2FiYnhhZGlla2p6emphbXV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4MzI0NDgsImV4cCI6MTk5OTQwODQ0OH0.pFj621LtTxLq9qZlrZFnOk_ol_RKAYRYiVL0qOHDC9Q')

    const [loading, setLoading] = useState(false)

    const [chats, setChats]: any = useState([])

    useEffect(() => {

        async function getChats() {

            try {

                setLoading(true)

                let { data: chats, error }: any = await supabase
                    .from("honest_box_messages")
                    .select("*")
                    .eq("chatbox_uuid", `${props.chatbox_id}`)
                    .order('id', { ascending: false })

                if (chats) {

                    setLoading(false)

                    setChats(chats)

                } else {

                    setLoading(false)

                    console.log(error)

                }

            } catch (error) {

                console.log(error)
                                                                                                
            }

        }

        getChats()

    }, [])

    useEffect(() => {

        const chatsListener = supabase
            .channel('any')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'honest_box_messages' }, payload => {
                const newChat = payload.new;
                setChats((oldChat: any) => {
                    const newChats = [...oldChat, newChat];
                    newChats.sort((a, b) => b.id - a.id);
                    return newChats;
                });
            })
            .subscribe()

        return () => {

            supabase.removeChannel(chatsListener)

        };


    }, [])

    return (

        <>

            <section className="mt-4">

                {loading ?

                    <LoaderSection />

                    :

                    <>
                        {chats.map((chat: any) => (

                            <div className="chat chat-start" key={chat.id}>
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <Image src={chat.avatar} alt="avatar" width={50} height={50} />
                                    </div>
                                </div>
                                <div className="chat-header text-black">
                                    {chat.username}
                                </div>
                                <div className="chat-bubble bg-primary" style={{ overflowWrap : "break-word" }}>{chat.message}</div>
                                <div className="chat-footer opacity-50">
                                    Delivered
                                </div>
                            </div>

                        ))}

                    </>

                }


            </section>

        </>

    )

}