import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ allProjects }) => {

    return (
        <section id='projects' className='section'>
            <div className='container'>
                <h2 className="headline-2 mb-8 reveal-up">
                    My Project Highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {allProjects.map(({ imgURL, title, tags, projectLink }, index) => (
                        <ProjectCard key={index} imgURL={imgURL} title={title} tags={tags} projectLink={projectLink} classes={" reveal-up"} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
