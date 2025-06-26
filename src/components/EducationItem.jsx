import React from 'react';
import { FaGraduationCap, FaMedal } from 'react-icons/fa';

const EducationItem = ({ degree, institution, duration, grade, description, logoURL }) => {
    const honors = [];

    const deanRegex = /Dean[’']?s Honor List\s*\(([^)]+)\)/i;
    const rectorRegex = /Rector[’']?s Honor List\s*\(([^)]+)\)/i;

    const deanMatch = description?.match(deanRegex);
    const rectorMatch = description?.match(rectorRegex);

    if (deanMatch) {
        honors.push({
            title: "Dean's List",
            semesters: deanMatch[1],
            icon: <FaGraduationCap className="text-white" />,
        });
    }

    if (rectorMatch) {
        honors.push({
            title: "Rector's List",
            semesters: rectorMatch[1],
            icon: <FaMedal className="text-yellow-300" />,
        });
    }

    const cleanedDescription = description
        ?.replace(deanRegex, '')
        ?.replace(rectorRegex, '')
        ?.trim();

    return (
        <div className="relative group sm:pl-8 reveal-up">
            <div className="absolute left-0 top-4 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-sky-400/30 transition-all group-hover:scale-110 max-sm:hidden" />

            <div className="flex items-start gap-5">
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-zinc-800 ring-2 ring-zinc-700 overflow-hidden transition-all ">
                    <img src={logoURL} alt={institution} className="w-full h-full object-contain p-0.5" />
                </div>

                <div>
                    <h3 className="text-lg font-bold text-white">{degree}</h3>
                    <p className="text-zinc-400 text-sm font-medium">{institution}</p>
                    <p className="text-zinc-500 text-xs mb-2">{duration}</p>

                    {grade && (
                        <p className="text-emerald-400 text-sm font-medium mb-2">
                            {grade}
                        </p>
                    )}

                    {cleanedDescription && (
                        <p className="text-zinc-300 text-sm leading-relaxed max-w-md mb-2">
                            {cleanedDescription}
                        </p>
                    )}

                    {honors.length > 0 && (
                        <div className="flex flex-col gap-2 mt-2">
                            {honors.map((honor, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-800 to-sky-600 text-sky-100 text-sm font-semibold shadow-sm ring-1 ring-sky-500/30"
                                >
                                    <div className="text-lg">{honor.icon}</div>
                                    <span>{honor.title} ({honor.semesters} Semester{honor.semesters.split(',').length > 1 ? 's' : ''})</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EducationItem;
