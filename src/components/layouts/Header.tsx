import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import brandLogo from '../../assets/img/Gerícht.svg'
import { NavItem } from '../navbar'

function Header() {
  return (
    <header>
      <nav className="2xl:py-30 xl:py-4 py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                className="2xl:h-14 xl:h-10 "
                src={brandLogo}
                width={199}
                height={57}
                alt="Brand Logo"
              />
            </Link>

            <ul className="2xl:flex hidden items-center gap-8">
              <NavItem href="/" label="Home" />
              <NavItem href="/pages" label="Pages" />
              <NavItem href="/contact-us" label="Contact Us" />
              <NavItem href="/blog" label="Blog" />
              <NavItem href="/pages" label="Pages" />
              <NavItem href="/landing" label="Landing" />
            </ul>

            <ul className="md:flex hidden item-center gap-8">
              <NavItem
                href="/login-registration"
                label="Log in / registration"
              />
              <li className="relative">
                <div className="absolute left-1/2 -ml-0.5 w-0.5 2xl:h-14 xl:h-10 h-8 bg-gradient-radial" />
              </li>
              <NavItem href="/book-table" label="book table" />
            </ul>

            <svg
              className="2xl:hidden fill-white hover:cursor-pointer"
              width="32px"
              height="32px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
