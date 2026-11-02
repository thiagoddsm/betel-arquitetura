"use client";

export default function LpTrustBand() {
  const indicators = [
    {
      num: "+40",
      label: "Anos de prática profissional em arquitetura e consultoria técnica",
    },
    {
      num: "CAU",
      label: "Registro profissional CAU/BR A14965-9",
    },
    {
      num: "RJ",
      label: "Atuação em Niterói, São Gonçalo, Maricá e Rio de Janeiro",
    },
    {
      num: "Betel",
      label: "Estrutura técnica e suporte institucional do escritório",
    },
  ];

  return (
    <section className="bg-[#203B32] text-[#F8F7F3] py-8 md:py-10 border-b border-[#344F43]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Grade horizontal discreta com separadores sutis */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center">
          {indicators.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 ${
                idx !== 0 ? "lg:border-l lg:border-[#344F43] lg:pl-8" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-[2px] bg-[#344F43]/60 border border-[#AD9166]/30 flex items-center justify-center shrink-0">
                <span className="font-serif text-[#AD9166] font-semibold text-sm">
                  {item.num}
                </span>
              </div>
              <div>
                <p className="text-xs font-normal text-[#E8DFD0] leading-snug">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
