import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

function Index({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Index;
