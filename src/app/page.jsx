import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'
import ServiceSection from '@/components/ServiceSection'
import ClientSection from '@/components/ClientSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'

import { 
  getAllPortfolio,
  getPageBySlug,
  getSeoFromPage,
  getSiteInfo,
  getSocialMenu 
} from '@/lib/wordpress'

export async function generateMetadata() {
  const post = await getPageBySlug('home') // slug da home no WP

  if (!post) {
    return {
      title: 'Betel Arquitetura',
      description: 'Arquitetura e legalização',
    }
  }

  const seo = getSeoFromPage(post)

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      url: process.env.NEXT_PUBLIC_SITE_URL
    },
  }
}

async function getServices() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/services`,
    { next: { revalidate: 10 } }
  )
  return res.json()
}

export default async function Home() {
  const posts = await getAllPortfolio(3)
  const siteInfo = await getSiteInfo()
  const socialMenuHtml = await getSocialMenu()
  const services = await getServices()

  return (
    <>
      <main>
        <Header id="home" slides={posts} />
        <AboutSection id="sobre"></AboutSection>
        <ServiceSection services={services} id="servicos"></ServiceSection>
        <ClientSection id="clientes"></ClientSection>
        <PortfolioSection id="portfolio"></PortfolioSection>
        <div className="h-[20px] bg-dark" />
        <ContactSection id="contato"></ContactSection>
        <Footer siteInfo={siteInfo} socialMenuHtml={socialMenuHtml} />
      </main>
    </>
  )
}

