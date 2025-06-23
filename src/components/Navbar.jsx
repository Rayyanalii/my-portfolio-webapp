import { useEffect, useRef } from "react"

const Navbar = ({ navOpen }) => {

    const lastActiveLink = useRef()
    const activeBox = useRef()

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + "px"
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px"
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px"
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px"
    }

    const activeCurrentLink = (e) => {
        lastActiveLink.current?.classList.remove("active")
        e.target.classList.add("active")
        lastActiveLink.current = e.target
        activeBox.current.style.top = e.target.offsetTop + "px"
        activeBox.current.style.left = e.target.offsetLeft + "px"
        activeBox.current.style.width = e.target.offsetWidth + "px"
        activeBox.current.style.height = e.target.offsetHeight + "px"
    }

    window.addEventListener("resize", initActiveBox)

    useEffect(initActiveBox, [])

    const navItems = [
        {
            label: "Home",
            link: "#home",
            className: "nav-link active",
            ref: lastActiveLink
        },
        {
            label: "About",
            link: "#about",
            className: "nav-link",
        },
        {
            label: "Skills",
            link: "#skills",
            className: "nav-link",
        },
        {
            label: "Experience",
            link: "#experience",
            className: "nav-link",
        },
        {
            label: "Projects",
            link: "#projects",
            className: "nav-link",
        },
        {
            label: "Contact",
            link: "#contact",
            className: "nav-link contact",
        },
    ]

    return (
        <nav className={`navbar ${navOpen ? "active" : ""}`}>
            {navItems.map(({ label, link, className, ref }, index) => (
                <a key={index} ref={ref} href={link} onClick={activeCurrentLink} className={className}>{label}</a>
            ))}
            <div className="active-box" ref={activeBox}></div>
        </nav>
    )
}

export default Navbar
