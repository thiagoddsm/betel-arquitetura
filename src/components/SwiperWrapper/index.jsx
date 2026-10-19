'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './style.css'
import Ancora from '@/components/Ancora'
import { stripHTML } from '@/lib/utils'


// Componente seguro para HTML vindo do WordPress
const SafeHtml = ({ html }) => {
   const [content, setContent] = useState('')
   useEffect(() => {
      setContent(html)
   }, [html])

   if (!content) return null
   return <p className="text-primary font-semibold" dangerouslySetInnerHTML={{ __html: content }} />
}

const SwiperWrapper = ({ slides, type }) => {
   if (!slides || slides.length === 0) {
      return (
         <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            spaceBetween={50}
            className="h-full banner-slides"
         >
            <SwiperSlide className="h-full w-full">
               <div className="h-[600px] md:h-[750px] flex items-center justify-center bg-gray-200">
                  Nenhum slide disponível
               </div>
            </SwiperSlide>
         </Swiper>
      )
   }

   return (
      <Swiper
         modules={[Navigation]}
         slidesPerView={1}
         navigation={{
                nextEl: '.custom-button-next',
                prevEl: '.custom-button-prev',
         }}
         spaceBetween={50}
         className="h-full banner-slides"
         breakpoints={{
            0: { spaceBetween: 0 },
            768: { spaceBetween: 50 },
         }}
      >
         {slides && slides.length > 0 && (
            slides.map((post, index) => {
               const featuredImageUrl = post.featured_image_url

               return (
                  <SwiperSlide key={index} className='h-full w-full'>
                     <div className='h-[600px] md:h-[750px] relative'>
                        <div className='grid grid-rows-[60px_1fr] md:grid-rows-[80px_1fr] md:grid-cols-[1fr_auto_1fr] size-full'>
                           <div className='bg-neutral-800'></div>
                           <div
                              className='container-slide bg-cover bg-center row-span-2 px-5 md:px-0 relative'
                              style={{ backgroundImage: `url(${post.featured_image_url})` }}
                           >
                              <div className='grid grid-cols-[40%_1fr] md:grid-cols-[15%_1fr_1fr] grid-rows-flow size-full'>
                                 <div className='bg-primary/70 flex items-center h-full'></div>
                              </div>
                           </div>
                           <div className='size-full bg-transparent'></div>
                        </div>

                        <div className='absolute bottom-0 left-0 right-0 grid grid-rows-flow md:grid-cols-[1fr_auto_1fr] h-[50%]'>
                           <div className='size-full bg-white hidden md:block'></div>
                           <div className='container-slide'>
                              <div className='grid md:grid-cols-[15%_1fr_1fr] size-full'>
                                 <div className='col-span-2 bg-white flex items-center me-5 md:me-0'>
                                    <div className='p-5 md:p-2 md:p-12 bg-white flex flex-col justify-center items-start h-full'>
                                       <p className="text-primary font-semibold">
                                          {type === 'servico'
                                             ? 'Serviços'
                                             : type === 'blog'
                                                ? 'Blog'
                                                : stripHTML(post.excerpt.rendered)}
                                       </p>
                                       <h1 className='text-4xl md:text-7xl font-bold mb-5 uppercase line-clamp-2'>{stripHTML(post.title.rendered)}</h1>

                                       { type === 'home' && (
                                          <Ancora
                                             href={`/portfolio/${post.slug}`}
                                             classes="text-primary outline-primary outline-2 rounded-full px-12 py-2 font-bold"
                                             text="saiba mais"
                                          />
                                       )}
                                       
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className='size-full bg-primary'></div>
                        </div>
                     </div>
                  </SwiperSlide>
               )
            })
         )}

         {slides.length > 1 && (
            <>
               <div className="custom-button-prev custom-arrow cursor-pointer z-1">
                  <svg width="100%" height="100%" viewBox="0 0 11 20" fill="none">
                     <path
                        d="M10.4341 0.482966C10.7053 0.754138 10.7053 1.19379 10.4341 1.46497L1.61951 10.2796L10.4341 19.0942C10.7053 19.3654 10.7053 19.805 10.4341 20.0762C10.163 20.3474 9.7233 20.3474 9.45213 20.0762L0.38296 11.007C-0.01879 10.6053 -0.01879 9.9539 0.38296 9.55214L9.45213 0.482966C9.7233 0.211794 10.163 0.211794 10.4341 0.482966Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
               <div className="custom-button-next custom-arrow z-1 cursor-pointer right-0">
                  <svg width="100%" height="100%" viewBox="0 0 11 20" fill="none">
                     <path
                        d="M0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966Z"
                        fill="currentColor"
                     />
                  </svg>
               </div>
            </>
         )}

      </Swiper>
   )
}

export default SwiperWrapper
