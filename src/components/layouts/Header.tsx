import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import brandLogo from '../../assets/img/Gerícht.svg';
import { NavItem } from '../navbar';
import { useToggle } from '@/hooks/useToggle';

function Header() {
  const [isActive, setActive] = useToggle(false);

  return (
    <header>
      <nav className="2xl:py-30 xl:py-4 py-3">
        <div className="container relative">
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

            <ul className="2xl:flex hidden items-center gap-4">
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

            {isActive ? (
              <svg
                onClick={() => setActive()}
                className="fill-white hover:cursor-pointer"
                width="32px"
                height="32px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            ) : (
              <svg
                onClick={() => setActive()}
                className="2xl:hidden fill-white hover:cursor-pointer"
                width="32px"
                height="32px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            )}
          </div>

          {/* Mobile nav  */}
          <div
            className={
              isActive
                ? 'absolute w-full overflow-hidden z-10 top-[calc(50% - 100px)] left-0 flex flex-col bg-slate-950'
                : 'hidden'
            }
          >
            <ul className="2xl:flex items-center gap-8 p-5">
              <NavItem href="/" label="Home" />
              <NavItem href="/pages" label="Pages" />
              <NavItem href="/contact-us" label="Contact Us" />
              <NavItem href="/blog" label="Blog" />
              <NavItem href="/pages" label="Pages" />
              <NavItem href="/landing" label="Landing" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
