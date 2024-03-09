import React from 'react'

function Container({children}) {
  return (
    <div className='container mx-auto'>
        <div className='md:mx-8 lg:mx-12 xl:mx-24'>
            {children}
        </div>
    </div>
  )
}

export default Container