"use client"

import { Vortex } from  'react-loader-spinner'

export default function LoaderSection() {

    return (

        <>

            <div className="py-16 xl:pb-56 flex flex-col items-center justify-center">

                <Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />

            </div>

        </>

    )

}