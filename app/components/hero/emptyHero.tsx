import { FaPlusCircle } from "react-icons/fa"

export default function EmptyHero(){

    return (

        <>
        
        <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="md:max-w-2xl text-center mx-auto">
                    <h3 className="font-heading mb-6 text-5xl lg:text-6xl text-stone-400 font-black tracking-tight">Your Honest Boxes Are Empty For Now</h3>
                    <div className="max-w-lg mx-auto">
                        <div className="flex flex-wrap -m-2">

                            <div className="w-full md:flex-1 p-2">
                                
                                <button className="mx-5 py-4 px-6 w-fit text-white font-semibold rounded-xl bg-stone-400 hover:bg-primary">
                                    <div className="flex flex-wrap justify-center items-center -m-1">
                                        <div className="w-auto p-1">
                                            <FaPlusCircle />
                                        </div>
                                        <div className="w-auto p-1">
                                            <span><b>Create Honest Box</b></span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br /><br /><br /><br /><br />
        
        </>

    )

}