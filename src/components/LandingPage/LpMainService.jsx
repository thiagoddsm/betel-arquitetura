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
      title: "Imóvel Atual",
      desc: "Levantamento da situação real da edificação e conferência das áreas existentes.",
    },
    {
      step: "02",
      title: "Análise Documental",
      desc: "Leitura de certidões, RGI, IPTU e identificação das pendências perante a lei local.",
    },
    {
      step: "03",
      title: "Caminho Técnico",
      desc: "Definição do escopo: projetos, memoriais, laudos e acompanhamento no órgão público.",
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-20 bg-white text-[#1E242B] border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#0F3B46] font-bold text-xs uppercase tracking-widest bg-[#E3EDF0] px-3 py-1 rounded">
            Oferta Principal
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-[#121A1F] font-serif">
            Legalização e regularização de imóveis
          </h2>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            O trabalho começa pela leitura do imóvel e da documentação disponível. A partir dessa análise, Roberto identifica o escopo técnico que pode ser necessário, como levantamento, projeto, orientação documental e acompanhamento junto aos órgãos envolvidos. O caminho varia conforme o município, o histórico da construção e a legislação aplicável.
          </p>
        </div>

        {/* Diagrama Simples: Imóvel atual → Análise → Caminho técnico */}
        <div className="max-w-4xl mx-auto my-10">
          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-gray-200 rounded-xl p-6 relative flex flex-col justify-between text-center"
              >
                <div>
                  <span className="w-10 h-10 rounded-full bg-[#0F3B46] text-white font-bold flex items-center justify-center mx-auto mb-4 text-sm font-serif">
                    {item.step}
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
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#0F3B46] hover:bg-[#164E5D] text-white font-bold text-sm uppercase tracking-wider rounded shadow transition-all"
          >
            <span>Solicitar uma primeira análise</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
