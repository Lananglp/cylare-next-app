import React from 'react'

function Container({children}) {
  return (
    <div className='container mx-auto'>
        <div className='md:mx-24 mx-8'>
            {children}
        </div>
    </div>
  )
}

export default Container