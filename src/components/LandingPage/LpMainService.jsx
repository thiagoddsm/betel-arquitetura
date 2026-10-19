"use client";

export default function LpMainService() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de entender o diagnóstico técnico necessário para o meu imóvel."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "technical_scope",
        page: "legalizacao",
      });
    }
  };

  const dimensions = [
    {
      title: "Conformidade Física",
      subtitle: "Edificação existente",
      desc: "Conferência das áreas construídas reais, recuos, gabarito e condições de habitabilidade in loco.",
      icon: (
        <svg className="w-5 h-5 stroke-[#AD9166]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" />
        </svg>
      ),
    },
    {
      title: "Conformidade Documental",
      subtitle: "Registros e certidões",
      desc: "Cruzamento entre a matrícula do RGI, histórico do IPTU, licenças municipais e certidões fiscais.",
      icon: (
        <svg className="w-5 h-5 stroke-[#AD9166]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "Legislação & Parâmetros",
      subtitle: "Órgãos competentes",
      desc: "Identificação das normas urbanísticas municipais aplicáveis (Plano Diretor, Código de Obras ou Mais-Valia).",
      icon: (
        <svg className="w-5 h-5 stroke-[#AD9166]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
            Escopo Técnico
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
            O que é analisado no seu imóvel?
          </h2>
          <p className="text-[#292D2A]/80 mt-4 text-base sm:text-lg leading-relaxed font-light">
            O trabalho técnico não se limita a desenhos. Trata-se de uma leitura minuciosa que conecta as condições reais da edificação às exigências dos órgãos municipais e cartoriais.
          </p>
        </div>

        {/* Três dimensões técnicas de análise — sem duplicar a jornada do cliente */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {dimensions.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F7F3] border border-[#E8DFD0] rounded-[3px] p-8 flex flex-col justify-between hover:border-[#AD9166]/60 transition-all duration-300 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.03)]"
            >
              <div>
                <div className="w-10 h-10 rounded-[2px] bg-white border border-[#E8DFD0] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <p className="text-[10px] uppercase tracking-widest font-semibold text-[#AD9166] mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-serif font-normal text-xl text-[#203B32] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8DFD0]/60 text-[11px] text-[#73766F] font-light">
                Dimensão Técnica 0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 pt-8 border-t border-[#E8DFD0]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs text-[#73766F] font-light">
            Orientação técnica personalizada com Roberto Moura, arquiteto e urbanista.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs uppercase tracking-widest rounded-[2px] transition-all"
          >
            <span>Solicitar diagnóstico do meu caso</span>
            <span className="text-[#AD9166]">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
