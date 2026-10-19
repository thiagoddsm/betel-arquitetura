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
      title: "Remembramento e Desmembramento de Lotes",
      desc: "Divisão ou unificação de terrenos com levantamento topográfico e projeto para aprovação municipal e abertura de matrícula no RGI.",
      tag: "Alta Intenção",
    },
    {
      title: "Planta e Memorial para Usucapião",
      desc: "Elaboração de peças técnicas, plantas de situação e memoriais descritivos que servem de apoio técnico ao processo de usucapião.",
      tag: "Apoio Técnico",
    },
    {
      title: "Projetos Arquitetônicos e Reformas",
      desc: "Desenvolvimento de projetos residenciais, comerciais e de interiores com a estrutura da Betel Arquitetura.",
      tag: "Arquitetura",
    },
    {
      title: "Consultoria para Imóveis Comerciais",
      desc: "Avaliação do ponto comercial, adequações de acessibilidade, licenciamento de atividades e viabilidade de funcionamento.",
      tag: "Pequenos Negócios",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F4F6F7] text-[#1E242B] border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#0F3B46] font-bold text-xs uppercase tracking-widest bg-[#E3EDF0] px-3 py-1 rounded">
            Escopo Complementar
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-[#121A1F] font-serif">
            Outros serviços que podem fazer parte do seu caso
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Além da legalização de imóveis concluídos, Roberto e a equipe técnica da Betel atuam em demandas complementares conforme a necessidade do seu patrimônio.
          </p>
        </div>

        {/* Grade de 4 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded-xl p-6 shadow-sm hover:border-[#0F3B46]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F3B46] bg-[#E3EDF0] px-2.5 py-0.5 rounded inline-block mb-3">
                  {item.tag}
                </span>
                <h3 className="font-bold text-[#121A1F] text-base mb-2">
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
        <div className="text-center mt-10">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-white border-2 border-[#0F3B46] text-[#0F3B46] hover:bg-[#0F3B46] hover:text-white font-bold text-sm uppercase tracking-wider rounded transition-all"
          >
            <span>Falar sobre minha necessidade</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
