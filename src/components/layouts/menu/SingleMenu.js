'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function SingleMenu(props) {

    const {href, type, text} = props;

    const route = usePathname();

  return (
    <Link href={href} className={`
      ${type === "mainMenu" && `mt-4 ${href === route ? 'link-primary' : 'text-white hover:text-zinc-400'}`} 
      ${type === "subMenu" && `ps-2 ${href === route ? 'link-primary translate-x-1' : 'text-zinc-400 hover:text-white hover:translate-x-1'}`} text-sm duration-200 block w-full`}>{text}
    </Link>
  )
}

export default SingleMenu