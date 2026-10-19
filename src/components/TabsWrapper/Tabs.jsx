// import HomePortfolio from "@/components/HomePortfolio";

// const siteUrl = process.env.NEXT_PUBLIC_WP_API_URL;

// export const revalidate = 60; // ISR

// async function getCategories() {
//   const res = await fetch(
//     `${siteUrl}/wp-json/wp/v2/portfolio?per_page=50`,
//     {
//       next: { revalidate: 60 },
//     }
//   );

//   if (!res.ok) return [];

//   const data = await res.json();

//   // Coleta todas as categorias dos posts
//   const allCategories = data.flatMap(
//     (post) => post["category-portfolio"] || []
//   );

//   // Remove duplicadas
//   const uniqueCategories = allCategories.filter(
//     (cat, index, self) =>
//       index === self.findIndex((c) => c.id === cat.id)
//   );

//   return uniqueCategories.filter(
//     (cat) => cat.slug !== "sem-categoria"
//   );
// }

// export default async function Tabs() {
//   const categories = await getCategories();

//   return (
//     <section>
//       {/* Tabs como links (SEO-friendly) */}
//       <div className="bg-primary">
//         <nav className="container mx-auto flex flex-wrap justify-center">
//           <a
//             href="/portfolio"
//             className="px-6 py-5 font-semibold uppercase text-white hover:bg-white hover:text-primary"
//           >
//             Todos
//           </a>

//           {categories.map((category) => (
//             <a
//               key={category.id}
//               href={`/portfolio?categoria=${category.slug}`}
//               className="px-6 py-5 font-semibold uppercase text-white hover:bg-white hover:text-primary"
//             >
//               {category.name}
//             </a>
//           ))}
//         </nav>
//       </div>

//       {/* Conteúdo */}
//       <div className="pt-10 pb-16 bg-white">
//         <HomePortfolio />
//       </div>
//     </section>
//   );
// }



'use client';

import { useState } from 'react';
import HomePortfolio from "@/components/HomePortfolio";

export default function Tabs({ categories }) {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section>
      {/* Tabs */}
      <div className="bg-primary">
        <nav className="container mx-auto flex flex-wrap justify-center">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-5 font-semibold uppercase cursor-pointer transition
              ${
                !activeCategory
                  ? "bg-white text-primary"
                  : "text-white hover:bg-white hover:text-primary"
              }
            `}
          >
            Todos
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-5 font-semibold uppercase cursor-pointer transition
                ${
                  activeCategory === category.name
                    ? "bg-white text-primary"
                    : "text-white hover:bg-white hover:text-primary"
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Conteúdo */}
      <div className="pt-10 pb-16 bg-white">
        <HomePortfolio category={activeCategory} />
      </div>
    </section>
  );
}