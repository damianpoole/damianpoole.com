import React from 'react'
import NavLink from '../NavLink'

export default () => (
    <nav className="flex h-full items-center gap-4 font-sans md:gap-6 lg:gap-12">
        <NavLink text="Blog" url="#"></NavLink>
        <NavLink text="Projects" url="#"></NavLink>
        <NavLink text="About" url="#"></NavLink>
    </nav>
)
