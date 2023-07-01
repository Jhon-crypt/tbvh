"use client"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect } from 'react'

export default function ForgotPasswordModal() {

    const supabase = createClientComponentClient()

    const [loading, setLoading] = useState(false);

    //password reset mail alert
    const [prmAlert, setPrmAlertStatus] = useState(false)

    const [resetPasswordAlert, setPasswordResetAlertStatus] = useState(false)

    const [resetStateChange, setResetStateChange] = useState(false)


    async function passwordResetMail(event: any) {

        setLoading(true)

        event.preventDefault()

        const data_update = {
            email: String(event.target.email.value)
        }

        try {

            const { data, error } = await supabase.auth
                .resetPasswordForEmail(`${data_update.email}`)

            if (data) {

                setLoading(false)

                setPrmAlertStatus(true)

            } else if (error) {

                setLoading(false)

                setPrmAlertStatus(false)

            }

        } catch (error) {

            console.log(error)

        }

    }

    

    useEffect(() => {
        supabase.auth.onAuthStateChange(async (event, session) => {
          if (event == "PASSWORD_RECOVERY") {

            async function handleResetPassword(event: any) {

                setLoading(true)
        
                event.preventDefault()
        
                const password_update = {
                    password: String(event.target.password.value)
                }
        
                try {
        
                    const { data, error } = await supabase.auth
                    .updateUser({ password: `${password_update.password}` })
        
                    if(data){
        
                        setLoading(false)
        
                        setPasswordResetAlertStatus(true)
        
                        setResetStateChange(true)
        
                    }else if(error){
        
                        setLoading(false)
        
                    }
        
                }catch(error){
        
                    console.log(error)
        
                }
        
            }
        
        
            function closeAlert() {
        
                setPrmAlertStatus(false)
        
            }
            
          }
        })
      }, [])

    return (

        <>

            <input type="checkbox" id="forgot_password" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg text-center text-primary">Forgot Password</h3>

                    {prmAlert ?

                        <>

                            <div className="flex bg-primary-content rounded-lg p-4 mb-4 text-sm text-primary-focus" role="alert" onClick={closeAlert}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div>
                                    <span className="font-medium">A password reset link has been sent to your Email, click the link and come back here!</span>
                                </div>
                            </div>

                        </>

                        :

                        <>

                            <div className="flex bg-primary-content rounded-lg p-4 mb-4 text-sm text-primary-focus" role="alert" onClick={closeAlert}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div>
                                    <span className="font-medium">Error!, Email does not exist in TBVH</span>
                                </div>
                            </div>

                        </>

                    }

                    {resetStateChange ?

                        <>

                            <p className="py-4 text-center text-black">Enter your new password</p>
                            <form onSubmit={handleResetPassword}>
                                <label className="label">
                                    <span className="label-text">Enter new password</span>
                                </label>
                                <input id="passwword" type="password" placeholder="Type here" className="input input-bordered input-secondary bg-white mb-3 w-full" required minLength={6}/>

                                {loading?

                                    <>

                                        <button className="btn btn-wide btn-primary w-full opacity-50 cursor-not-allowed" disabled>Resetting...</button>
                                    
                                    </>

                                    :

                                    <>
                                    
                                        <button className="btn btn-wide btn-primary w-full">Reset Password</button>
                                    
                                    </>

                                }
                                
                            </form>

                        </>

                        :

                        <>

                            <p className="py-4 text-center text-black">Enter your email button below to reset your password</p>
                            <form onSubmit={passwordResetMail}>
                                <label className="label">
                                    <span className="label-text">Enter email</span>
                                </label>
                                <input id="email" type="email" placeholder="Type here" className="input input-bordered input-secondary bg-white mb-3 w-full" required />

                                {loading?

                                    <>
                                    
                                        <button className="btn btn-wide btn-primary w-full opacity-50 cursor-not-allowed" disabled>Sending Mail</button>
                                    
                                    </>

                                    :

                                    <>
                                    
                                        <button className="btn btn-wide btn-primary w-full">Send Password Reset Mail</button>
                                    
                                    </>

                                }

                                <button className="btn btn-wide btn-primary w-full">Send Password Reset Mail</button>
                            </form>

                        </>

                    }


                    <div className="modal-action">
                        <label htmlFor="forgot_password" className="btn">Close!</label>
                    </div>
                </div>

            </div>


        </>

    )

}