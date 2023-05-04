import Link from "next/link"

export default function CreateHonestBoxForm() {

    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h3 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">
                            Create Honest Box
                        </h3>
                        <p className="mb-12 font-medium text-lg text-gray-600 leading-normal"></p>
                        <form>
                            <label className="block mb-5">
                            <textarea className="p-4 w-full h-48 font-medium text-gray-500 placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 resize-none rounded-lg focus:ring focus:ring-indigo-300" placeholder="E.g What do you think about me"></textarea>
                            </label>
                            
                            <button className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-secondary hover:bg-secondary-focus transition ease-in-out duration-200" type="button">Create</button>
                            
                        </form>
                    </div>
                </div>
            </section>

        </>

    )

}