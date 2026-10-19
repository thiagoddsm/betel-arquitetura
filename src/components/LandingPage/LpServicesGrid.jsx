"use client";

export default function LpServicesGrid() {
  const services = [
    {
      title: "Obtenção de Habite-se e Certidão de Construção",
      desc: "Regularização de obras concluídas para emissão do habite-se pela Prefeitura, documento essencial para habitação legal e financiamentos.",
      tag: "Mais Solicitado",
      icon: "🏢",
    },
    {
      title: "Acréscimos de Área e Leis de Mais-Valia",
      desc: "Legalização de ampliações, coberturas, garagens, puxadinhos e reformas não aprovadas previamente, aproveitando benefícios da legislação vigente.",
      tag: "Economia",
      icon: "📐",
    },
    {
      title: "Averbação da Construção no RGI",
      desc: "Inclusão da edificação na matrícula do imóvel junto ao Cartório de Registro de Imóveis competente, garantindo a titularidade plena do imóvel.",
      tag: "Segurança Jurídica",
      icon: "📜",
    },
    {
      title: "Desmembramento e Remembramento de Lotes",
      desc: "Divisão de terrenos em parcelas independentes com novas matrículas ou unificação de lotes contíguos para novos empreendimentos.",
      tag: "Topografia & Projetos",
      icon: "🗺️",
    },
    {
      title: "Legalização Comercial & Alvarás de Funcionamento",
      desc: "Adequação de imóveis comerciais às exigências de acessibilidade, sanitárias, urbanísticas e obtenção de licenças de atividade.",
      tag: "Empresarial",
      icon: "🏪",
    },
    {
      title: "Projetos de Incêndio (PPCI) e Autovistoria",
      desc: "Aprovação junto ao Corpo de Bombeiros (CBMERJ), laudos periciais de engenharia/arquitetura e cumprimento da Lei de Autovistoria Predial.",
      tag: "Conformidade",
      icon: "🚒",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-white text-dark border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">
            Nossas Soluções Técnicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-[#222]">
            Serviços completos em Legalização e Regularização Imobiliária
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Atendemos imóveis residenciais, comerciais e industriais em todas as etapas burocráticas e técnicas junto a prefeituras e cartórios.
          </p>
        </div>

        {/* Grid dos Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#FBFBFB] border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111] group-hover:text-primary transition-colors mb-2 leading-snug">
                  {s.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/80">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:text-[#b5141d] transition-colors"
                >
                  Consultar este serviço &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
