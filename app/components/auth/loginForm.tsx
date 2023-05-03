import Link from "next/link"

export default function LoginForm() {

    return (

        <>

            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">Welcome Back</h2>
                        <p className="mb-12 font-medium text-lg text-gray-600 leading-normal"></p>
                        <form>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-primary" id="signInInput2-1" type="text" placeholder="Email address"/>
                            </label>
                            <label className="relative block mb-5">
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2"><a className="text-sm text-indigo-600 hover:text-indigo-700 font-medium" href="#">Forgot Password?</a></div>
                                <input className="px-4 pr-36 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-secondary" id="signInInput2-2" type="password" placeholder="Password" />
                            </label>
                            <button className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-neutral hover:bg-neutral-focus transition ease-in-out duration-200" type="button">Sign In</button>
                            <p className="font-medium">
                                <span>Don’t have an account?</span>
                                <Link className="text-indigo-600 hover:text-indigo-700" href="/signup">Create free account</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>

        </>

    )

}