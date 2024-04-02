'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname()

    return <nav className=" dark:bg-black h-screen overflow-scroll justify-between
    flex items-center flex-col"></nav>
}

export default MenuOptions