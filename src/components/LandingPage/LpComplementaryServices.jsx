"use client";

export default function LpComplementaryServices() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de entender mais sobre serviços complementares para meu imóvel."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "services_complementary",
        page: "legalizacao",
      });
    }
  };

  const services = [
    {
      title: "Remembramento e desmembramento",
      desc: "Divisão de lotes ou unificação de terrenos contíguos com levantamento topográfico e projeto para aprovação municipal e cartorial.",
      tag: "Terrenos & Lotes",
    },
    {
      title: "Planta e memorial para usucapião",
      desc: "Elaboração de peças técnicas, plantas de situação e memoriais descritivos que servem de apoio técnico ao processo de usucapião.",
      tag: "Apoio Técnico",
    },
    {
      title: "Projetos arquitetônicos e reformas",
      desc: "Desenvolvimento de projetos residenciais, comerciais e de interiores, com a estrutura institucional da Betel Arquitetura.",
      tag: "Arquitetura",
    },
    {
      title: "Consultoria para imóveis comerciais",
      desc: "Avaliação prévia do ponto comercial, adequações de acessibilidade, licenciamento de atividades e viabilidade de funcionamento.",
      tag: "Pequenos Negócios",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
            Escopo Complementar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
            Outros serviços que podem fazer parte do seu caso
          </h2>
          <p className="text-[#292D2A]/80 mt-4 text-base sm:text-lg leading-relaxed font-light">
            Além da legalização de edificações concluídas, Roberto Moura e a estrutura da Betel Arquitetura atuam em demandas técnicas complementares conforme a necessidade do seu patrimônio.
          </p>
        </div>

        {/* Grade de 4 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8DFD0] rounded-[3px] p-7 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.03)] hover:border-[#AD9166]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#AD9166] bg-[#E8DFD0]/40 px-2.5 py-1 rounded-[2px] inline-block mb-4">
                  {item.tag}
                </span>
                <h3 className="font-serif font-normal text-lg text-[#203B32] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8DFD0]/60">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#203B32] group-hover:text-[#AD9166] transition-colors"
                >
                  <span>Falar sobre esta necessidade</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
