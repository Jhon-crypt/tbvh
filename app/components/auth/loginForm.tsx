"use client"

import Link from "next/link"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from "react";

export default function LoginForm() {

    const supabase = createClientComponentClient()

    const [loading, setLoading] = React.useState(false)

    const [loginStatus, setLoginStatus] = React.useState(true)

    const [redirectAlertStatus, setRedirectAlertStatus] = React.useState(false)

    async function handleLogin(event: any) {

        setLoading(true)

        event.preventDefault()

        const login_data = {
            email: String(event.target.email.value),
            password: String(event.target.password.value)
        }

        //console.log(login_data)

        try {

            const { data, error }: any = await supabase.auth.signInWithPassword({
                email: `${login_data.email}`,
                password: `${login_data.password}`,
            })

            if (error) {

                setLoading(false)

                console.log("Wrong email or password")

                setLoginStatus(false)

                setRedirectAlertStatus(false)

            } else {

                setLoading(false)

                console.log("User Logged In")

                setLoginStatus(true)

                setRedirectAlertStatus(true)

            }

        } catch (error) {

            console.log(error)

        }


    }

    function closeAlert() {

        setLoginStatus(true)

    }

    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">Welcome Back</h2>
                        <p className="mb-12 font-medium text-lg text-gray-600 leading-normal"></p>

                        <>

                            {loginStatus ?

                                <>



                                </>

                                :

                                <>

                                    <div className="alert alert-error shadow-lg mb-3">
                                        <div>
                                            <svg onClick={closeAlert} xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="font-medium">Wrong email and password combination.</span>
                                        </div>
                                    </div>

                                </>

                            }

                        </>

                        <>

                            {redirectAlertStatus ?

                                <>

                                    <div className="alert alert-success shadow-lg mb-3">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="font-medium">Login successful, click <Link className="text-primary" href="/home">here</Link> to continue</span>


                                    </div>

                                </>

                                :

                                <>


                                </>

                            }

                        </>

                        <form onSubmit={handleLogin}>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-primary" id="email" type="email" placeholder="Email address" required />
                            </label>
                            <label className="relative block mb-5">
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2"><a className="text-sm text-indigo-600 hover:text-indigo-700 font-medium" href="#">Forgot Password?</a></div>
                                <input className="px-4 pr-36 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-secondary" id="password" type="password" placeholder="Password" required minLength={6} />
                            </label>

                            <>

                                {loading ?

                                    <>

                                        <button className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-neutral hover:bg-neutral-focus transition ease-in-out duration-200 opacity-50 cursor-not-allowed" disabled type="submit">
                                            Loading
                                        </button>

                                    </>

                                    :

                                    <>

                                        <button className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-neutral hover:bg-neutral-focus transition ease-in-out duration-200" type="submit">
                                            Sign In
                                        </button>

                                    </>

                                }

                            </>

                            <p className="font-medium">
                                <span>Don’t have an account?</span>
                                <Link className="text-indigo-600 hover:text-indigo-700" href="/signup">Create free account</Link>
                            </p>
                        </form>

                    </div>
                </div>
            </section>

        </>

    )

}