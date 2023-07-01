import { FaPlusCircle } from "react-icons/fa"
import Link from "next/link"

export default function EmptyHero() {

    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="md:max-w-2xl text-center mx-auto">
                    <h5 className="font-heading mb-6 text-3xl lg:text-3xl text-stone-400 font-black tracking-tight">Your Don&apos;t Have Any<br /> Chatbox For Now</h5>
                    <div className="max-w-lg mx-auto">
                        <div className="flex flex-wrap -m-2">

                            <div className="w-full md:flex-1 p-2">

                                <Link href="/create">
                                    <button className="mx-5 py-4 px-6 w-fit text-white font-semibold rounded-xl bg-stone-400 hover:bg-primary">
                                        <div className="flex flex-wrap justify-center items-center -m-1">
                                            <div className="w-auto p-1">
                                                <FaPlusCircle />
                                            </div>
                                            <div className="w-auto p-1">
                                                <span><b>Create Chat Box</b></span>
                                            </div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br /><br /><br /><br /><br />

        </>

    )

}