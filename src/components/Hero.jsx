import { ButtonOutline, ButtonPrimary } from "./Button"
import HeroModel from './HeroModel';

const Hero = () => {
    return (
        <section id="home" className="pt-28 lg:pt-36 ">
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10 ">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="/Connor.png" alt="Temporary" className="img-cover"
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
                        Future-Focused Software Engineer in the Making
                    </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label={"Download CV"}
                            icon={"download"}
                            href="/resume.pdf"
                            download={true}
                        />
                        <ButtonOutline href={"#about"} label={"Start Exploring"}
                            icon={"arrow_downward"} />
                    </div>
                </div>
                {/* To be changed later */}
                <div className="hidden lg:block">
                    <HeroModel />
                </div>
            </div>
        </section>
    )
}

export default Hero
