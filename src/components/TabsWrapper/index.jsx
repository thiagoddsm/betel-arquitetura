import Tabs from '@/components/TabsWrapper/Tabs';

const siteUrl = process.env.NEXT_PUBLIC_WP_API_URL;

export const revalidate = 10;

async function getCategories() {
  const res = await fetch(
    `${siteUrl}/wp-json/wp/v2/portfolio?per_page=50`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) return [];

  const data = await res.json();

  const allCategories = data.flatMap(
    post => post["category-portfolio"] || []
  );

  return allCategories.filter(
    (cat, index, self) =>
      index === self.findIndex(c => c.id === cat.id) &&
      cat.slug !== 'sem-categoria'
  );
}

export default async function TabsWrapper() {
  const categories = await getCategories();
  return <Tabs categories={categories} />;
}
