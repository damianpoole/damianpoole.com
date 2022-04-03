import React from 'react'
import TagLink from '../components/TagLink'
import Header from '../components/Header'
import PostCard from '../components/PostCard'

const Index = () => (
    <>
        <div className="">
            <Header></Header>
        </div>
        <div className="">
            <div className="container mx-auto flex p-10 pt-24 shadow-sm">
                <div className="flex-1 pr-8">
                    <h2 className="text-base uppercase tracking-wide text-orange-800 dark:text-orange-400">
                        Recent Posts
                    </h2>

                    <PostCard
                        title="Animating Lightning Web Components on first render"
                        body="With this post I hopefully am going to explain
                        how and why CSS animations behave the way they
                        do with Lightning Web Components. The scope of…"
                        tags={[{ id: 0, name: 'LWC' }]}
                    ></PostCard>

                    <PostCard
                        title="Mocking the initial state of the Lightning Web Component"
                        body="Jest is a great tool for testing, there are so
                        many different ways to solve testing problems. I
                        want to talk about a problem I have…"
                        tags={[
                            { id: 0, name: 'LWC' },
                            { id: 1, name: 'Testing' },
                        ]}
                    ></PostCard>

                    <PostCard
                        title="Running Siesta tests from Atom or Sublime"
                        body="This post is not about how to use Siesta for
                        unit testing, more a quick guide on how to get
                        setup using PhatomJS to run your tests from
                        Atom…"
                    ></PostCard>
                </div>
                <div className="w-64">
                    <h2 className="text-base uppercase tracking-wide text-orange-800 dark:text-orange-400">
                        Categories
                    </h2>

                    <ul className="mt-4 flex flex-wrap gap-4">
                        <TagLink tagName="LWC" count="2"></TagLink>
                        <TagLink tagName="React" count="0"></TagLink>
                        <TagLink tagName="Testing" count="1"></TagLink>
                    </ul>
                </div>
            </div>
        </div>
    </>
)

export default Index
