import Image from "next/image";

export default function ProfileSection() {

    return (

        <>

            <section className="pt-16 bg-blueGray-50 mb-16">
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="">
                                        <Image alt="avatar" src="/avatar.jpg" className="shadow-xl rounded-full h-auto align-middle border-none  max-w-150" width={250} height={250}/>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="text-center mt-12">
                                <h2 className="text-2xl font-semibold leading-normal mb-2 text-neutral">
                                    <b>Jenna Stones</b>
                                </h2>
                                <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    @username2233667
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-400">
                                            An artist of considerable range, Jenna the name take
                                        </p>
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