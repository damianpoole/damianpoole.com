import React from 'react'
import SocialIcon from '../SocialIcon'

export default () => (
    <footer className="mt-10 bg-gray-50 py-4 text-sm dark:bg-slate-700">
        <div className="container mx-auto flex items-center">
            <div className="my-4 mr-4 text-2xl">
                <a href="/">Damian Poole</a>
            </div>
            <span>&copy; 2022. All rights reserved.</span>
            <div className="flex flex-1 justify-end gap-2">
                <SocialIcon icon="github" className="w-5"></SocialIcon>
                <SocialIcon icon="twitter" className="w-5"></SocialIcon>
                <SocialIcon icon="instagram" className="w-5"></SocialIcon>
                <SocialIcon icon="linkedin" className="w-5"></SocialIcon>
            </div>
        </div>
    </footer>
)
