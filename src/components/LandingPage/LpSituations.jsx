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
      title: "Obras e ampliações não averbadas",
      desc: "Construções, novos pavimentos, coberturas, garagens ou reformas que não constam na documentação oficial.",
      svg: (
        <svg className="w-6 h-6 stroke-[#AD9166]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-9h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.75a1.5 1.5 0 011.5-1.5h1.5a1.5 1.5 0 011.5 1.5V21" />
        </svg>
      ),
    },
    {
      title: "Divergências de área construída",
      desc: "Diferença entre a metragem real do imóvel e os registros constantes no carnê de IPTU ou na certidão de ônus reais do RGI.",
      svg: (
        <svg className="w-6 h-6 stroke-[#AD9166]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      ),
    },
    {
      title: "Documentação e regularização imobiliária",
      desc: "Pendências de Habite-se, certidões fiscais ou adequações cadastrais necessárias para viabilizar venda, financiamento ou inventário.",
      svg: (
        <svg className="w-6 h-6 stroke-[#AD9166]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "Desmembramento ou divisão de terrenos",
      desc: "Individualização de lotes, unificação de terrenos contíguos e projetos topográficos em consonância com a legislação municipal.",
      svg: (
        <svg className="w-6 h-6 stroke-[#AD9166]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.284a2.25 2.25 0 00-2.012 0L2.616 5.722A1.125 1.125 0 002 6.728v12.352c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
            Diagnóstico & Necessidades
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
            Qual é a situação do seu imóvel?
          </h2>
          <p className="text-[#292D2A]/80 mt-4 text-base sm:text-lg leading-relaxed">
            Cada imóvel tem uma história. Entender o seu caso é o primeiro passo para identificar o caminho técnico adequado.
          </p>
        </div>

        {/* Grade de 4 Cards: 4 em desktop, 2 em tablet, 1 em celular */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {situations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8DFD0] rounded-[3px] p-7 flex flex-col justify-between hover:border-[#AD9166]/60 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(32,59,50,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(32,59,50,0.08)] group"
            >
              <div>
                <div className="w-12 h-12 rounded-[2px] bg-[#F8F7F3] border border-[#E8DFD0] flex items-center justify-center mb-6 group-hover:bg-[#E8DFD0]/40 transition-colors">
                  {item.svg}
                </div>
                <h3 className="font-serif font-normal text-lg text-[#203B32] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8DFD0]/80">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase text-[#203B32] group-hover:text-[#AD9166] transition-colors"
                >
                  <span>Avaliar esta situação</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
