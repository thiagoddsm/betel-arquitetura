"use client";

export default function LpCasesAndExperience() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Tenho uma situação no meu imóvel e gostaria de entender se vocês já orientaram casos parecidos."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "cases",
        page: "legalizacao",
      });
    }
  };

  const cases = [
    {
      type: "Residencial",
      title: "Ampliação de Pavimento e Habite-se",
      desc: "Orientação técnica e levantamento arquitetônico de acréscimo de área construída não averbado, preparando o processo para regularização junto ao órgão municipal.",
    },
    {
      type: "Comercial",
      title: "Adequação de Ponto e Alvará",
      desc: "Análise técnica de viabilidade e adequação às normas de acessibilidade e segurança para liberação de funcionamento de estabelecimento comercial.",
    },
    {
      type: "Documental",
      title: "Desmembramento e Acerto de Área",
      desc: "Levantamento e projeto de desmembramento de terreno com compatibilização entre o cadastro fiscal (IPTU) e a matrícula do Cartório de Imóveis (RGI).",
    },
  ];

  const corporateExperiences = [
    "Camil Alimentos",
    "Bradesco",
    "Santander",
    "Caixa",
  ];

  return (
    <section id="experiencias" className="py-16 md:py-20 bg-white text-[#1E242B] border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Casos Locais */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#0F3B46] font-bold text-xs uppercase tracking-widest bg-[#E3EDF0] px-3 py-1 rounded">
            Experiência Prática
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-[#121A1F] font-serif">
            Situações que já orientamos
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Exemplos de demandas comuns atendidas com responsabilidade técnica e clareza de encaminhamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3B46] bg-[#E3EDF0] px-2.5 py-0.5 rounded inline-block mb-3">
                  {item.type}
                </span>
                <h3 className="font-bold text-base text-[#121A1F] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 mb-16">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex justify-center items-center gap-2 px-7 py-3 bg-[#0F3B46] hover:bg-[#164E5D] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-all"
          >
            <span>Tenho uma situação parecida</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Faixa Corporativa Discreta */}
        <div className="pt-12 border-t border-gray-200 text-center max-w-4xl mx-auto">
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
            Uma trajetória construída em projetos de diferentes portes
          </h4>
          <p className="text-xs text-gray-500 max-w-2xl mx-auto mb-6 leading-relaxed">
            Ao longo de sua experiência, Roberto participou de demandas técnicas e projetos que envolveram organizações como:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {corporateExperiences.map((brand, idx) => (
              <div
                key={idx}
                className="px-5 py-2.5 rounded-lg bg-[#F1F3F5] border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700"
              >
                {brand}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-gray-400 mt-4 italic">
            * Experiências e atuações técnicas ao longo da trajetória profissional.
          </p>
        </div>

      </div>
    </section>
  );
}
