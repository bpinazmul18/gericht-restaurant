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
        className="block text-white capitalize 2xl:p-4 xl:p-2 p-1"
      >
        {label}
      </Link>
    </li>
  );
}

export default NavItem;
