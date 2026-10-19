'use client' // ✅ Client Component, necessário para usar useEffect

import { useEffect, useState } from 'react'
import './style.css'

export const SocialMenu = ({ classes }) => {
  const [menuHtml, setMenuHtml] = useState('')

  // NEXT_PUBLIC_* permite usar variáveis de ambiente no cliente
  const siteUrl = process.env.NEXT_PUBLIC_WP_API_URL

  useEffect(() => {
    if (!siteUrl) return

    fetch(`${siteUrl}/wp-json/wp/v2/navigation?slug=redes-sociais`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setMenuHtml(data[0].content.rendered)
        }
      })
      .catch(err => console.error('Erro ao carregar menu:', err))
  }, [siteUrl])

  return <nav className={classes} dangerouslySetInnerHTML={{ __html: menuHtml }} />
}

export default SocialMenu