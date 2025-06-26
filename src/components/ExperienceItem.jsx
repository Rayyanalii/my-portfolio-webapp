import React from 'react';

const ExperienceItem = ({ role, company, duration, description, tech, logoURL }) => {
    return (
        <div className="relative group sm:pl-8 reveal-up">
            <div className="absolute left-0 top-4 w-3 h-3 rounded-full bg-sky-400 ring-4 ring-sky-400/30 transition-all group-hover:scale-110 max-sm:hidden" />

            <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 bg-zinc-800 ring-1 ring-zinc-700 rounded-full overflow-hidden p-1">
                    <img src={logoURL} alt={company} className="w-full h-full object-contain" />
                </div>

                <div>
                    <h3 className="text-white font-semibold text-lg">
                        {role} <span className="text-zinc-400 font-normal text-sm">@ {company}</span>
                    </h3>
                    <p className="text-zinc-500 text-xs mb-1">{duration}</p>
                    <p className="text-zinc-300 text-sm mb-2 max-w-md">{description}</p>

                    {tech && (
                        <div className="flex flex-wrap gap-2">
                            {tech.map((item, idx) => (
                                <span key={idx} className="text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded-full">
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
