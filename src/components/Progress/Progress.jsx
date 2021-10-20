import React from 'react'

import { Wrapper } from './Progress'

export default function Circle({ progress, color, interval }) {
  return (
    <>
      <Wrapper color={color}>
        {new Array(interval).fill(0).map((_, index) => (
            <div key={index} className={progress > index ? 'completed' : ''}></div>
          )
        )}
      </Wrapper>
    </>
  )
}