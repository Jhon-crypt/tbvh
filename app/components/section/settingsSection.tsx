import { BiCog, BiUserCircle } from "react-icons/bi"
import ProfileSettingModal from "../modals/profileSettingsModal"
import AccountSettingsModal from "../modals/accountSettingsModal"
import AccountSecurityModal from "../modals/accountSecurityModal"

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
                                        <label htmlFor="profile_settings" className="btn btn-outline btn-primary">
                                            <BiUserCircle className="text-2xl"/>
                                            Profile Settings
                                        </label>
                                    </li>
                                    <li className=" text-black text-2xl px-4 py-2 bg-white hover:bg-secondary-content transition-all duration-300 ease-in-out border-t">
                                        <label htmlFor="account_settings" className="btn btn-outline btn-secondary">
                                            <BiCog className="text-2xl"/>
                                            Account Settings
                                        </label>
                                    </li>
                                    <li className=" text-black text-2xl px-4 py-2 bg-white hover:bg-neutral-content transition-all duration-300 ease-in-out border-t">
                                        <label htmlFor="account_security" className="btn btn-outline btn-neutral text-black">
                                            <BiUserCircle className="text-2xl"/>
                                            Account Security
                                        </label>
                                    </li>
                                </ul>

                            </div>

                            

                        </div>

                    </div>
                </div>
            </section>

            <ProfileSettingModal />

            <AccountSettingsModal />

            <AccountSecurityModal />

        </>

    )

}