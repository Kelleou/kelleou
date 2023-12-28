import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters'
import { Card } from './card.tsx'
import React, { useState } from 'react'
import { projects }from './projects.tsx'

export const Projects = () => {
  const [letterClass] = useState('text-animate')

  return (
    <div className="container md:container md:mx-auto text-center ">
      <h1 className='project-h1'>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={'Projects'.split('')}
          idx={1}
        />
      </h1>
      <div className="flex items-center justify-center ">
      <div className="grid grid-cols-1 m-5 content-center gap-10 md:grid-cols-3 ">
      {projects.map((project) => (<Card project={project}/>)
      )}</div>
      </div>
    </div>
  )
}
