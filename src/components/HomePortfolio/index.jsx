'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

export default function HomePortfolio({ category }) {
   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const siteUrl = process.env.NEXT_PUBLIC_WP_API_URL;

   useEffect(() => {
      const fetchPosts = async () => {
         try {
            setLoading(true);
            const response = await fetch(`${siteUrl}/wp-json/wp/v2/portfolio`);
            const data = await response.json();
            // Se tiver categoria, filtra
            const filteredPosts = category
               ? data.filter(post => post['category-portfolio']?.some(cat => cat.name === category))
               : data;

            setPosts(filteredPosts);
         } catch (error) {
            setPosts([]);
         } finally {
            setLoading(false);
         }
      };

      fetchPosts();
   }, [siteUrl, category]);

   const groupPosts = (posts, groupSize = 6) => {
      return posts.reduce((acc, post, index) => {
         const groupIndex = Math.floor(index / groupSize);
         if (!acc[groupIndex]) acc[groupIndex] = [];
         acc[groupIndex].push(post);
         return acc;
      }, []);
   };

   const getGridClasses = (index) => {
      switch (index) {
         case 0:
            return 'h-[300px] md:h-auto col-start-1 col-span-2 row-span-2 md:col-auto md:row-start-1 md:row-span-3';
         case 1:
            return 'col-start-3 md:col-start-2 md:row-start-1';
         case 2:
            return 'md:col-start-2 md:row-start-2 md:row-span-2';
         case 3:
            return 'row-start-4 col-start-1 md:col-start-3 md:row-start-1 md:row-span-3';
         case 4:
            return 'row-start-3 col-start-1 md:col-start-4 md:row-start-1 md:row-span-2';
         case 5:
            return 'h-[300px] md:h-auto col-start-2 md:col-start-4 col-span-2 md:col-span-1 row-span-2 md:row-span-1 row-start-3 md:row-start-3';
         default:
            return '';
      }
   };

   const groupedPosts = groupPosts(posts);

   if (loading) {
      return (
         <div className="flex justify-center items-center h-[300px]">
            <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
         </div>

      );
   }

   if (!posts.length) {
      return (
         <p className="container mx-auto text-center py-20">
            Nenhum portfólio cadastrado ainda.
         </p>
      );
   }

   return (
      <div className="mx-auto">

         {posts.length > 0 ?
            <Swiper
               key={category || 'all'}
               modules={[Navigation, Pagination]}
               navigation
               pagination={{
                  clickable: true,
                  renderBullet: function (index, className) {
                     return '<span class="' + className + '">' + (index + 1) + '</span>';
                  },
               }}
               spaceBetween={30}
               slidesPerView={1}
               className=''
            >
               {groupedPosts.map((group, groupIndex) => (
                  <SwiperSlide className="" key={groupIndex}>
                     <div className="px-5 md:px-0 md:h-[600px] grid gap-3 md:gap-6 container grid-cols-[1fr_1fr_1fr] auto-rows-auto mx-auto md:grid-cols-[40%_1fr_1fr_1fr] md:grid-rows-[50%_20%_30%]">
                        {group.map((post, idx) => {
                           const thumb = post?.featured_image_url || '';
                           const title = post?.title?.rendered || '';

                           return (
                              <div
                                 key={post.id}
                                 className={`bg-gray-100 hover:opacity-80 transition duration-300 ease-in-out ${getGridClasses(idx)}`}
                              >
                                 <Link href={`/portfolio/${post.slug}`} className="block h-full cursor-pointer">
                                    <div className="relative h-full">
                                       {thumb && (<img src={thumb} alt={title} className="w-full h-full object-cover" />)}
                                       <div className="absolute bottom-0 bg-light/90 p-2 md:p-4 w-full">
                                          <p className='text-xs md:text-base text-primary font-bold'>{title}</p>
                                          <div className='mt-[-6px]'>
                                             {post['category-portfolio']?.map(cat => (
                                                <span key={cat.id} className="text-xs md:text-sm text-primary mb-[-2]">{cat.slug}</span>
                                             ))}
                                          </div>
                                       </div>
                                    </div>
                                 </Link>
                              </div>
                           );
                        })}
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            :
            <p className='container text-center mx-auto'>Nenhum portfólio cadastrado ainda.</p>
         }
      </div>
   );
}