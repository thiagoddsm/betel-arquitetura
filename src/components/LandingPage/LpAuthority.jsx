"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/tracking";

export default function LpAuthority() {
  const whatsappNumber = "5521997339287";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de falar com você sobre o meu caso de regularização de imóvel."
  );

  const handleCtaClick = () => {
    trackEvent("whatsapp_click", {
      position: "about",
      page: "legalizacao-de-imoveis",
    });
  };

  return (
    <section id="roberto-moura" className="py-20 md:py-28 bg-[#203B32] text-[#F8F7F3] border-b border-[#344F43]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Card Editorial do Arquiteto com Foto Autêntica */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#1A312A] border border-[#344F43] rounded-[3px] p-6 sm:p-8 text-center shadow-xl">
              
              {/* Moldura com Foto Real */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full overflow-hidden border-2 border-[#AD9166] shadow-md mb-6 bg-[#203B32]">
                <Image
                  src="/roberto-moura.png"
                  alt="Roberto Moura - Arquiteto e Urbanista CAU/BR A14965-9"
                  fill
                  className="object-cover object-top"
                  sizes="180px"
                />
              </div>

              <h3 className="font-serif text-2xl font-normal text-white">
                Roberto Moura
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#AD9166] font-semibold mt-1.5">
                Arquiteto e Urbanista
              </p>
              <div className="inline-block mt-3 px-3 py-1 bg-[#203B32] border border-[#AD9166]/30 text-[11px] text-[#E8DFD0] rounded-[2px]">
                CAU/BR A14965-9
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#344F43] text-xs text-[#E8DFD0]/80 space-y-2.5 text-left">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]"></span>
                  <span>Sócio-fundador da Betel Arquitetura</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]"></span>
                  <span>Mais de 40 anos de prática profissional</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]"></span>
                  <span>Atendimento em Niterói, São Gonçalo, Maricá e RJ</span>
                </p>
              </div>
            </div>
          </div>

          {/* Texto Biográfico em Coluna Editorial */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block">
              Liderança Técnica & Proximidade
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              Experiência técnica. <br />
              <span className="italic text-[#E8DFD0]">Atendimento próximo e responsável.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#E8DFD0]/90 leading-relaxed font-light">
              <p>
                Roberto Moura é arquiteto e urbanista (CAU/BR A14965-9) e atua na orientação técnica de processos de regularização imobiliária. Seu trabalho busca esclarecer as particularidades de cada imóvel e orientar o cliente sobre os procedimentos necessários para encaminhar seu caso com clareza.
              </p>
              <p>
                Com <strong className="font-semibold text-white">mais de 40 anos de prática profissional</strong> em projetos, consultoria técnica e demandas de legalização, seu foco está voltado ao atendimento direto a proprietários, famílias e empresas que buscam segurança documental, responsabilidade técnica e previsibilidade nos trâmites.
              </p>
              <p>
                Como sócio-fundador da <strong className="font-semibold text-white">Betel Arquitetura</strong>, Roberto alia seu profundo conhecimento prático das exigências municipais e cartoriais de Niterói, São Gonçalo, Maricá e Rio de Janeiro à estrutura de apoio técnico do escritório.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#AD9166] hover:bg-[#c2a373] text-[#203B32] font-semibold text-xs sm:text-sm tracking-wider rounded-[3px] transition-all shadow-sm"
              >
                <span>Falar com Roberto Moura</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
