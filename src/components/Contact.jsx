const Contact = ({ socialLinks }) => {

    return (
        <section id="contact" className="section">
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex lg:flex-col ">
                    <h2 className="headline-2 lg:max-w-[12ch] reveal-up">
                        Contact Me For Collaboration
                    </h2>
                    <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
                        Reach me out today to discuss your project needs and start collaborating on something amazing!
                    </p>

                    <div className="flex items-center gap-2  reveal-up">
                        {socialLinks.map(({ href, icon }, index) => (
                            <a href={href}
                                key={index} className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-all hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                                target="_blank">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
                <form action="https://formspree.io/f/xeokpdrj" className="xl:pl-10 2xl:pl-20 " method="POST">
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4  reveal-up">
                            <label htmlFor="name" className="label">
                                Name
                            </label>
                            <input type="text" name="name" id="name" className="text-field" autoComplete="name" required placeholder="Ayyan Ali" />
                        </div>
                        <div className="mb-4 reveal-up">
                            <label htmlFor="email" className="label">
                                Email
                            </label>
                            <input type="email" name="email" id="email" className="text-field" autoComplete="email" required placeholder="ayyanali@example.com" />
                        </div>
                    </div>
                    <div className="mb-4 reveal-up">
                        <label htmlFor="message" className="label">
                            Message
                        </label>
                        <textarea name="message" id="message" className="text-field resize-y min-h-32 max-h-80" placeholder="Hello World!" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn reveal-up">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
