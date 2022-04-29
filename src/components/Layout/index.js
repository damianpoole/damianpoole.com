import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default ({ children }) => (
    <>
        <div className="bg-gray-50 dark:bg-slate-700">
            <Header></Header>
        </div>
        {children}
        <Footer></Footer>
    </>
)
