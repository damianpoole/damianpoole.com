import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { MDXProvider } from '@mdx-js/react'

import Tag from '../Tag'

const components = { Tag }

const BlogLayout = ({ children, pageContext }) => {
    const { frontmatter } = pageContext

    return (
        <>
            <div className="bg-gray-50 dark:bg-slate-700">
                <Header></Header>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-12 pt-16">
                <h2 className="col-span-10 col-start-2 pb-8 text-4xl tracking-wider">
                    {frontmatter.title}
                </h2>
                {frontmatter.image && (
                    <div className="col-span-12 h-64 border lg:col-span-10 lg:col-start-2">
                        <img
                            className="h-64 w-full rounded-2xl object-cover object-center"
                            src={`/images/${frontmatter.image}`}
                        ></img>
                    </div>
                )}
                <div className="markdown contents">
                    <MDXProvider components={components}>
                        {children}
                    </MDXProvider>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default BlogLayout
