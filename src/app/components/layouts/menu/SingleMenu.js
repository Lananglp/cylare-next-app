import React from 'react'

function SingleMenu(props) {

    const {href, type, text} = props;

  return (
    <a href={href} className={`${type === "mainMenu" && 'mt-4 text-white hover:text-zinc-400'} ${type === "subMenu" && 'ps-2 text-zinc-400 hover:text-white hover:translate-x-1'} text-sm duration-200 block w-full`}>{text}</a>
  )
}

export default SingleMenu