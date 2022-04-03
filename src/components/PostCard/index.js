import React from 'react'
import Tag from '../Tag'

export default ({ title, body, tags = [] }) => (
    <a href="#" className="group hover:cursor-pointer">
        <div className="mt-4 mb-8 rounded-lg border-2 border-slate-200 bg-slate-200 p-4 group-hover:border-sky-400 dark:border-slate-700 dark:bg-slate-700">
            <h3 className="my-2 text-lg font-bold group-hover:text-sky-400 dark:text-gray-100">
                {title}
            </h3>

            <div className="flex gap-1">
                {tags.map((tag) => (
                    <Tag name={tag.name}></Tag>
                ))}
            </div>

            <p className="mt-4">{body}</p>
        </div>
    </a>
)
