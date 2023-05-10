export default function AccountSettingsSection() {

    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden mb-56">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h3 className=" text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">
                            Account Settings
                        </h3>

                        <div className="divider"></div>

                    </div>
                </div>

                <div className="w-full lg:w-4/12 px-4 mx-auto mb-8">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                        <div className="px-6">

                            <div className="text-center">

                                <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Update Email</span>
                                        </label>
                                        <input type="email" placeholder="Email" className="input input-bordered input-secondary bg-white w-full max-w-xs mb-3" />
                                        <button className="btn btn-secondary w-full mb-10">Update</button>
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