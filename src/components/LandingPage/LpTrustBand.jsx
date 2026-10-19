"use client";

export default function LpTrustBand() {
  const indicators = [
    {
      highlight: "+40 Anos",
      label: "De experiência em arquitetura e regularização",
    },
    {
      highlight: "Atuação Regional",
      label: "Niterói, São Gonçalo, Maricá e região",
    },
    {
      highlight: "CAU/BR A14965-9",
      label: "Registro de Responsabilidade Técnica",
    },
    {
      highlight: "Betel Arquitetura",
      label: "Estrutura institucional e técnica de apoio",
    },
  ];

  return (
    <section className="bg-[#18232A] text-white py-10 border-b border-[#2B3B44]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-[#8FD5E8] font-bold">
            Experiência técnica com atuação local
          </p>
        </div>

        {/* Grade 2 por 2 no mobile, 4 colunas no desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {indicators.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-[#121A1F]/60 border border-[#2B3B44]/60 flex flex-col items-center justify-center"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1 font-serif">
                {item.highlight}
              </span>
              <span className="text-xs text-[#A2B4BC] leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
