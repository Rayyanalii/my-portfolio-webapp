import React, { useState } from 'react'
import SkillOrb from './SkillOrb'
import Tooltip from './Tooltip';

const Skills = () => {
    const skillItems = [
        {
            heading: "Programming Languages",
            skills: [
                {
                    label: "Python",
                    imageURL: "/python.webp",
                    imageSize: 1.5
                },
                {
                    label: "Java",
                    imageURL: "/java.png",
                    imageSize: 1.5
                },
                {
                    label: "Javascript",
                    imageURL: "/javascript.webp",
                    imageSize: 1.4
                },
                {
                    label: "Typescript",
                    imageURL: "/typescript.webp",
                    imageSize: 1
                },
                {
                    label: "C",
                    imageURL: "/C.png",
                    imageSize: 1.2
                },

            ]
        },
        {
            heading: "Front-End Development",
            skills: [
                {
                    label: "HTML",
                    imageURL: "/html.webp",
                    imageSize: 1.4
                },
                {
                    label: "CSS",
                    imageURL: "/css.webp",
                    imageSize: 1.1
                },
                {
                    label: "Tailwind",
                    imageURL: "/tailwind.png",
                    imageSize: 1
                },
                {
                    label: "Bootstrap",
                    imageURL: "/bootstrap.svg",
                    imageSize: 1
                },
                {
                    label: "React",
                    imageURL: "/react.webp",
                    imageSize: 1.3
                },
                {
                    label: "ThreeJS",
                    imageURL: "/threejs.png",
                    imageSize: 1.2
                },
                {
                    label: "Thymeleaf",
                    imageURL: "/thymeleaf.png",
                    imageSize: 1.2
                },
            ]
        },
        {
            heading: "Back-End Development",
            skills: [
                {
                    label: "NodeJS",
                    imageURL: "/node.png",
                    imageSize: 1.2
                },
                {
                    label: "ExpressJS",
                    imageURL: "/express.png",
                    imageSize: 1.2
                },
                {
                    label: "Spring",
                    imageURL: "/spring.png",
                    imageSize: 1.1
                },
                {
                    label: "Springboot",
                    imageURL: "/springboot.png",
                    imageSize: 1.2
                },
                {
                    label: "ASP.NET MVC",
                    imageURL: "/asp.net.webp",
                    imageSize: 1.2
                },
            ]
        },
        {
            heading: "AI/ML",
            skills: [
                {
                    label: "Pandas",
                    imageURL: "/pandas.png",
                    imageSize: 1.3
                },
                {
                    label: "NumPy",
                    imageURL: "/numpy.png",
                    imageSize: 1.3
                },
                {
                    label: "Scikit-Learn",
                    imageURL: "/scikit.png",
                    imageSize: 1.1
                },
            ]
        },
        {
            heading: "Database Systems",
            skills: [
                {
                    label: "PostgreSQL",
                    imageURL: "/postgresql.png",
                    imageSize: 2
                },
                {
                    label: "MongoDB",
                    imageURL: "/mongodb.webp",
                    imageSize: 1.3
                },
                {
                    label: "Oracle SQL",
                    imageURL: "/oraclesql.png",
                    imageSize: 1.7
                },
                {
                    label: "MySQL",
                    imageURL: "/mysql.png",
                    imageSize: 1.3
                },
                {
                    label: "Microsoft SQL",
                    imageURL: "/mssql.png",
                    imageSize: 1.4
                },
            ]
        },
        {
            heading: "Software Tools",
            skills: [
                {
                    label: "Figma",
                    imageURL: "/figma.webp",
                    imageSize: 1.8
                },
                {
                    label: "Git",
                    imageURL: "/git.png",
                    imageSize: 1.3
                },
                {
                    label: "Postman",
                    imageURL: "/postman.webp",
                    imageSize: 1.3
                },
                {
                    label: "Selenium IDE",
                    imageURL: "/selenium-ide.png",
                    imageSize: 1.1
                },

            ]
        },
    ]

    const [animation, setanimation] = useState(true);

    return (
        <section id='skills' className='section'>
            <div className="container">
                <div className='flex justify-between items-start max-md:flex-col'>
                    <div>

                        <h2 className="headline-2">
                            Technological Skills
                        </h2>
                        <p className="text-zinc-400 mt-3 mb-4 md:mb-8 max-w-[50ch]">
                            Below are the tools and technologies I have worked with in the past to design and develop exceptional softwares and websites.
                        </p>
                    </div>
                    <div className='flex gap-2 items-center max-md:mb-8'>
                        <div className='group relative'>

                            <button
                                onClick={() => setanimation(!animation)}
                                className={`w-14 h-8 flex items-center px-1 rounded-full transition-colors duration-300 ${animation ? 'bg-sky-400' : 'bg-zinc-600'
                                    }`}
                            >
                                <div
                                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${animation ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                />
                            </button>
                            <Tooltip label={"Disabling Animations Will Enhance Website's Performance"} classes={"-bottom-12"} />
                        </div>
                        <span className='text-zinc-300'>
                            Toggle Animations
                        </span>
                    </div>


                </div>

                <div className="overflow-visible">
                    {skillItems.map(({ heading, skills }, index) => (
                        <div key={index} className='overflow-visible'>
                            <h3 className='headline-3'>{heading}</h3>
                            <div className='flex overflow-x-auto no-scrollbar overflow-y-hidden' onMouseDown={(e) => {
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
                                    <div key={index}>
                                        <SkillOrb imageURL={imageURL} label={label} imageSize={imageSize} animationOn={animation} />
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
