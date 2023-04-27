import { BiUserVoice, BiGhost, BiMask } from "react-icons/bi"

export default function FeaturesList() {

    return (

        <>

            <section className="py-20 bg-white overflow-hidden text-black">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -m-8">
                        <div className="w-full md:w-1/3 p-8">
                            <div className="md:max-w-sm">
                                <div className="flex flex-wrap items-center -m-3">
                                    <div className="w-auto p-3">
                                        <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full">
                                            <BiGhost className="text-3xl text-primary"/>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-3">
                                        <h3 className="text-xl font-semibold">Get honest and unfiltered feedback with TBVH's anonymity.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-8">
                            <div className="md:max-w-sm">
                                <div className="flex flex-wrap items-center -m-3">
                                    <div className="w-auto p-3">
                                        <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full">
                                            <BiUserVoice className="text-3xl text-secondary-focus"/>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-3">
                                        <h3 className="text-xl font-semibold">Speak your mind without fear on TBVH's anonymous platform.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-8">
                            <div className="md:max-w-sm">
                                <div className="flex flex-wrap items-center -m-3">
                                    <div className="w-auto p-3">
                                        <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full">
                                            <BiMask className="text-3xl text-accent-focus" />
                                        </div>
                                    </div>
                                    <div className="flex-1 p-3">
                                        <h3 className="text-xl font-semibold">Express your deepest thoughts without revealing your identity.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}