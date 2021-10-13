import React from 'react'

import { Wrapper } from './Progress'

export default function Circle({ progress, color }) {
  return (
    <>
      <Wrapper color={color}>
        <div className={progress >= 1 ? 'completed' : ''}></div>
        <div className={progress >= 2 ? 'completed' : ''}></div>
        <div className={progress >= 3 ? 'completed' : ''}></div>
        <div className={progress === 4 ? 'completed' : ''}></div>
      </Wrapper>
    </>
  )
}