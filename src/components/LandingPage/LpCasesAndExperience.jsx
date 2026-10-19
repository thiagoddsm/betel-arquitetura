"use client";

export default function LpCasesAndExperience() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de entender como a análise técnica se aplica ao caso do meu imóvel."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "technical_analysis_types",
        page: "legalizacao",
      });
    }
  };

  const types = [
    {
      badge: "Estudo Preliminar",
      title: "Análise de Viabilidade Técnica e Legal (EVTL)",
      desc: "Avaliação prévia da documentação e das regras urbanísticas municipais (recuos, taxa de ocupação, coeficiente de aproveitamento) para verificar se a edificação ou atividade é passível de regularização.",
    },
    {
      badge: "Levantamento",
      title: "Levantamento Arquitetônico Cadastral (As-Built)",
      desc: "Medição in loco minuciosa da edificação existente para elaboração das plantas baixas, cortes, fachadas e quadro de áreas exigidos pelas secretarias de urbanismo e prefeituras.",
    },
    {
      badge: "Regularização",
      title: "Processo de Habite-se e Averbação Cartorial",
      desc: "Condução documental das exigências técnicas municipais até a emissão da certidão de conclusão da obra (Habite-se) e respectiva averbação na matrícula do Registro de Imóveis (RGI).",
    },
  ];

  return (
    <section id="experiencias" className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
            Tipos de Análise Técnica
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
            Conhecimento técnico aplicado a situações reais.
          </h2>
          <p className="text-[#292D2A]/80 mt-4 text-base sm:text-lg leading-relaxed">
            Entenda como os procedimentos técnicos são estruturados para diagnosticar e encaminhar com rigor a regularização do seu imóvel.
          </p>
        </div>

        {/* Grade Editorial com 3 tipos de análise */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {types.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8DFD0] rounded-[3px] p-8 flex flex-col justify-between hover:border-[#AD9166]/60 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(32,59,50,0.03)]"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#AD9166] bg-[#E8DFD0]/40 px-2.5 py-1 rounded-[2px] inline-block mb-5">
                  {item.badge}
                </span>
                <h3 className="font-serif font-normal text-xl text-[#203B32] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8DFD0]/60 flex items-center justify-between text-xs text-[#73766F]">
                <span>Escopo Técnico</span>
                <span className="text-[#AD9166] font-serif font-medium">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 pt-8 border-t border-[#E8DFD0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs text-[#73766F] max-w-xl">
            * Cada município possui legislação urbanística e prazos próprios para tramitação de processos de legalização e mais-valia.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs uppercase tracking-widest rounded-[2px] transition-all"
          >
            <span>Consultar viabilidade do meu caso</span>
            <span className="text-[#AD9166]">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
