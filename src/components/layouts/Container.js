import React from 'react'

function Container({className, full, children}) {
  return (
    <div className={`${className} xl:container xl:mx-auto`}>
        <div className={`${full && 'mx-4 md:mx-8 lg:mx-24'} xl:mx-32`}>
            {children}
        </div>
    </div>
  )
}

export default Container