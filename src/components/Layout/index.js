import React from 'react'
import Header from '../Header'

export default ({ children }) => (
    <>
        <div className="bg-gray-50 dark:bg-slate-700">
            <Header></Header>
        </div>
        {children}
    </>
)
