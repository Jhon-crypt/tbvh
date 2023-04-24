import Image from "next/image";


export default function IntroHero() {

    return (

        <>

            <section className="relative bg-white">

                <div className="overflow-hidden pt-16 pb-48">
                    <div className="relative container px-4 mx-auto">
                        <div className="flex flex-wrap -m-8">
                            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-6/12 p-8">
                                <h1 className="mb-9 text-6xl md:text-8xl lg:text-13xl font-bold font-heading md:max-w-2xl leading-none text-gray-900">Meet similar minded people</h1>
                                <div>
                                    <p className="mb-9 text-xl text-gray-900 font-medium md:max-w-sm">Get the best-in-class group mentoring plans and professional benefits for your team</p>
                                    <div className="mb-12 md:inline-block">
                                        <button className="py-4 px-6 w-full text-white font-semibold rounded-xl bg-primary" type="button">Try 14 Days Free Trial</button>
                                    </div>
                                    <h3 className="mb-3 text-gray-900 font-semibold">Trusted by 1M+ customers</h3>
                                    <div className="flex flex-wrap items-center -m-1">
                                        <div className="w-auto p-1">
                                            <div className="flex flex-wrap -m-0.5">
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z" fill="#6366F1"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z" fill="#6366F1"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z" fill="#6366F1"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z" fill="#6366F1"></path>
                                                    </svg>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z" fill="#6366F1"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-auto p-1">
                                            <div className="flex flex-wrap -m-0.5">
                                                <div className="w-auto p-0.5">
                                                    <p className="text-gray-900 font-bold">4.2/5</p>
                                                </div>
                                                <div className="w-auto p-0.5">
                                                    <p className="text-gray-600 font-medium">(45k Reviews)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-8/12 xl:w-8/12 xl:absolute xl:right-0 xl:-bottom-20 p-8">
                                <div className="flex flex-wrap justify-center items-center lg:justify-end -m-3">
                                    <div className="w-auto lg:w-1/3 xl:pt-28 p-3">
                                        <div className="flex flex-wrap justify-end">
                                            <div className="w-auto">
                                                <img className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000" src="flaro-assets/images/headers/people.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto lg:w-1/3 p-3">
                                        <div className="flex flex-wrap justify-center -m-3">
                                            <div className="w-auto p-3">
                                                <a href="#">
                                                    <img className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000" src="flaro-assets/images/headers/video.png" alt=""/>
                                                </a>
                                            </div>
                                            <div className="w-auto p-3">
                                                <img className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000" src="flaro-assets/images/headers/people2.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto lg:w-1/3 p-3">
                                        <div className="flex flex-wrap">
                                            <div className="w-auto">
                                                <img className="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000" src="flaro-assets/images/headers/people3.png" alt=""/>
                                            </div>
                                        </div>
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