import React from 'react'
import SkillOrb from './SkillOrb'

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
    ]
    return (
        <section id='skills' className='section'>
            <div className="container">
                <h2 className="headline-2">
                    Technological Skills
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Below are the tools and technologies I have worked with in the past to design and develop exceptional softwares and websites.
                </p>
                <div className="">
                    {skillItems.map(({ heading, skills }, index) => (
                        <div key={index} className=''>
                            <h3 className='headline-3'>{heading}</h3>
                            <div className='flex'>

                                {skills.map(({ label, imageURL, imageSize }, index) => (
                                    <div key={index}>
                                        <SkillOrb imageURL={imageURL} label={label} imageSize={imageSize} />
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
