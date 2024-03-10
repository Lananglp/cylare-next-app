import React from 'react'

function Container({children}) {
  return (
    <div className='xl:container xl:mx-auto'>
        <div className='xl:mx-32'>
            {children}
        </div>
    </div>
  )
}

export default Container