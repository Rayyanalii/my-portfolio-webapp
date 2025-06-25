import React from 'react'
import { ButtonPrimary } from './Button';

const Footer = ({ sitemap, socials }) => {

    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2 ">
                    <div className="mb-10 ">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Let's work together today!
                        </h2>
                        <ButtonPrimary href={"mailto:rayyanali2705@gmail.com"} label={"Start Project"}
                            icon={"chevron_right"} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
                        <div>
                            <p className="mb-2">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href}
                                            className='block text-sm text-zinc-400 py-1 transition-all hover:text-zinc-200'>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2">Socials</p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href}
                                            className='block text-sm text-zinc-400 py-1 transition-all hover:text-zinc-200'
                                            target='_blank'>
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="flex items-center justify-between pt-10 mb-8 ">
                    <a href="" className="">
                        <img src="/aa_logo.png" width={40} height={40} alt="Logo" className='invert brightness-100 opacity-70 hover:opacity-100 transition-all' />
                    </a>
                    <p className="text-zinc-500 text-sm ">
                        &copy; 2025 <span className='text-zinc-200'>Ayyan Ali</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
