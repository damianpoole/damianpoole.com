import React from 'react'
import Nav from '../Nav'
import useDarkMode from '../../hooks/useDarkMode'
import ThemeToggle from '../ThemeToggle'
import Monkey from '../Monkey'

export default () => {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <div className="container mx-auto h-40">
            <div className="block h-auto pl-4 md:flex md:h-32 md:pl-0">
                <div className="flex h-full items-center">
                    <h1 className="relative z-20 mt-12 font-sans text-3xl font-medium tracking-widest dark:text-sky-400 md:mx-4 md:mt-0">
                        Damian Poole
                    </h1>
                </div>
                <div className="flex flex-1 md:mt-0 md:items-center md:justify-center">
                    <Nav></Nav>
                </div>
                <div className="absolute right-20 top-0 flex h-40 items-center justify-center md:static">
                    <Monkey></Monkey>
                </div>
                <div className="absolute right-0 top-0 h-32 w-28 md:static">
                    <ThemeToggle
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    ></ThemeToggle>
                </div>
            </div>
        </div>
    )
}
