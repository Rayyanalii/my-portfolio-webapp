import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const allProjects = [
        {
            imgURL: "/react.webp",
            title: "AI-Powered HR Management System",
            tags: ["React", "NodeJS", "ExpressJS", "PostgreSQL", "TailwindCSS", "Python"],
            projectLink: "www.google.com"
        },
        {
            imgURL: "/react.webp",
            title: "AI-Powered HR Management System",
            tags: ["React", "NodeJS", "ExpressJS", "PostgreSQL", "TailwindCSS", "Python"],
            projectLink: "https://www.google.com"
        },
    ]
    return (
        <section id='projects' className='section'>
            <div className='container'>
                <h2 className="headline-2 mb-8">
                    My Project Highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {allProjects.map(({ imgURL, title, tags, projectLink }, index) => (
                        <ProjectCard key={index} imgURL={imgURL} title={title} tags={tags} projectLink={projectLink} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
