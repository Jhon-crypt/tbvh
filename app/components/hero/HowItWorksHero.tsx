import Image from "next/image";

export default function HowItWorksHero() {

    return (

        <>

            <section className="py-32 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap lg:items-center -m-8">
                        <div className="w-full md:w-1/2 p-8">
                            <Image className="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000 rounded-md" width={500} height={500} src="https://res.cloudinary.com/db7wwc9ex/image/upload/v1688245070/tbvh/how_jkaesx.png" alt="How It Works" />
                        </div>
                        <div className="w-full md:w-1/2 p-8">
                            <h2 className="mb-20 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg text-black">How TBVH works it shit out.</h2>
                            <div className="flex flex-wrap -m-1.5">
                                <div className="w-full p-1.5">
                                    <div className="flex flex-wrap -m-6">
                                        <div className="w-auto p-6">
                                            <div className="relative -left-1 mb-3 w-10 h-10 text-lg text-white font-bold bg-primary rounded-full">
                                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-6">
                                            <div className="md:max-w-xs">
                                                <h3 className="mb-3 text-2xl font-semibold leading-snug text-primary">Create Profile</h3>
                                                <p className="text-gray-700 font-medium leading-relaxed">Create a profile by signing up with TBVH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-1.5">
                                    <div className="flex flex-wrap -m-6">
                                        <div className="w-auto p-6">
                                            <div className="relative -left-1 mb-3 w-10 h-10 text-lg text-white font-bold bg-secondary rounded-full">
                                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">2</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-6">
                                            <div className="md:max-w-xs">
                                                <h3 className="mb-3 text-2xl font-semibold leading-snug text-secondary">Start A ChatBox</h3>
                                                <p className="text-gray-700 font-medium leading-relaxed">To recieve anonymous responses, create an honest chat box</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-1.5">
                                    <div className="flex flex-wrap -m-6">
                                        <div className="w-auto p-6">
                                            <div className="relative -left-1 mb-3 w-10 h-10 text-lg text-white font-bold bg-accent rounded-full">
                                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">3</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 p-6">
                                            <div className="md:max-w-xs">
                                                <h3 className="mb-3 text-2xl font-semibold leading-snug text-accent">Share Your ChatBox</h3>
                                                <p className="text-gray-700 font-medium leading-relaxed">To get people's opinion on your chatbox, you should share the link accross your socials</p>
                                            </div>
                                        </div>
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

