import React from 'react'

export default ({ text, url }) => (
    <a
        className="font-sans text-lg text-gray-800 dark:text-gray-300"
        href={url}
    >
        {text}
    </a>
)
