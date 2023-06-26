"use client"
import Image from "next/image";
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import LoaderSection from "./loaderSection";

export default function ProfileSection() {

    const [loading, setLoading] = useState(false)
    const [fullname, setFullname] = useState("")

    const supabase = createClientComponentClient()

    useEffect(() => {

        async function getProfile() {

            try {

                setLoading(true)

                const { data }: any = await supabase.auth.getUser()

                if (data) {

                    setLoading(false)

                    setFullname(data.user.user_metadata.full_name)

                } else {

                    setLoading(false)

                }

            } catch (error) {

                console.log(error)

            }

        }

        getProfile()

    }, [])

    return (

        <>

            <section className="pt-16 bg-blueGray-50 mb-16 xl:pb-56">
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        {loading?

                            <LoaderSection />

                            :

                            <div className="px-6 mb-10">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4 flex justify-center">
                                        <div className="">
                                            <Image alt="avatar" src="/avatar.jpg" className="shadow-xl rounded-full h-auto align-middle border-none  max-w-150" width={250} height={250} />
                                        </div>
                                    </div>

                                </div>
                                <div className="text-center mt-12">
                                    <h2 className="text-2xl font-semibold leading-normal mb-2 text-neutral">
                                        <b>{fullname}</b>
                                    </h2>
                                </div>

                            </div>

                        }
                    </div>
                </div>
            </section>

        </>

    )

}