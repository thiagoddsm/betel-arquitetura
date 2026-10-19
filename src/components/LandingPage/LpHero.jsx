"use client";

import Image from "next/image";

export default function LpHero() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Arquiteto Roberto Moura. Gostaria de solicitar uma análise técnica inicial para regularização do meu imóvel."
  );

  const handleHeroCta = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "hero",
        page: "legalizacao",
      });
    }
  };

  return (
    <section className="relative bg-[#F8F7F3] text-[#292D2A] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E8DFD0]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Texto editorial */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Identificação sutil */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8DFD0]/60 border border-[#AD9166]/30 text-[#203B32] text-[11px] font-semibold tracking-widest uppercase rounded-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]" />
              LEGALIZAÇÃO DE IMÓVEIS
            </div>

            {/* Headline Principal com DM Serif Display */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#203B32] tracking-tight leading-[1.12]">
              Seu imóvel em ordem. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#344F43]">O próximo passo, com segurança.</span>
            </h1>

            {/* Subtítulo Objetivo */}
            <p className="text-[#292D2A]/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Orientação técnica para regularização de imóveis com <strong className="font-semibold text-[#203B32]">Roberto Moura</strong>, arquiteto e urbanista, sócio-fundador da Betel Arquitetura.
            </p>

            {/* Botões de Conversão */}
            <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleHeroCta}
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs md:text-sm uppercase tracking-widest rounded-[2px] shadow-sm hover:shadow transition-all"
              >
                <span>Solicitar análise inicial</span>
                <span className="text-[#AD9166]">&rarr;</span>
              </a>

              <a
                href="#como-funciona"
                className="inline-flex justify-center items-center px-6 py-4 text-[#203B32] hover:text-[#344F43] font-medium text-xs md:text-sm uppercase tracking-widest border border-[#E8DFD0] hover:border-[#AD9166]/50 bg-white/60 transition-all rounded-[2px]"
              >
                Entenda como funciona
              </a>
            </div>

            {/* Observação discreta e responsável */}
            <p className="text-[11px] text-[#73766F] leading-normal pt-1 max-w-xl">
              * Cada caso depende de análise técnica individual e do atendimento às normas dos órgãos municipais e cartoriais competentes.
            </p>

          </div>

          {/* Coluna Direita: Fotografia arquitetônica contemporânea com cantos elegantes */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Moldura de fundo sutil em tom areia / bronze */}
              <div className="absolute -inset-2 bg-[#E8DFD0]/70 rounded-[4px] -rotate-1 transform transition-transform group-hover:rotate-0 duration-500" />
              
              <div className="relative rounded-[3px] overflow-hidden bg-[#203B32] border border-[#E8DFD0] shadow-xl">
                <img
                  src="/services-bg.jpg"
                  alt="Arquitetura residencial e regularização de imóveis - Betel Arquitetura"
                  className="w-full h-[380px] sm:h-[440px] md:h-[480px] object-cover object-center filter saturate-[0.95] contrast-[1.02]"
                />
                
                {/* Overlay sutil na base da imagem */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#203B32]/85 via-[#203B32]/20 to-transparent" />
                
                {/* Legenda editorial na foto */}
                <div className="absolute bottom-6 left-6 right-6 text-[#F8F7F3]">
                  <p className="text-[10px] tracking-widest uppercase font-semibold text-[#AD9166]">
                    Atuação Técnica Especializada
                  </p>
                  <p className="font-serif text-lg font-normal text-white mt-0.5">
                    Niterói, São Gonçalo, Maricá e região
                  </p>
                  <p className="text-xs text-[#E8DFD0] mt-1 font-light">
                    Soluções sob medida para proprietários, famílias e negócios.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
