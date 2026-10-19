'use client'

import SectionTitle from '@/components/SectionTitle'
import SectionItem from '@/components/SectionItem'

export default function ServiceSection({ services, id }) {
   return (
      <section id={id} className="bg-white">

         <div className='relative'>
            {/* Título fixo */}
            <div className="sticky top-0 z-40 bg-white lg:h-[28vh]">
               <div className="container mx-auto px-5 md:px-12 py-12 lg:py-8">
                  <SectionTitle
                     title="nossos serviços"
                     subtitle="Descubra nossa expertise em: Projetos de Arquitetura, construção, gerenciamento de obra e planejamento."
                     align="start"
                     divider
                  />
               </div>
            </div>
            {/* Serviços */}
            {services.map((post, index) => {
               const isLast = index === services.length - 1

               return (
                  <div
                     key={post.id}
                     className={`bg-white lg:h-[72vh] ${!isLast ? 'sticky top-[-72vh] md:top-40' : 'relative'}`}
                     style={{ zIndex: index + 1 }}
                  >
                     <div className="absolute top-0 size-full -z-1">
                        <div className="grid grid-cols-[1fr_1fr] grid-flow-row size-full relative bg-white">
                           <div></div>
                           <div style={{
                              backgroundImage: `url(${post.featured_image_url})`,
                           }} className="h-[300px] md:h-auto row-start-1 bg-cover bg-center col-span-2 md:col-start-2 md:col-span-1"></div>
                           <div className="absolute size-full">
                              <div className="container grid grid-cols-[1fr_1fr_15%] size-full ms-auto h-[300px] md:h-full">
                                 <div className="size-full col-start-3 bg-primary/70"></div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="container mx-auto px-5 md:px-12 grid md:grid-cols-2 gap-0 items-center size-full">

                        <div className='h-[300px] md:hidden'></div>
                        <div className='py-12'>
                           {/* Texto */}
                           <SectionItem
                              link={`/servicos/${post.slug}`}
                              title={post.title.rendered}
                              description={post.excerpt.rendered.replace(/<\/?p>/g, '')}
                              divider
                           />

                        </div>


                        {/* Imagem */}
                        {/* <div
                           className="h-[72vh] bg-cover bg-center"
                           style={{
                              backgroundImage: `url(${post.featured_image_url})`,
                           }}
                        /> */}
                     </div>
                  </div>
               )
            })}
         </div>

         <div className='h-[50px] bg-white'></div>
      </section>
   )
}
