"use client";

export default function LpProcessTimeline() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de iniciar o atendimento para entender as etapas de regularização do meu imóvel."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "process",
        page: "legalizacao",
      });
    }
  };

  const steps = [
    {
      num: "01",
      title: "Primeiro contato",
      desc: "O cliente apresenta a situação e a necessidade do imóvel.",
    },
    {
      num: "02",
      title: "Triagem inicial",
      desc: "São identificadas as principais informações necessárias para compreender o caso.",
    },
    {
      num: "03",
      title: "Análise técnica",
      desc: "São avaliadas as condições e os possíveis caminhos de regularização.",
    },
    {
      num: "04",
      title: "Proposta de serviço",
      desc: "O escopo e os honorários são apresentados conforme a complexidade do trabalho.",
    },
    {
      num: "05",
      title: "Execução e acompanhamento",
      desc: "Após a contratação, são desenvolvidas as atividades técnicas previstas no escopo contratado.",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
            Metodologia & Transparência
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
            Clareza do primeiro contato à análise técnica.
          </h2>
          <p className="text-[#292D2A]/80 mt-4 text-base sm:text-lg leading-relaxed">
            Um processo estruturado com etapas transparentes. Cada imóvel possui particularidades próprias e o escopo é dimensionado sob medida.
          </p>
        </div>

        {/* Linha do tempo editorial com numerais destacados */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F7F3] border border-[#E8DFD0] rounded-[3px] p-6 flex flex-col justify-between hover:border-[#AD9166]/50 transition-all duration-300 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.03)]"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#AD9166] block mb-4">
                  {item.num}
                </span>
                <h3 className="font-serif font-normal text-base sm:text-lg text-[#203B32] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E8DFD0]/60 text-[10px] uppercase tracking-wider text-[#AD9166] font-medium">
                Etapa {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Aviso de responsabilidade e CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-[#E8DFD0]">
          <p className="text-xs text-[#73766F] max-w-xl">
            * A execução técnica efetiva varia conforme o município, o histórico documental da construção e as exigências legais dos órgãos envolvidos.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs uppercase tracking-widest rounded-[2px] transition-all shrink-0"
          >
            <span>Iniciar meu atendimento</span>
            <span className="text-[#AD9166]">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
