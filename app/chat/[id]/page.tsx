import ChatSection from "@/app/components/section/chatSection"

export default function Chat({ params }: { params: { id: string } }){

    return (

        <>
        
            <h1>{params.id}</h1>

            <ChatSection id={params.id}/>
        
        </>

    )

}