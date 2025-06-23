import React from 'react'
import SkillOrb from './SkillOrb'

const Skills = () => {
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
                    <SkillOrb imageURL={"/react.webp"} label={"React"} />
                </div>
            </div>
        </section>
    )
}

export default Skills
