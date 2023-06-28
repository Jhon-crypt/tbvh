"use client"
import { useEffect, useState } from 'react'
import Image from "next/image";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import LoaderSection from './loaderSection';
import { Suspense } from 'react'

export default function ChatBubbleSection(props:
    {
        chatbox_id: any
    }
) {

    const supabase = createClientComponentClient()

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
                                <div className="chat-bubble bg-primary mr-5">{chat.message}</div>
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