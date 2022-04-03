import React from 'react'
import NavLink from '../NavLink'

export default () => (
    <nav className="flex h-full items-center gap-12 font-sans">
        <NavLink text="Blog" url="#"></NavLink>
        <NavLink text="Projects" url="#"></NavLink>
        <NavLink text="About" url="#"></NavLink>
    </nav>
)
