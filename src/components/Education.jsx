import React from 'react';
import EducationItem from './EducationItem';

const Education = ({ educationData }) => {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Education</h2>
                <p className="text-zinc-400 mt-3 mb-8 reveal-up">
                    My academic journey across various stages that shaped my technical thinking and problem-solving skills.
                </p>

                <div className="space-y-12 border-l-2 border-zinc-700 pl-6 relative">
                    {educationData.map((edu, index) => (
                        <EducationItem key={index} {...edu} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
