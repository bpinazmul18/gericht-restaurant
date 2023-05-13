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
        className="font-normal text-base leading-7 block text-white capitalize 2xl:py-2 2xl:px-4 p-4"
      >
        {label}
      </Link>
    </li>
  );
}

export default NavItem;
