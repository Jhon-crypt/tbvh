import { BiLogIn} from "react-icons/bi"
import Link from "next/link"

export default function WelcomeHero() {

    return (

        <>

            <div className="px-8 py-20 bg-white overflow-hidden rounded-3xl">
                <div className="md:max-w-2xl text-center mx-auto"><span className="inline-block mb-3 text-sm text-neutral font-bold uppercase tracking-widest">Your voice, your truth</span>
                    <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-black font-black tracking-tight">Welcome to the world of freedom</h1>
                    <div className="max-w-lg mx-auto">
                        <div className="flex flex-wrap -m-2">

                            <div className="w-full md:flex-1 p-2">
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