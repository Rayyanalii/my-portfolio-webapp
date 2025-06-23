import { ButtonOutline, ButtonPrimary } from "./Button"

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36 ">
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 ">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/aa_logo.png" alt="Temporary" className="img-cover"
                                width={40}
                                height={40}
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400 ">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping "></span>
                            </span>
                            Looking for internship opportunities
                        </div>
                    </div>
                    <h2 className="headline-1 hero-heading">
                        Building Scalable Modern Websites for the Future
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label={"Download CV"}
                            icon={"download"}
                        />
                        <ButtonOutline href={"#about"} label={"Scroll Down"}
                            icon={"arrow_downward"} />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img src="/aa_logo.png" alt="Ayyan Ali Banner" className="w-full" width={656} height={800} />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero
