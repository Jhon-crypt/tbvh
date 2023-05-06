import Image from "next/image";

export default function ChatBubbleSection() {

    return (

        <>

            <section className="mt-4">

                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image src="/avatar.jpg" alt="avatar" width={50} height={50} />
                        </div>
                    </div>
                    <div className="chat-header">
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">You were the Chosen One!</div>
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>

            </section>

        </>

    )

}