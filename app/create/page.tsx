import CreateHonestBoxForm from "../components/auth/createHonestBoxForm"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function CreateHonestBox(){

    const supabase = createServerComponentClient({
        cookies
    })

    console.log(cookies)

    const {
        data: { session },
      } = await supabase.auth.getSession()
    
      if (!session) {
        // this is a protected route - only users who are signed in can view this route
        redirect('/login')
      }

    return (

        <>
        
            <CreateHonestBoxForm />
        
        </>

    )

}