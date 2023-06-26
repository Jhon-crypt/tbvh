"use client"

import Link from "next/link"
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from "react";

export default function SignupForm() {

    const supabase = createClientComponentClient()

    const [loading, setLoading] = React.useState(false)

    const [signupStatus, setSignupStatus] = React.useState(false)


    async function handleSubmit(event: any) {

        event.preventDefault()

        setLoading(true)

        const user = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            password: String(event.target.password.value)
        }

        console.log(user)

        try {

            const { data, error } = await supabase.auth.signUp({
                email: `${user.email}`,
                password: `${user.password}`,
                options: {
                    data: {

                        full_name: `${user.name}`,
                        avatar: "https://res.cloudinary.com/db7wwc9ex/image/upload/v1687170435/tbvh/tbvh-avatars_rzlwmb.jpg",

                    }
                }
            })

            if (error) {

                setLoading(false)

                setSignupStatus(false)

                console.log("Error while signing Up")

            } else {

                setLoading(false)

                setSignupStatus(true)

                console.log("Submitted form")

                console.log(data)

            }


        } catch (error) {

            console.log(error)

        }

    }

    function closeAlert() {

        setSignupStatus(false)

    }


    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">Join for free</h2>
                        <p className="mb-12 font-medium text-lg text-gray-600 leading-normal">
                            Welcome to TBVH! To get started, please sign up for an account
                        </p>

                        <>
                            {signupStatus ?

                                <>
                                    <div className="alert alert-success shadow-lg mb-3">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span className="font-medium">Signup successful, We have sent a confirmation email to the email address you provided.</span>
                                        </div>
                                        <div className="flex-none">
                                            <button className="btn btn-sm" onClick={closeAlert}>Close</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <>

                                </>

                            }
                        </>

                        <form onSubmit={handleSubmit}>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-primary" id="name" type="text" placeholder="First &amp; Last Name" required />
                            </label>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-secondary" id="email" type="text" placeholder="Email Address" required />
                            </label>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-accent" id="password" type="password" placeholder="Create Password" required minLength={6} />
                            </label>

                            <>
                                {loading ?
                                    <>

                                        <button type="submit" className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-neutral hover:bg-neutral-focus transition ease-in-out duration-200 opacity-50 cursor-not-allowed" disabled>
                                            Signing You Up
                                        </button>

                                    </>

                                    :

                                    <>

                                        <button type="submit" className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-neutral hover:bg-neutral-focus transition ease-in-out duration-200 ">
                                            Sign up now
                                        </button>

                                    </>
                                }
                            </>


                            <p className="font-medium">
                                <span>Already have an account?</span>
                                <Link className="text-indigo-600 hover:text-indigo-700" href="/login" >Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>

        </>

    )

}