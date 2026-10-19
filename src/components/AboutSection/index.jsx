"use client"

import SectionTitle from '@/components/SectionTitle'
import SectionItem from '@/components/SectionItem'
import './style.css'

const AboutSection = ({ id }) => {
  return (
    <section id={id} className="relative">
      
      {/* Background decorativo */}
      <div className="absolute inset-0 -z-10 bg-white pointer-events-none">
        <div className="grid grid-cols-[60%_1fr] w-full h-full">
          <div className="bg-[url('/about-bg.jpg')] bg-cover bg-center h-[300px] md:h-auto col-span-2 md:col-span-1 me-5" />
          <div className="bg-white" />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-[40%_1fr] md:grid-cols-[15%_1fr_1fr] w-full px-5 md:px-0">
          
          {/* Faixa lateral */}
          <div className="bg-primary/70 h-[300px] md:h-auto" />
          <div />

          {/* Conteúdo */}
          <div className="md:ps-12 py-12 md:py-20 col-span-2 md:col-start-3 bg-white">
            
            <div className="section-title-wrapper">
              <SectionTitle
                title="betel arquitetura"
                subtitle="Escritório de Arquitetura – Consultoria, Planejamento e Execução de Projetos em Niterói – RJ"
                align="start"
              />
            </div>

            <div className="flex flex-col gap-6 mt-14">
              <SectionItem
                title="Missão"
                description="Oferecer consultoria de projetos de arquitetura, contando com uma ampla gama de soluções que proporcionem tranquilidade ao cliente."
                divider={false}
              />
              <SectionItem
                title="Visão"
                description="Em cinco anos, ocupar uma posição de destaque no mercado de arquitetura e design de interiores, sendo reconhecida pela excelência na criação de projetos no estado do Rio de Janeiro."
                divider={false}
              />
              <SectionItem
                title="Valores"
                description="Identificar oportunidades de economia de custos nos projetos, primando pela qualidade e entregando um produto que esteja dentro da realidade do cliente."
                divider={false}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
