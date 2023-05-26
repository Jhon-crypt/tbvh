export default function ProfileSettingSection() {

    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden mb-56">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h3 className=" text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">
                            Profile Settings
                        </h3>

                        <div className="divider"></div>

                    </div>
                </div>

                <div className="w-full lg:w-4/12 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                            
                            <div className="text-center mt-5">
                                
                                <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Update Full Name</span>
                                        </label>
                                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary bg-white w-full max-w-xs mb-3" />
                                        <button className="btn btn-secondary w-full">Update</button>
                                    </div>
                                </div>
                                <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Update About</span>
                                        </label>
                                        <textarea className="textarea input-bordered input-neutral textarea-neutral mb-3 bg-white" placeholder="Bio"></textarea>
                                        <button className="btn btn-neutral w-full mb-3">Update</button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>

            </section>



        </>

    )
    1
}