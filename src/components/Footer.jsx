import React, { useState } from 'react'
import GitHubContributions from './canvas/GithubContributions'

const Footer = () => {
    const [showCredits, setShowCredits] = useState(false)
  return (
    <div className=' shadow-inner shadow-teal-300 border-t-2 border-teal-300 p-6 flex justify-center'>
      {/* <GitHubContributions /> */}
      <p className=' italic text-center mr-4'>Thank You For Visiting</p>
      <button className={`${showCredits ? 'bg-purple-800' : 'bg-purple-400'} rounded-md`}
      onClick={() => setShowCredits(prev => !prev)}
      >Credits</button>
      <div className={`${showCredits ? 'visible' : 'hidden'} shadow-md shadow-green-300 absolute bottom-48 bg-black p-6`}>
        <ol className='list-disc'>
            <li>Tutorial: https://www.youtube.com/watch?v=0fYi8SGA20k&list=WL&index=8</li>
            <li>3d Image in skills section: ttps://icons8.com/illustrations/illustration/3d-business-guy-working-on-a-computer</li>
            <li>3d Image in contact section: https://icons8.com/illustrations/illustration/business-3d-young-people-in-casual-clothes-standing</li>
            <li>Icons: https://icons8.com</li>
        </ol>
      </div>
    </div>
  )
}

export default Footer
