import Link from "next/link"
import { FaGhost } from "react-icons/fa"
import { BiLogIn, BiUserCircle } from "react-icons/bi"

export default function Header(){

    return (

        <>
        
        <div className="navbar bg-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <FaGhost className="text-primary text-2xl" />
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/signup">Signup</Link></li>
                <li><Link href="/login">Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="normal-case text-3xl font-extrabold">
                <b>
                    <span className="text-primary">T</span>
                    <span className="text-secondary">B</span>
                    <span className="text-accent">V</span>
                    <span className="text-neutral">H</span>
                </b>
            </a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <Link href="/login"><BiLogIn className="text-black text-2xl" /></Link>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Link href="signup"><BiUserCircle className="text-black text-2xl" /></Link>
              </div>
            </button>
          </div>
        </div>
        
        </>

    )

}