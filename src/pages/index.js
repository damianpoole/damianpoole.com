import React from 'react'
import TagLink from '../components/TagLink'
import PostCard from '../components/PostCard'

import Layout from '../components/Layout'

import animationImg from '../../static/images/animation.jpg'
import treeImg from '../../static/images/tree.jpg'
import runningImg from '../../static/images/running.jpg'

const Index = () => (
    <Layout>
        <div className="container mx-auto p-10 pt-24">
            <div className="w-64">
                <h2 className="text-base uppercase tracking-wide text-orange-800 dark:text-orange-400">
                    Check out my blog topics
                </h2>

                <ul className="mt-4 flex flex-wrap gap-4">
                    <TagLink tagName="LWC" count="2"></TagLink>
                    <TagLink tagName="React" count="0"></TagLink>
                    <TagLink tagName="Testing" count="1"></TagLink>
                </ul>
            </div>
            <div className="mt-16">
                <h2 className="my-6 text-base uppercase tracking-wide text-orange-800 dark:text-orange-400">
                    Recent Posts
                </h2>

                <div className="grid grid-cols-1 items-stretch justify-items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <PostCard
                        title="Animating Lightning Web Components on first render"
                        body="With this post I hopefully am going to explain
                        how and why CSS animations behave the way they
                        do with Lightning Web Components. The scope of…"
                        tags={[{ id: 0, name: 'LWC' }]}
                        img={animationImg}
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
                        img={treeImg}
                    ></PostCard>

                    <PostCard
                        title="Running Siesta tests from Atom or Sublime"
                        body="This post is not about how to use Siesta for
                        unit testing, more a quick guide on how to get
                        setup using PhatomJS to run your tests from
                        Atom…"
                        img={runningImg}
                    ></PostCard>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index
