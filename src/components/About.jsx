import React from 'react';

const About = ({ aboutItems }) => {
    return (
        <section id="about" className="section relative">
            <div className="container relative">
                <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border border-zinc-700 p-6 md:p-10 rounded-3xl shadow-xl shadow-black/20 overflow-hidden relative reveal-up">

                    <div className="absolute -left-1 top-0 h-full w-1 bg-gradient-to-b from-sky-400 to-blue-800 rounded-full" />

                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        <div className="text-zinc-300 space-y-5">
                            <h2 className="text-white text-2xl md:text-3xl font-bold">
                                Hello, I'm <span className="text-sky-400">Ayyan Ali</span>
                            </h2>
                            <p className="md:text-lg leading-relaxed">
                                A <span className="text-sky-400 font-medium">Rector’s Honor</span>–Holding Final Year Software Engineering student at FAST NUCES, Karachi. I love solving real problems with code, especially on the <span className="text-white font-medium">backend</span>, but I also enjoy clean UI and design.
                            </p>
                            <p className="md:text-lg leading-relaxed">
                                I specialize in full-stack web development, core software engineering and have a growing passion for <span className="text-white font-medium">AI/ML</span>. I’m currently seeking internship opportunities to build impactful products and grow as a developer.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {aboutItems.map(({ label, number, plus }, index) => (
                                <div
                                    key={index}
                                    className="bg-zinc-900 border border-sky-800/40 rounded-xl px-4 py-5 text-center hover:shadow-md hover:shadow-sky-700/30 transition duration-200"
                                >
                                    <div className="text-white text-3xl font-bold flex justify-center items-center">
                                        {number}
                                        {plus && <span className="text-sky-400 ml-1">+</span>}
                                    </div>
                                    <p className="text-sm text-zinc-400 mt-1">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <img
                        src="/aa_logo.png"
                        alt="Logo"
                        className="absolute bottom-5 right-6 w-8 h-8 md:w-10 md:h-10 opacity-70 hover:opacity-100 transition invert brightness-100"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
