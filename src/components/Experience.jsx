import React from 'react';
import ExperienceItem from './ExperienceItem';



const Experience = ({ experienceData }) => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="headline-2">Experience</h2>
                <p className="text-zinc-400 mt-3 mb-8">
                    A snapshot of my development experience, freelance work, and academic contributions in a timeline.
                </p>

                <div className="relative border-l-2 border-zinc-700 pl-6 space-y-12">
                    {experienceData.map((item, i) => (
                        <ExperienceItem key={i} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
