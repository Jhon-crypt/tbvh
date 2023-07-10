'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (

        <>

            <div className="px-8 py-20 bg-white overflow-hidden rounded-3xl mb-16">
                <div className="md:max-w-2xl text-center mx-auto"><span className="inline-block mb-3 text-sm text-neutral font-bold uppercase tracking-widest">Oops, something broke</span>
                    <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-grey font-black tracking-tight">Error, something went wrong</h1>
                    <div className="max-w-lg mx-auto">
                        <div className="flex flex-wrap -m-2">

                            <div className="w-full md:flex-1 p-2">

                                <button className="py-4 px-6 w-full text-white font-semibold rounded-xl bg-primary" onClick={
                                    // Attempt to recover by trying to re-render the segment
                                    () => reset()}>
                                    <div className="flex flex-wrap justify-center items-center -m-1">
                                        <div className="w-auto p-1">
                                            <span>Reload Page Now</span>
                                        </div>
                                    </div>
                                </button>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}