import { useState } from 'react'
import { maintainers } from '../lib/config'
import Link from "next/link"

export default function Layout({ children }: any) {
    const [theme, setTheme] = useState('dark')
    
    return (
        <div
            className='flex flex-col bg-base-300 min-h-screen gap-8'
            data-theme={ theme }
        >
            <div className="fixed h-full w-full" style={{background: "linear-gradient(45deg,#5ccefa,#5ccefa 20%,#f6a8b7 20%,#f6a8b7 40%,#fff 40%,#fff 60%,#f6a8b7 60%,#f6a8b7 80%,#5ccefa 80%,#5ccefa)"}} />
            <div className="grow z-10 overflow-y-clip">
                <div className="p-2 md:p-5 lg:px-6 2xl:px-80">
                    <div className="flex justify-between items-center rounded-2xl p-5 bg-base-100 shadow-xl">
                        <Link href='/'>
                            <p className="text-4xl place-self-center">
                                The Trans Fediverse
                            </p>
                        </Link>
                        <div className="flex flex-nowrap justify-evenly items-center gap-2">
                            <i className="fa-solid fa-moon"></i>
                            <input
                                type='checkbox'
                                className='toggle'
                                onChange={ () => toggleTheme() }
                            />
                            <i className='fa-solid fa-sun'></i>
                        </div>
                    </div>
                    { children }
                </div>
            </div>
            <footer className="footer py-6 px-4 sm:px-12 bg-neutral text-neutral-content flex justify-between items-center z-10">
                <div>
                    <div className='flex flex-col gap-2'>
                        <div>Maintained by:</div>
                        <div></div>
                        { maintainers.map(
                            (data: { user: string; domain: string }) => (
                                <div key={ data.user + data.domain }>
                                    <a
                                        rel='me noreferrer'
                                        href={ `https://${ data.domain }/@${ data.user }` }
                                        className='link flex items-center'
                                        target='_blank'
                                    >
                                        <div>
                                            <i className='fa-brands fa-mastodon text-2xl'></i>
                                        </div>
                                        <div>
                                            { data.user }@{ data.domain }
                                        </div>
                                    </a>
                                </div>
                            )
                        ) }
                    </div>
                </div>
                <div>
                    Find us here:
                    <div className='flex items-center flex-row gap-4'>
                        <a
                            href="https://github.com/ineffyble/transfediverse"
                            className="link text-6xl no-underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className='fa-brands fa-github'></i>
                        </a>
                        <a
                            rel="me noreferrer"
                            href="https://blahaj.zone/@TransFediverse"
                            className="link text-6xl no-underline"
                            target="_blank"
                        >
                            <i className='fa-brands fa-mastodon'></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
    
    function toggleTheme() {
        if (theme == 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
}
