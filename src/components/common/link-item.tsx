import Link from 'next/link';
import React from 'react';

type IProps = {
  name: string;
  link: string;
};

const LinkItem = ({ name, link }: IProps) => {
  return (
    <Link className="font-bold text-base leading-lh28 tracking-wider text-smokyBlack bg-secondary py-0.8 px-3.2" href={link}>
      {name}
    </Link>
  );
};

export default LinkItem;
