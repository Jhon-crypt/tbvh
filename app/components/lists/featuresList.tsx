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
                                            <img src="flaro-assets/images/features/chat.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="flex-1 p-3">
                                        <h3 className="text-xl font-semibold">A complete UI kit for building your business</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-8">
                            <div className="md:max-w-sm">
                                <div className="flex flex-wrap items-center -m-3">
                                    <div className="w-auto p-3">
                                        <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full">
                                            <img src="flaro-assets/images/features/layers.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-3">
                                        <h3 className="text-xl font-semibold">One-click copy &amp; paste system to make it useful</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-8">
                            <div className="md:max-w-sm">
                                <div className="flex flex-wrap items-center -m-3">
                                    <div className="w-auto p-3">
                                        <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full">
                                            <img src="flaro-assets/images/features/replace.svg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-3">
                                        <h3 className="text-xl font-semibold">Unlimited support from the expert members</h3>
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