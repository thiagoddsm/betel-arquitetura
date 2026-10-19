import SectionTitle from '@/components/SectionTitle'

export default async function ClientSection({ id }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/clientes?per_page=25`,
    { next: { revalidate: 10 } }
  )

  const posts = await res.json()

  if (!posts?.length) return null

  return (
    <section id={id}>
      <div className="px-5 md:px-0 py-12 md:py-16">
        <SectionTitle
          title="nossos clientes"
          dividerWidth="w-full md:w-[70px]"
        />
      </div>

      <div className="bg-[url('/bg-dotted.png')] bg-center bg-[length:auto_30%] md:bg-[length:100%_auto] bg-no-repeat px-5 md:px-0">
        <div className="container mx-auto bg-white p-6 md:p-16">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-14">
            {posts.map(post => (
              <img
                key={post.id}
                src={post.featured_image_url}
                alt={post.title?.rendered || 'Cliente'}
                className="mx-auto md:w-[80%]"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
