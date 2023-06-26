import React from 'react'
import { githubGold, linkedIn } from '../../assets'

const SocialLinks = () => {
  return (
    <div className=' fixed top-1/2 left-6 z-10'>
      <div className=' w-10 h-10 mb-2'>
        <a href='https://www.linkedin.com/in/indra18' target='_blank'>
            <img src={linkedIn} className='opacity-30 hover:opacity-100 w-full h-full' alt='linkedIn link' />
        </a>
      </div>
      <div className=' w-10 h-10'>
        <a href='https://github.com/indra-18' target='_blank'>
            <img src={githubGold} className='opacity-30 hover:opacity-100 w-full h-full' alt='github link' />
        </a>
      </div>
    </div>
  )
}

export default SocialLinks
