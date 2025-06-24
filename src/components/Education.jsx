import React from 'react';
import EducationItem from './EducationItem';

const educationData = [
    {
        degree: "Bachelors in Software Engineering",
        institution: "FAST NUCES, Karachi",
        duration: "2022 – 2026",
        grade: "CGPA: 3.63 / 4.00",
        logoURL: "/fast.png",
        description: `Dean's Honor List (3rd, 4th, 5th) Rector's Honor List (6th)`,
    },
    {
        degree: "Intermediate (F.Sc Pre-Engineering)",
        institution: "Bahria College Karsaz, Karachi",
        duration: "2020 – 2022",
        grade: "Grade: A (83%)",
        logoURL: "/bahria.webp",
        description: "",
    },
];


const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="headline-2">Education</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[80ch]">
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
