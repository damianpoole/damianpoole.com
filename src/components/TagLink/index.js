import React from 'react'

export default ({ tagName, count }) => (
    <li className="flex rounded border duration-100 hover:scale-125">
        <a className="group flex-1 text-xs group-hover:text-sky-700" href="#">
            <span className="py-1 px-2">{tagName}</span>
            <span className="relative top-0 right-0 inline-block h-full rounded-tr rounded-br bg-gray-800 p-1 px-2 text-white group-hover:bg-sky-700 dark:bg-slate-700">
                {count}
            </span>
        </a>
    </li>
)
