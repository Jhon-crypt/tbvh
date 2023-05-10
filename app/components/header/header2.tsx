import Link from "next/link"
import { FaGhost } from "react-icons/fa"
import { BiCog, BiHomeAlt, BiUserCircle } from "react-icons/bi"
import { FaPlusCircle } from "react-icons/fa"

export default function Header2(props:
    { homeColor: string, createColor: string, profileColor: string }
) {


    return (

        <>

            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <FaGhost className="text-primary text-2xl" />
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white 
                        text-black rounded-box w-52">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/signup">Signup</Link></li>
                            <li><Link href="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="normal-case text-3xl font-extrabold">
                        <b>
                            <ul className="menu menu-horizontal bg-white-focus rounded-box shadow-lg">
                                <li>
                                    <Link href="/home">
                                        <BiHomeAlt className={`text-xl ${props.homeColor}`} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/create">
                                        <FaPlusCircle className={`text-xl ${props.createColor}`} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profile">
                                        <BiUserCircle className={`text-xl ${props.profileColor}`} />
                                    </Link>
                                </li>
                            </ul>
                        </b>
                    </a>
                </div>
                <div className="navbar-end">

                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <div className="dropdown dropdown-bottom dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                    <BiCog tabIndex={0} className="text-black text-2xl" />
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white 
                                text-black rounded-box w-52">
                                    <li><Link href="/settings">Settings</Link></li>
                                    <li><Link href="/signup">Log out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </button>

                </div>
            </div>

        </>

    )

}