"use client";

export default function LpMainService() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de solicitar uma primeira análise da documentação do meu imóvel."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "legalizacao",
        page: "legalizacao",
      });
    }
  };

  const steps = [
    {
      step: "01",
      title: "Imóvel atual",
      desc: "Leitura da situação real da edificação e conferência das áreas existentes no local.",
    },
    {
      step: "02",
      title: "Análise documental",
      desc: "Avaliação minuciosa de certidões, matrícula do RGI, IPTU e identificação das pendências legais.",
    },
    {
      step: "03",
      title: "Caminho técnico",
      desc: "Definição do escopo: projetos, memoriais, laudos e condução perante os órgãos envolvidos.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
            Oferta Principal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
            Legalização e regularização de imóveis
          </h2>
          <p className="text-[#292D2A]/80 mt-4 text-base sm:text-lg leading-relaxed font-light">
            O trabalho começa pela leitura do imóvel e da documentação disponível. A partir dessa análise, Roberto identifica o escopo técnico que pode ser necessário, como levantamento, projeto, orientação documental e acompanhamento junto aos órgãos envolvidos. O caminho varia conforme o município, o histórico da construção e a legislação aplicável.
          </p>
        </div>

        {/* Diagrama Editorial: Imóvel atual → Análise → Caminho técnico */}
        <div className="max-w-5xl my-12">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F7F3] border border-[#E8DFD0] rounded-[3px] p-8 relative flex flex-col justify-between hover:border-[#AD9166]/60 transition-all duration-300 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl text-[#AD9166] font-normal">
                      {item.step}
                    </span>
                    <span className="h-[1px] w-12 bg-[#E8DFD0]" />
                  </div>
                  <h3 className="font-serif font-normal text-lg sm:text-xl text-[#203B32] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#E8DFD0]/60">
          <p className="text-xs text-[#73766F]">
            Atendimento presencial e técnico em Niterói, São Gonçalo, Maricá e região.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs uppercase tracking-widest rounded-[2px] transition-all"
          >
            <span>Solicitar uma primeira análise</span>
            <span className="text-[#AD9166]">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
