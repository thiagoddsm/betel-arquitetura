"use client";

export default function LpTestimonials() {
  const testimonials = [
    {
      quote:
        "O Arquiteto Roberto explicou com total transparência o que precisava ser feito na documentação da nossa casa em Niterói. Conduziu o processo com muita segurança e sempre nos mantendo informados.",
      author: "M. S.",
      location: "Niterói - RJ",
      service: "Regularização Residencial",
    },
    {
      quote:
        "Tínhamos uma divergência antiga na metragem do imóvel que travava o inventário da família em São Gonçalo. A análise técnica do Roberto foi fundamental para organizarmos os documentos necessários.",
      author: "C. R.",
      location: "São Gonçalo - RJ",
      service: "Adequação Documental e IPTU",
    },
    {
      quote:
        "Atendimento muito sério e sem promessas mirabolantes. Entendemos exatamente as etapas do projeto e os prazos reais dos órgãos públicos.",
      author: "J. P.",
      location: "Maricá - RJ",
      service: "Levantamento e Projeto",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA] text-[#1E242B] border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[#0F3B46] font-bold text-xs uppercase tracking-widest bg-[#E3EDF0] px-3 py-1 rounded">
            Confiança & Atendimento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-[#121A1F] font-serif">
            O que clientes dizem sobre o atendimento
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Relatos de proprietários que buscaram orientação técnica para a regularização de seus imóveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#121A1F]">{item.author}</p>
                  <p className="text-gray-500">{item.location}</p>
                </div>
                <span className="text-[11px] text-[#0F3B46] font-semibold bg-[#E3EDF0] px-2 py-0.5 rounded">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
