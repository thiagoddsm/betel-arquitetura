'use client' // 🔹 necessário para usar useState e useEffect

import { useEffect, useState } from 'react'
import Link from 'next/link'

const MenuPrincipal = ({ classes, onLinkClick }) => {
  const [menuItems, setMenuItems] = useState([])
  const siteUrl = process.env.NEXT_PUBLIC_WP_API_URL

  useEffect(() => {
    // Substitua "14" pelo ID real do menu no WordPress
    fetch(`${siteUrl}/wp-json/wp/v2/navigation/14`)
      .then(res => res.json())
      .then(data => {
        const html = data?.content?.rendered || ''
        const parser = new DOMParser()
        const doc = parser.parseFromString(html, 'text/html')

        const links = Array.from(doc.querySelectorAll('li a')).map(link => {
          let href = link.getAttribute('href')
          
          const label = link.querySelector('span')?.textContent || link.textContent || 'Sem título'
          return { href, label }
        })

        setMenuItems(links)
      })
      .catch(err => console.error('Erro ao carregar MenuPrincipal:', err))
  }, [])

  return (
    <nav className="nav-menu md:h-full">
      <ul className={classes}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="md:mr-2 hover:bg-primary md:flex md:items-center md:h-full list-none"
          >
            <a
              href={item.href}
              onClick={onLinkClick}
              className="h-full flex items-center justify-center py-1 px-3"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuPrincipal