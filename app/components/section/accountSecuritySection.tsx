export default function AccountSecuritySection(){

    return (

        <>
        
        <section className="py-16 xl:pb-56 bg-white overflow-hidden mb-56">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h3 className=" text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">
                            Account Security
                        </h3>

                        <div className="divider"></div>

                    </div>
                </div>

                <div className="w-full lg:w-4/12 px-4 mx-auto mb-8">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                        <div className="px-6">

                            <div className="text-center">

                                <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                    
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Old Password</span>
                                            <span className="label-text">Update password</span>
                                        </label>
                                        <input type="password" placeholder="Input old password" className="input input-bordered input-neutral bg-white w-full max-w-xs mb-3" />
                                        
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">New Password</span>
                                        </label>
                                        <input type="password" placeholder="Input new password" className="input input-bordered input-neutral bg-white w-full max-w-xs mb-3" />
                                        
                                    </div>

                                </div>

                                <button className="btn btn-neutral w-full mb-10">Update</button>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        
        </>

    )

}