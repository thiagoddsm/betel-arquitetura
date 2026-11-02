"use client";

import Image from "next/image";
import { trackEvent } from "@/lib/tracking";

export default function LpHero() {
  const whatsappNumber = "5521997339287";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Vim pelo site e gostaria de solicitar uma análise inicial para meu imóvel."
  );

  const handleHeroCta = () => {
    trackEvent("whatsapp_click", {
      position: "hero",
      page: "legalizacao-de-imoveis",
    });
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
              LEGALIZAÇÃO E REGULARIZAÇÃO DE IMÓVEIS
            </div>

            {/* Headline Principal com serifa refinada */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#203B32] tracking-tight leading-[1.14]">
              Legalização de imóveis em Niterói, São Gonçalo e Maricá
            </h1>

            {/* Subtítulo Objetivo e Credenciais Claras */}
            <p className="text-[#292D2A]/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Orientação técnica e condução de processos com <strong className="font-semibold text-[#203B32]">Roberto Moura</strong>, arquiteto e urbanista (CAU/BR A14965-9), sócio-fundador da Betel Arquitetura, com mais de 40 anos de prática profissional.
            </p>

            {/* Botões de Conversão */}
            <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleHeroCta}
                className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs sm:text-sm tracking-wider rounded-[3px] shadow-sm hover:shadow transition-all"
              >
                <span>Solicitar análise inicial pelo WhatsApp</span>
                <span className="text-[#AD9166]">&rarr;</span>
              </a>

              <a
                href="#como-funciona"
                className="inline-flex justify-center items-center px-6 py-4 text-[#203B32] hover:text-[#344F43] font-medium text-xs sm:text-sm tracking-wider border border-[#E8DFD0] hover:border-[#AD9166]/50 bg-white/60 transition-all rounded-[3px]"
              >
                Entender como funciona
              </a>
            </div>

            {/* Observação discreta e responsável */}
            <p className="text-[11px] text-[#73766F] leading-normal pt-1 max-w-xl">
              * Cada caso depende de vistoria, análise individual dos documentos e atendimento aos parâmetros das normas municipais e cartorárias vigentes.
            </p>

          </div>

          {/* Coluna Direita: Fotografia autêntica de Roberto Moura com moldura editorial */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Moldura de fundo sutil em tom areia / bronze */}
              <div className="absolute -inset-2 bg-[#E8DFD0]/70 rounded-[4px] -rotate-1 transform transition-transform group-hover:rotate-0 duration-500" />
              
              <div className="relative rounded-[3px] overflow-hidden bg-[#203B32] border border-[#E8DFD0] shadow-xl">
                <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px]">
                  <Image
                    src="/roberto-moura.png"
                    alt="Roberto Moura - Arquiteto e Urbanista CAU/BR A14965-9"
                    fill
                    className="object-cover object-top filter contrast-[1.03]"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  />
                </div>
                
                {/* Overlay sutil na base da foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#203B32]/90 via-[#203B32]/25 to-transparent pointer-events-none" />
                
                {/* Legenda editorial na foto */}
                <div className="absolute bottom-6 left-6 right-6 text-[#F8F7F3]">
                  <p className="text-[10px] tracking-widest uppercase font-semibold text-[#AD9166]">
                    Responsável Técnico
                  </p>
                  <p className="font-serif text-xl font-normal text-white mt-0.5">
                    Roberto Moura
                  </p>
                  <p className="text-xs text-[#E8DFD0] mt-1 font-light">
                    Arquiteto e Urbanista • CAU/BR A14965-9
                  </p>
                  <p className="text-[11px] text-[#E8DFD0]/80 mt-0.5 font-light">
                    Atuação em Niterói, São Gonçalo, Maricá e Rio de Janeiro
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
