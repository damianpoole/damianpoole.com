import React from 'react'
import Github from './github'
import Twitter from './twitter'
import Instagram from './instagram'
import Linkedin from './linkedin'

const SocialIcon = ({ icon = '', className }) => {
    if (icon === 'github') return <Github className={className}></Github>
    if (icon === 'twitter') return <Twitter className={className}></Twitter>
    if (icon === 'instagram')
        return <Instagram className={className}></Instagram>
    if (icon === 'linkedin') return <Linkedin className={className}></Linkedin>

    return <></>
}

export default SocialIcon
