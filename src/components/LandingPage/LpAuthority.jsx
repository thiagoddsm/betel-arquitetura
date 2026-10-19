"use client";

export default function LpAuthority() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de falar com você e sua equipe sobre a regularização do meu imóvel."
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
    <section id="sobre" className="py-16 md:py-20 bg-[#18232A] text-white border-b border-[#2B3B44]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Card do Arquiteto / Imagem de Apoio */}
          <div className="lg:col-span-5">
            <div className="bg-[#121A1F] border border-[#2B3B44] rounded-2xl p-6 text-center shadow-xl">
              <div className="w-24 h-24 rounded-full bg-[#1F3742] border-2 border-[#8FD5E8] flex items-center justify-center text-[#8FD5E8] font-bold text-3xl font-serif mx-auto mb-4">
                RM
              </div>
              <h3 className="text-xl font-bold text-white font-serif">
                Roberto Moura
              </h3>
              <p className="text-xs text-[#8FD5E8] font-medium mt-0.5">
                Arquiteto e Urbanista • CAU/BR A14965-9
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Sócio-fundador da Betel Arquitetura
              </p>
              <div className="mt-4 pt-4 border-t border-[#22313A] text-xs text-gray-400">
                Atuação em Niterói, São Gonçalo, Maricá e região
              </div>
            </div>
          </div>

          {/* Texto em 1ª Pessoa Definido no Briefing */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[#8FD5E8] font-bold text-xs uppercase tracking-widest bg-[#1F3742] px-3 py-1 rounded">
              Sobre o Arquiteto
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Experiência para orientar decisões sobre o seu imóvel
            </h2>

            <div className="space-y-4 text-sm text-[#D3DCE0] leading-relaxed">
              <p>
                Sou <strong className="text-white">Roberto Moura</strong>, arquiteto e urbanista, com <strong className="text-white">mais de 40 anos de atuação</strong> em projetos, consultoria técnica e demandas de legalização de imóveis.
              </p>
              <p>
                Ao longo dessa trajetória, trabalhei com necessidades residenciais, comerciais e corporativas. Hoje, meu atendimento está especialmente voltado a <strong className="text-white">proprietários, famílias e pequenos negócios</strong> que precisam entender a situação de um imóvel e organizar os próximos passos com responsabilidade.
              </p>
              <p>
                Sou sócio-fundador da <strong className="text-white">Betel Arquitetura</strong>, estrutura profissional que apoia e viabiliza cada etapa dessa experiência.
              </p>
            </div>

            <div className="pt-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCtaClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8FD5E8] hover:bg-[#a9e4f3] text-[#0A1A22] font-bold text-xs uppercase tracking-wider rounded transition-colors"
              >
                <span>Falar com a equipe</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
