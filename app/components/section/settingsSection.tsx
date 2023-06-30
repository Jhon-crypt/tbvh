import Link from "next/link"
import { BiCog, BiUserCircle } from "react-icons/bi"

export default function SettingsSection() {

    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden mb-56">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h3 className=" text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">
                            Settings
                        </h3>

                        <div className="divider"></div>

                        <div>

                            <div className="place-content-center">

                                <ul className=" overflow-hidden shadow-md my-3">
                                    <li className=" text-black text-2xl px-4 py-2 bg-white hover:bg-primary-content transition-all duration-300 ease-in-out border-t">
                                        <button className="btn btn-outline btn-primary">
                                            <BiUserCircle className="text-2xl"/>
                                            Profile Settings
                                        </button>
                                    </li>
                                    <li className=" text-black text-2xl px-4 py-2 bg-white hover:bg-secondary-content transition-all duration-300 ease-in-out border-t">
                                        <button className="btn btn-outline btn-secondary">
                                            <BiCog className="text-2xl"/>
                                            Account Settings
                                        </button>
                                    </li>
                                    <li className=" text-black text-2xl px-4 py-2 bg-white hover:bg-primary-content transition-all duration-300 ease-in-out border-t">
                                        <button className="btn btn-outline btn-primary">
                                            <BiUserCircle className="text-2xl"/>
                                            Account Security
                                        </button>
                                    </li>
                                </ul>

                            </div>

                            {/*
                            <div className="grid place-content-center mb-3">

                                
                                <Link href="profileSetting">
                                <div className="collapse border border-primary bg-white rounded-box shadow-xl text-black">
                                    <div className="collapse-title text-xl font-medium">
                                        Profile Settings
                                    </div>
                                </div>
                                </Link>

                            </div>

                            <div className="divider"></div>

                            <div className="grid place-content-center mb-3">

                                <Link href="accountSetting">
                                <div className="collapse border border-secondary bg-white rounded-box shadow-xl text-black">
                                    <div className="collapse-title text-xl font-medium">
                                        Account Settings
                                    </div>
                                </div>
                                </Link>

                            </div>

                            <div className="divider"></div>

                            <div className="grid place-content-center mb-3">

                                <Link href="accountSecurity">
                                <div className="collapse border border-neutral bg-white rounded-box shadow-xl text-black">
                                    <div className="collapse-title text-xl font-medium">
                                        Account Security
                                    </div>
                                </div>
                                </Link>

                            </div>
                            */}

                        </div>

                    </div>
                </div>
            </section>

        </>

    )

}