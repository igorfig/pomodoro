import React from 'react'

import { Progress } from './Progress'

export default function Circle({ progress }) {
  return (
    <>
      <Progress>
        <div className={progress >= 1 ? 'completed' : ''}></div>
        <div className={progress >= 2 ? 'completed' : ''}></div>
        <div className={progress >= 3 ? 'completed' : ''}></div>
        <div className={progress === 4 ? 'completed' : ''}></div>
      </Progress>
    </>
  )
}