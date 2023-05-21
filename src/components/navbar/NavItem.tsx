import React from 'react';
import Link from 'next/link';

interface IProps {
  href: string;
  label: string;
}

function NavItem({ href, label }: IProps) {
  return (
    <li>
      <Link
        href={href}
        className="font-normal text-base leading-7 block text-white capitalize sm:p-2.5 md:px-3 2xl:px-4"
      >
        {label}
      </Link>
    </li>
  );
}

export default NavItem;
