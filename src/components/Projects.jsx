import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({ allProjects }) => {

    return (
        <section id='projects' className='section'>
            <div className='container'>
                <div className='flex max-[450px]:flex-col max-[450px]:justify-start min-[450px]:justify-between  flex-wrap reveal-up mb-8'>
                    <h2 className="headline-2  ">
                        My MVPs Highlights
                    </h2>
                    <a href="https://github.com/Rayyanalii?tab=repositories" className='mt-2 text-zinc-400 text-sm hover:underline transition-all' target="_blank"
                        rel="noopener noreferrer">View All</a>
                </div>
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
