"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

export default function AccountSettingsModal(){

    const supabase = createClientComponentClient()

    const [loading, setLoading] = useState(false);

    const [alertStatus, setAlertStatus] = useState(false)

    async function handleUpdateEmail(event : any){

        event.preventDefault()

        const data_update = {
            email: String(event.target.email.value)
        }

        try{

            setLoading(true)

            const { data, error } = await supabase.auth.updateUser({
                email: `${data_update.email}`
            })

            if(data){

                setLoading(false)

                setAlertStatus(true)

            }else if(error){

                setLoading(false)

            }

        }catch(error){

            setLoading(false)

            console.log(error)

        }

    }

    function closeAlert(){

        setAlertStatus(false)

    }

    return (

        <>
        
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="account_settings" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg text-center text-secondary">Account Settings</h3>

                    <div className="text-center mt-5 place-content-center">

                        {alertStatus ?

                            <>

                                <div className="flex bg-primary-content rounded-lg p-4 mb-4 text-sm text-primary-focus" role="alert" onClick={closeAlert}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <div>
                                        <span className="font-medium">A confirmation link has been sent to your email</span>.
                                    </div>
                                </div>

                            </>

                            :

                            <>


                            </>

                        }

                        <form onSubmit={handleUpdateEmail}>
                        <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                            <i className="fas fa-map-marker-alt text-lg text-blueGray-400"></i>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Update Email</span>
                                </label>
                                <input id="email" type="email" placeholder="Type here" className="input input-bordered input-secondary bg-white mb-3" required/>
                                {loading ?

                                    <>

                                        <button type="submit" className="btn btn-primary w-full opacity-80 cursor-not-allowed" disabled>Updating</button>

                                    </>

                                    :

                                    <>
                                        <button type="submit" className="btn btn-primary w-full">Update</button>
                                    </>
                                }
                            </div>
                        </div>
                        </form>
                       

                    </div>

                    <div className="modal-action">
                        <label htmlFor="account_settings" className="btn btn-secondary">Close!</label>
                    </div>
                </div>
            </div>

        </>

    )

}