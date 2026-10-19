const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

import { stripHTML } from "./utils"

// 🔹 Buscar UM portfolio pelo slug
export async function getPostBySlug(slug, posttype) {
  const res = await fetch(
    `${WP_API_URL}/wp-json/wp/v2/${posttype}?slug=${slug}&_embed`,
    { next: { revalidate: 10 } } // ISR 60s
  )

  if (!res.ok) return null

  const data = await res.json()
  return data[0] || null
}

export async function getPageBySlug(slug) {
  const res = await fetch(
    `${WP_API_URL}/wp-json/wp/v2/pages?slug=${slug}&_embed`,
    { next: { revalidate: 10 } } // ISR 60s
  )

  if (!res.ok) return null

  const data = await res.json()
  return data[0] || null
}

// 🔹 Buscar TODOS os portfolios
export async function getAllPortfolio(number = 100) {
  const res = await fetch(
    `${WP_API_URL}/wp-json/wp/v2/portfolio?per_page=${number}&_embed`,
    { next: { revalidate: 10 } }
  )

  if (!res.ok) return []

  return res.json()
}

// 🔹 Buscar TODOS os portfolios
export async function getAllService(number = 100) {
  const res = await fetch(
    `${WP_API_URL}/wp-json/wp/v2/services?per_page=${number}&_embed`,
    { next: { revalidate: 10 } }
  )

  if (!res.ok) return []

  return res.json()
}

// 🔹 Buscar dados do site (Footer, título, etc)
export async function getSiteInfo() {

  try {
    const res = await fetch(`${WP_API_URL}/wp-json`)
    const data = await res.json()

    return {
      name: data.name,
      description: data.description,
      homeUrl: siteUrl
    }
  } catch (error) {
    console.error('Erro ao buscar informações do site:', error)
    return {
      name: 'Betel Arquitetura',
      description: 'Arquitetura e legalização',
      homeUrl: siteUrl
    }
  }
}

// 🔹 Buscar menu social do WordPress
export async function getSocialMenu() {

  try {
    const res = await fetch(`${WP_API_URL}/wp-json/wp/v2/navigation?slug=redes-sociais`)
    const data = await res.json()

    if (data.length > 0) {
      return data[0].content.rendered
    }

    return ''
  } catch (error) {
    console.error('Erro ao buscar Social Menu:', error)
    return ''
  }
}

// 🔹 SEO a partir do portfolio
export function getSeoFromPage(post) {

  return {
    title:
      stripHTML(post?.yoast_head_json?.title) ||
      stripHTML(post?.title?.rendered) ||
      'Betel Arquitetura',
    description:
      stripHTML(post?.yoast_head_json?.description) ||
      stripHTML(post?.excerpt?.rendered) ||
      'Arquitetura e legalização',
  }
}