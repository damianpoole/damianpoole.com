import React from 'react'
import Tag from '../Tag'

export default ({ title, body, tags = [], img }) => (
    <a href="#" className="group hover:cursor-pointer">
        <div className="relative grid h-full grid-cols-12 rounded-lg rounded-t-lg bg-slate-200 pb-4 outline outline-slate-200 group-hover:outline-2  group-hover:outline-sky-400 dark:bg-slate-700 dark:outline-slate-700">
            <div className="col-span-full">
                <img
                    className=" h-56 w-full rounded-t-lg object-fill"
                    src={img}
                />
                <div className="absolute top-2 right-2 flex gap-1">
                    {tags.map((tag) => (
                        <Tag name={tag.name}></Tag>
                    ))}
                </div>
            </div>

            <h3 className="col-span-10 col-start-2 my-2 text-lg font-bold group-hover:text-sky-400 dark:text-gray-100">
                {title}
            </h3>

            <p className="col-span-10 col-start-2 mt-4">{body}</p>
        </div>
    </a>
)
