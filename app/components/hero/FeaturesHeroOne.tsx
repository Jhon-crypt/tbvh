import Image from "next/image";

export default function FeaturesHeroOne() {

    return (

        <>

            <section className="pt-28 pb-40 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <h2 className="mb-20 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none text-black">Your voice, Your truth.</h2>
                    <div className="flex flex-wrap xl:items-center -m-8 xl:-m-10">
                        <div className="w-full md:w-1/2 xl:w-auto p-8 xl:p-10">
                            <a className="block overflow-hidden rounded-3xl" href="#">
                                <Image className="w-full transform hover:scale-105 transition ease-in-out duration-1000" src="https://res.cloudinary.com/db7wwc9ex/image/upload/v1688244932/tbvh/features1_strfyq.png" width={500} height={500} alt="Features Hero Two" />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 xl:flex-1 p-8 xl:p-10">
                            <div className="md:max-w-xl">
                                <div className="mb-11 pb-32 border-b">
                                    <h3 className="text-lg font-semibold md:max-w-lg text-black">
                                        We've built TBVH to enable and
                                        empower people to express themselves honestly and receive unvarnished feedback from a community
                                        of anonymous responders.
                                    </h3>
                                </div>
                                <div className="flex flex-wrap -m-8">
                                    <div className="w-auto md:w-1/2 p-8">
                                        <div className="md:max-w-xs">
                                            <div className="inline-block px-2 py-1 font-semibold bg-neutral-content text-neutral rounded-full">
                                                Honest ChatBoxes
                                            </div>
                                            <p className="text-gray-900 font-medium">
                                                Create a chatBox, share it with your friends and get honest feedback.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-auto md:w-1/2 p-8">
                                        <div className="md:max-w-xs">
                                            <div className="inline-block px-2 py-1 font-semibold bg-primary-content text-primary rounded-full">
                                                Anonymous Feedbacks
                                            </div>
                                            <p className="text-gray-900 font-medium">
                                                Receive honest feedback without the fear of judgment.
                                            </p>
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