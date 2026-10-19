"use client";

export default function LpAuthority() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de falar diretamente sobre a situação e regularização do meu imóvel."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "about",
        page: "legalizacao",
      });
    }
  };

  return (
    <section id="roberto-moura" className="py-20 md:py-28 bg-[#203B32] text-[#F8F7F3] border-b border-[#344F43]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Card Editorial do Arquiteto */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#1A312A] border border-[#344F43] rounded-[3px] p-8 md:p-10 text-center shadow-xl">
              <div className="w-24 h-24 rounded-full bg-[#203B32] border-2 border-[#AD9166] flex items-center justify-center text-[#AD9166] font-serif font-normal text-3xl mx-auto mb-6">
                RM
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
              
              <div className="mt-8 pt-6 border-t border-[#344F43] text-xs text-[#E8DFD0]/80 space-y-2 text-left">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]"></span>
                  <span>Sócio-fundador da Betel Arquitetura</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]"></span>
                  <span>Mais de 40 anos de atuação profissional</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]"></span>
                  <span>Atendimento em Niterói, SG, Maricá e região</span>
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
              <span className="italic text-[#E8DFD0]">Atendimento próximo.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#E8DFD0]/90 leading-relaxed font-light">
              <p>
                Roberto Moura é arquiteto e urbanista e atua na orientação técnica de processos de regularização imobiliária. Seu trabalho busca esclarecer as particularidades de cada imóvel e orientar o cliente sobre os procedimentos necessários para encaminhar seu caso.
              </p>
              <p>
                Com <strong className="font-semibold text-white">mais de 40 anos de atuação profissional</strong> em projetos, consultoria técnica e demandas de legalização, seu foco está voltado ao atendimento direto a proprietários, famílias e pequenos negócios que necessitam de segurança jurídica e responsabilidade técnica.
              </p>
              <p>
                Como sócio-fundador da <strong className="font-semibold text-white">Betel Arquitetura</strong>, Roberto alia seu conhecimento prático das exigências municipais e cartoriais a uma estrutura institucional sólida de projetos e consultoria.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#AD9166] hover:bg-[#c2a373] text-[#203B32] font-semibold text-xs uppercase tracking-widest rounded-[2px] transition-all shadow-sm"
              >
                <span>Falar com o arquiteto</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
