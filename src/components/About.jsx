
const About = () => {
    const aboutItems = [
        {
            label: "Completed Projects",
            number: 4
        },
        {
            label: "Years of Learning",
            number: 2
        },
    ]
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Hello There! I'm Ayyan, a Final Year Software Engineering Student. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate cumque tempora reiciendis eos, impedit necessitatibus asperiores dicta? Non dolor quia nobis, voluptas nulla consequuntur ipsam.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                        {aboutItems.map(({ label, number }, index) => (
                            <div key={index}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}
                        <img src="/aa_logo.png" alt="Logo"
                            width={30}
                            height={30}
                            className="invert brightness-100 ml-auto md:w-[40px] md:h-[40px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
