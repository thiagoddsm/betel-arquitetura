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
      num: "1",
      title: "Primeiro Contato",
      desc: "Você explica a situação do imóvel pelo WhatsApp em linguagem simples e sem jargões.",
    },
    {
      num: "2",
      title: "Triagem Inicial",
      desc: "Reunimos as informações básicas e os documentos que você já possuir em mãos.",
    },
    {
      num: "3",
      title: "Análise Técnica",
      desc: "Roberto avalia o caso e indica se é necessária vistoria presencial ou estudo complementar.",
    },
    {
      num: "4",
      title: "Envio de Proposta",
      desc: "Você recebe uma proposta formal com escopo fechado, etapas de trabalho e condições.",
    },
    {
      num: "5",
      title: "Execução & Acompanhamento",
      desc: "Após a contratação, o serviço técnico é executado e acompanhado perante os órgãos envolvidos.",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-20 bg-white text-[#1E242B] border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-[#0F3B46] font-bold text-xs uppercase tracking-widest bg-[#E3EDF0] px-3 py-1 rounded">
            Transparência & Método
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-[#121A1F] font-serif">
            Como funciona o atendimento
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Conheça as 5 etapas claras desde a primeira conversa até a condução do processo técnico.
          </p>
        </div>

        {/* Linha de 5 Etapas no Desktop / Lista Vertical no Mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] border border-gray-200/90 rounded-xl p-5 flex flex-col justify-between"
            >
              <div>
                <span className="w-8 h-8 rounded-full bg-[#0F3B46] text-white font-bold text-sm flex items-center justify-center mb-3 font-serif">
                  {item.num}
                </span>
                <h3 className="font-bold text-sm text-[#121A1F] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#0F3B46] hover:bg-[#164E5D] text-white font-bold text-sm uppercase tracking-wider rounded shadow transition-all"
          >
            <span>Iniciar meu atendimento</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
