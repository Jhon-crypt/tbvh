import Link from "next/link"

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

                                <Link href="profileSetting">
                                <div className="collapse border border-secondary bg-white rounded-box shadow-xl text-black">
                                    <div className="collapse-title text-xl font-medium">
                                        Account Settings
                                    </div>
                                </div>
                                </Link>

                            </div>

                            <div className="divider"></div>

                            <div className="grid place-content-center mb-3">

                                <div className="collapse border border-neutral bg-white rounded-box shadow-xl text-black">
                                    <div className="collapse-title text-xl font-medium">
                                        Account Security
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