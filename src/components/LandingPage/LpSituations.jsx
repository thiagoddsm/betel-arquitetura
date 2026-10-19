"use client";

export default function LpSituations() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de explicar a situação do meu imóvel para avaliarmos os próximos passos."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "situations",
        page: "legalizacao",
      });
    }
  };

  const situations = [
    {
      title: "Imóvel ampliado ou reformado",
      desc: "Você construiu um segundo pavimento, cobertura, varanda ou garagem e a alteração não foi averbada na documentação.",
      icon: "🏗️",
    },
    {
      title: "Divergência de área no IPTU ou RGI",
      desc: "A metragem que consta no carnê da Prefeitura ou na certidão do cartório é diferente da área real construída.",
      icon: "📐",
    },
    {
      title: "Planejando vender, financiar ou inventariar",
      desc: "A negociação imobiliária ou a partilha de bens entre herdeiros encontra pendências técnicas e documentais no imóvel.",
      icon: "⚖️",
    },
    {
      title: "Abertura ou regularização de pequenos negócios",
      desc: "Você vai abrir loja, clínica ou escritório e precisa avaliar o imóvel antes de realizar investimentos e reformas.",
      icon: "🏪",
    },
    {
      title: "Divisão ou união de lotes (desmembramento)",
      desc: "Necessidade de individualizar terrenos ou agrupar lotes contíguos de acordo com o plano diretor da cidade.",
      icon: "🗺️",
    },
    {
      title: "Recebeu uma exigência ou não sabe por onde começar",
      desc: "Foi notificado pelo órgão municipal ou tem dúvidas sobre a real situação jurídica e técnica do seu patrimônio.",
      icon: "📋",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA] text-[#1E242B] border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#0F3B46] font-bold text-xs uppercase tracking-widest bg-[#E3EDF0] px-3 py-1 rounded">
            Identificação de Necessidades
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-[#121A1F] font-serif">
            Seu imóvel apresenta alguma destas situações?
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Cada caso possui características únicas e depende de uma análise técnica cuidadosa do imóvel e dos documentos disponíveis.
          </p>
        </div>

        {/* Grade de Situações */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {situations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded-xl p-6 shadow-sm hover:border-[#0F3B46]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl mb-3 block">{item.icon}</span>
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

        {/* CTA da Seção */}
        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex justify-center items-center gap-2 px-7 py-3.5 bg-[#0F3B46] hover:bg-[#164E5D] text-white font-bold text-sm uppercase tracking-wider rounded shadow transition-all"
          >
            <span>Quero explicar meu caso no WhatsApp</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
