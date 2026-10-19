'use client'

import Link from 'next/link'

export default function AncoraButton({
  text = 'saiba mais',
  classes = 'text-primary border-primary border-2 rounded-full px-12 py-2 font-bold',
  href = '#',
  children,
}) {
  return (
    <Link href={href} className={classes}>
      {children ?? text}
    </Link>
  )
}