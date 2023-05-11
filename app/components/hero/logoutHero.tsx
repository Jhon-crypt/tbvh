import { BiLogIn } from "react-icons/bi"
import Link from "next/link"

export default function LogoutHero() {

    return (

        <>

            <div className="px-8 py-20 bg-white overflow-hidden">
                <div className="md:max-w-2xl text-center mx-auto">
                    <h2 className="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n 
                    leading-none text-grey-400">
                        You Have Been Logged Out
                    </h2>
                    <div className="max-w-lg mx-auto">
                        <div className="flex flex-wrap -m-2">

                            <div className="w-full md:flex-1 p-2 mt-5">
                                <Link href="/login">
                                    <button className="py-4 px-6 w-full text-white font-semibold rounded-xl bg-primary">
                                        <div className="flex flex-wrap justify-center items-center -m-1">
                                            <div className="w-auto p-1">
                                                <BiLogIn />
                                            </div>
                                            <div className="w-auto p-1">
                                                <span>Login Now</span>
                                            </div>
                                        </div>
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}