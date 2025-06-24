import React from 'react'

const Tooltip = ({ label, classes }) => {
    return (
        <div className={`absolute z-50 left-1/2 -translate-x-1/2 mt-2 transition-all duration-150 opacity-0 invisible group-hover:opacity-100 group-hover:visible ${classes}`}>
            <div className="relative bg-zinc-800 text-white px-3 py-1.5 rounded-lg shadow ring-1 ring-zinc-50/5 text-sm whitespace-nowrap">
                {label}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-zinc-800" />
            </div>
        </div>
    )
}

export default Tooltip
