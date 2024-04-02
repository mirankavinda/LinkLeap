// import { Link } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { MenuIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Navbar = async (props: Props) => {
    return <header className="file:fixed right-0 left-0 top-0 py-4 px-8 bg-black/40 
    backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900
    justify-between">
        <aside className="flex items-center gap-[2px]">
            {<p className="text-xl font-bold cursor-pointer">linkLeap/</p>}
            {/* { <Image 
                src="/link-leap-logo.png"
                width={120}
                height={100}
                alt="link leap logo"
                className="shadow-sa cursor-pointer"
            /> } */}
        </aside>
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]
        hidden md:block">
            <ul className="flex items-center gap-6 list-none text-md text-[#fafafa]/60">
            <li>
                <Link href="#">Products</Link>
            </li>
            <li>
                <Link href="#">Clients</Link>
            </li>
            <li>
                <Link href="#">Resources</Link>
            </li>
            <li>
                <Link href="#">Docs</Link>
            </li>
            <li>
                <Link href="#">Pricing</Link>
            </li>
            </ul>
        </nav>
        <aside className=" flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {//wire up usr
                true ? 'Dashboard' : 'Get Started'}
          </span>
            </Link>
            {// wire up usr 
            }
            <MenuIcon className="md:hidden" />
        </aside>
  </header>
}

export default Navbar