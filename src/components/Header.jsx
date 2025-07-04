import { useState } from "react"
import Navbar from "./Navbar"


const Header = () => {

    const [navOpen, setNavOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 ">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6">
                <h1>
                    <a href="/" className="logo">
                        <img src="/aa_logo.png" alt="Ayyan Ali Logo" width={40} height={40} className="opacity-70 hover:opacity-100 transition-all invert brightness-100" />
                    </a>
                </h1>
                <div className="relative md:justify-self-center">
                    <button className="menu-btn" onClick={() => setNavOpen((prev) => !prev)}>
                        <span className="material-symbols-rounded ">{navOpen ? "close" : "menu"}</span>
                    </button>
                    <Navbar navOpen={navOpen} />
                </div>
                <a href="#contact" className="btn btn-secondary contact-btn">Contact Me</a>
            </div>
        </header>
    )
}

export default Header
