"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LooutModal() {

    const router = useRouter()

    const supabase = createClientComponentClient()

    const [loading, setLoading] = useState(false);
    
    const [alertStatus, setAlertStatus] = useState(false)

    async function handleLogout(){

        try {

            setLoading(true)

            const { error } = await supabase.auth.signOut()

            if(error){

                setLoading(false)

                setAlertStatus(false)

            }else{

                setLoading(false)

                setAlertStatus(true)

                router.push('/login')

            }


        }catch(error){

            console.log(error)

        }

    }

    function closeAlert(){

        setAlertStatus(false)

    }

    return (

        <>

            <input type="checkbox" id="logout" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg text-center text-primary">Logout</h3>
                    <p className="py-4 text-center text-black">Are You Sure You Want To Logout</p>

                    {alertStatus ?

                            <>

                                <div className="flex bg-primary-content rounded-lg p-4 mb-4 text-sm text-primary-focus" role="alert" onClick={closeAlert}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <div>
                                        <span className="font-medium">Logged out, redirecting...</span>.
                                    </div>
                                </div>

                            </>

                            :

                            <>


                            </>

                        }

                    <div className="flex justify-center items-center">
                        <div className="flex justify-between">
                            <label htmlFor="logout" className="bg-secondary text-white mr-5 px-4 py-2 rounded hover:bg-secondary-focus">Cancel</label>
                            
                            {loading?

                                <>
                                
                                    <button onClick={handleLogout} className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-focusopacity-80 cursor-not-allowed" disabled>Logging out</button>
                                
                                </>

                                :

                                <>
                                
                                    <button onClick={handleLogout} className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-focus">Log Out</button>

                                </>

                            }
                            
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="logout" className="btn">Close!</label>
                    </div>
                </div>
            </div>


        </>

    )

}

