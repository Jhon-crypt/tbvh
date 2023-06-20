import ChatSection from "@/app/components/section/chatSection"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import getChatHead from "@/app/lib/getChatHeads"

type Params = {
    params: {
        chatId: string
    }
}

export default async function Chat({params: { chatId }}: Params){

    const supabase = createServerComponentClient({
        cookies
    })

    const {
        data: { session },
      } = await supabase.auth.getSession()
    
      if (!session) {
        // this is a protected route - only users who are signed in can view this route
        redirect('/login')
      }

      //const chatBoxes: Promise<Chatbox> = getChatHead(chatId)

    return (

        <>

            
        
        </>

    )

}