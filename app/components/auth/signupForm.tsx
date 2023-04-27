export default function SignupForm(){

    return (

        <>
        
            <section className="py-16 xl:pb-56 bg-white overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-md mx-auto">
                        <h2 className="mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight text-black">Join for free</h2>
                        <p className="mb-12 font-medium text-lg text-gray-600 leading-normal">
                            Welcome to TBVH! To get started, please sign up for an account
                        </p>
                        <form>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-primary" id="signUpInput2-1" type="text" placeholder="First &amp; Last Name"/>
                            </label>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-secondary" id="signUpInput2-2" type="text" placeholder="Email Address"/>
                            </label>
                            <label className="block mb-5">
                                <input className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-accent" id="signUpInput2-3" type="password" placeholder="Create Password"/>
                            </label>
                            <button className="mb-8 py-4 px-9 w-full text-white font-semibold rounded-xl shadow-4xl bg-neutral hover:bg-neutral-focus transition ease-in-out duration-200" type="button">
                                Sign up now
                            </button>
                            <p className="font-medium">
                                <span>Already have an account?</span>
                                <a className="text-indigo-600 hover:text-indigo-700" href="#">Login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        
        </>

    )

}