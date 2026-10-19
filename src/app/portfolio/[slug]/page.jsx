import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MasonryGallery from '@/components/MasonryGallery'
import Link from "next/link";

import {
  getPostBySlug,
  getAllPortfolio,
  getSiteInfo,
  getSocialMenu,
  getSeoFromPage
} from '@/lib/wordpress'

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/portfolio?per_page=100`
  )

  if (!res.ok) return []

  const posts = await res.json()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'portfolio')

  if (!post) {
    return { title: 'Página não encontrada' }
  }

  const seo = getSeoFromPage(post)

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'article',
    },
  }
}

export default async function PortfolioSingle({ params }) {
  const { slug } = await params

  const post = await getPostBySlug(slug, 'portfolio')
  const allPosts = await getAllPortfolio()

  const siteInfo = await getSiteInfo()
  const socialMenuHtml = await getSocialMenu()

  if (!post) {
    return (
      <div className="text-center mt-10 min-h-[50vh] flex items-center justify-center text-gray-500">
        Portfólio não encontrado
      </div>
    )
  }

  const postIndex = allPosts.findIndex(p => p.slug === slug)

  const prevPost = allPosts[postIndex - 1] || null
  const nextPost = allPosts[postIndex + 1] || null

  return (
    <>
      <Header type="portfolio" slides={[post]} />

      <MasonryGallery post={post} />

      {/* Paginação */}
      <div className="bg-white">
        <div className="container mx-auto flex justify-between items-start px-8 md:px-4 py-8 gap-3">
          <div className="w-1/2 md:w-full">
            {prevPost && (
              <Link
                href={`/portfolio/${prevPost.slug}`}
                className="text-start font-bold text-primary hover:text-[#939393]"
              >
                anterior
                <p className="text-[#939393] font-bold text-sm md:text-3xl uppercase">
                  {prevPost.title.rendered}
                </p>
              </Link>
            )}
          </div>

          <div className="w-1/2 md:w-full text-right">
            {nextPost && (
              <Link
                href={`/portfolio/${nextPost.slug}`}
                className="font-bold text-primary hover:text-[#939393]"
              >
                próximo
                <p className="text-[#939393] font-bold text-sm md:text-3xl uppercase">
                  {nextPost.title.rendered}
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="h-[20px] bg-dark"></div>

      <Footer siteInfo={siteInfo} socialMenuHtml={socialMenuHtml} />
    </>
  )
}
