"use client"

import Link from "next/link"
import React from "react";

export default function SignupForm() {

    const [alert, setAlert] = React.useState(false)

    function handleLogin() {

        setAlert(true);

    }

    /*
    function closeAlert(){

        setAlert(false);

    }
    */

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
                            {alert ?


                                <div className="alert alert-success shadow-lg mb-5">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Check your email for a verification link.</span>
                                    </div>
                                    <div className="flex-none">
                                        <Link href="/welcome"><button className="btn btn-sm bg-neutral">Done</button></Link>
                                    </div>
                                </div>

                                :

                                <></>

                            }
                        </>

                        <form>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-primary" id="signUpInput2-1" type="text" placeholder="First &amp; Last Name" />
                            </label>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-secondary" id="signUpInput2-2" type="text" placeholder="Email Address" />
                            </label>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-accent" id="signUpInput2-3" type="password" placeholder="Create Password" />
                            </label>
                            <button className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-neutral hover:bg-neutral-focus transition ease-in-out duration-200" type="button" onClick={handleLogin}>
                                Sign up now
                            </button>
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