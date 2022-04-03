import React from 'react'
import Nav from '../Nav'
import useDarkMode from '../../hooks/useDarkMode'
import ThemeToggle from '../ThemeToggle'

export default () => {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <div className="container mx-auto h-40">
            <div className="flex h-32">
                <div className="flex h-full items-center">
                    <h1 className="mx-4 font-sans text-2xl font-medium tracking-wide dark:text-sky-400">
                        Damian Poole
                    </h1>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <Nav></Nav>
                </div>
                <div className="w-52">
                    <ThemeToggle
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                    ></ThemeToggle>
                </div>
            </div>
        </div>
    )
}
