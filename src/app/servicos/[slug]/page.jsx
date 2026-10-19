import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";

import { 
  getPostBySlug,
  getSeoFromPage,
  getSiteInfo,
  getSocialMenu
} from '@/lib/wordpress'

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/services?per_page=100`
  )

  if (!res.ok) return []

  const posts = await res.json()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug, 'services')

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

const siteUrl = process.env.NEXT_PUBLIC_WP_API_URL;
const endpoint = "/wp-json/wp/v2/services";

async function getAllServices() {
  const res = await fetch(`${siteUrl}${endpoint}?per_page=100`, {
    next: { revalidate: 10 }, // ISR
  });

  if (!res.ok) return [];
  return res.json();
}

export default async function SinglePostService({ params }) {
  const { slug } = await params;

  const allPosts = await getAllServices();
  const postIndex = allPosts.findIndex((p) => p.slug === slug);
  const post = allPosts[postIndex];

  const siteInfo = await getSiteInfo()
  const socialMenuHtml = await getSocialMenu()

  if (!post) {
    return (
      <div className="text-center mt-10 min-h-[50vh] flex items-center justify-center text-gray-500">
        Serviço não encontrado.
      </div>
    );
  }

  const prevPost = allPosts[postIndex - 1] || null;
  const nextPost = allPosts[postIndex + 1] || null;

  return (
    <>
      <Header type="servico" slides={[post]} />

      <div className="py-20">
        <article id={post.id}>
          <div className="container mx-auto mt-2 px-4 md:px-12">
            <div className="flex gap-1">
              <p className="inline m-0">
                <span className="font-bold">{post.title.rendered} - </span>
                {post.excerpt.rendered.replace(/<\/?p>/g, "")}
              </p>
            </div>

            <div
              className="pt-16"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </article>
      </div>

      {/* Paginação */}
      <div className="bg-white">
        <div className="container mx-auto flex justify-between items-start px-8 md:px-4 py-8 gap-3">
          <div className="w-1/2 md:w-full">
            {prevPost && (
              <Link
                href={`/servicos/${prevPost.slug}`}
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
                href={`/servicos/${nextPost.slug}`}
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

      <ContactSection
        formTitle="orçamento"
        formSubtitle="Quero cotar esse serviço com a Betel Arquitetura"
      />

      <Footer siteInfo={siteInfo} socialMenuHtml={socialMenuHtml} />
    </>
  );
}
