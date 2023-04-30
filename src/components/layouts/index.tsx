import React from 'react'

type Props = {
  children: React.ReactNode
}

function Index({ children }: Props) {
  return (
    <>
      <header>header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Index
