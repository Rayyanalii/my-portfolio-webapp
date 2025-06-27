import React, { useState } from 'react'
import SkillOrb from './SkillOrb'
import Tooltip from './Tooltip';

const Skills = ({ skillItems }) => {

    const [showInfo, setShowInfo] = useState(false);
    const [lightweight, setLightweight] = useState(false);

    return (
        <section id='skills' className='section'>
            <div className="container">
                <div className='flex justify-between items-start max-lg:flex-col'>
                    <div>

                        <h2 className="headline-2 reveal-up">
                            Technological Skills
                        </h2>
                        <p className="text-zinc-400 mt-3 mb-4 lg:mb-8 max-w-[50ch] reveal-up">
                            Below are the tools and technologies I have worked with in the past to design and develop exceptional softwares and websites.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 max-lg:mb-8 reveal-up mt-1">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setLightweight(!lightweight)}
                                className={`w-14 h-8 flex items-center px-1 rounded-full cursor-pointer transition-colors duration-300 ${lightweight ? 'bg-sky-400' : 'bg-zinc-600'}`}
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${lightweight ? 'translate-x-6' : 'translate-x-0'}`}
                                />
                            </button>
                            <span className="text-sm text-zinc-200">Lightweight Mode</span>

                        </div>


                        <p className="text-xs text-zinc-400 max-w-[40ch] mt-1 transition-all">
                            Some devices or browsers may not render 3D graphics. Enable Lightweight Mode to display simpler visuals instead.
                        </p>

                    </div>



                </div>

                <div className="overflow-visible">
                    {skillItems.map(({ heading, skills }, index) => (
                        <div key={index} className='overflow-visible'>
                            <h3 className='headline-3 reveal-up'>{heading}</h3>
                            <div className='flex overflow-x-auto no-scrollbar overflow-y-hidden reveal-up' onMouseDown={(e) => {
                                const el = e.currentTarget;
                                let startX = e.pageX - el.offsetLeft;
                                let scrollLeft = el.scrollLeft;

                                function onMove(e) {
                                    const x = e.pageX - el.offsetLeft;
                                    const walk = (x - startX) * 1.5;
                                    el.scrollLeft = scrollLeft - walk;
                                }

                                function onUp() {
                                    window.removeEventListener('mousemove', onMove);
                                    window.removeEventListener('mouseup', onUp);
                                }

                                window.addEventListener('mousemove', onMove);
                                window.addEventListener('mouseup', onUp);
                            }}
                                onTouchStart={(e) => {
                                    const el = e.currentTarget;
                                    const startX = e.touches[0].pageX;
                                    const scrollLeft = el.scrollLeft;

                                    function onMove(touchEvent) {
                                        const x = touchEvent.touches[0].pageX;
                                        const walk = (x - startX) * 1.5;
                                        el.scrollLeft = scrollLeft - walk;
                                    }

                                    function onEnd() {
                                        window.removeEventListener('touchmove', onMove);
                                        window.removeEventListener('touchend', onEnd);
                                    }

                                    window.addEventListener('touchmove', onMove);
                                    window.addEventListener('touchend', onEnd);
                                }}
                            >

                                {skills.map(({ label, imageURL, imageSize }, index) => (
                                    <div key={index} className=''>
                                        {lightweight ? <div
                                            className="mt-2 mb-4 w-[130px] h-[130px] bg-zinc-800/30 rounded-2xl flex flex-col items-center justify-center text-center gap-3 p-3 shadow-lg ring-1 ring-white/5 transition-all duration-300 hover:scale-[1.03] mr-5"
                                        >
                                            <img
                                                src={imageURL}
                                                alt={label}
                                                className="object-contain"
                                                style={{ width: `${50 * imageSize}px`, height: `${50 * imageSize}px` }}
                                            />
                                            <span className="text-sm text-zinc-100 font-medium">{label}</span>
                                        </div>
                                            : <SkillOrb imageURL={imageURL} label={label} imageSize={imageSize} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
