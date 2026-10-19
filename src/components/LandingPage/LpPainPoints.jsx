"use client";

export default function LpPainPoints() {
  const problems = [
    {
      title: "Impossibilidade de Venda por Financiamento",
      desc: "Mais de 80% das compras de imóveis dependem de crédito bancário (Caixa, Itaú, etc.). Sem Habite-se e certidão averbada, o banco não libera o financiamento.",
      icon: "🚫",
    },
    {
      title: "Risco de Multas e Notificações da Prefeitura",
      desc: "A fiscalização municipal aplica multas contínuas por obras sem licença, acréscimos clandestinos e divergência no IPTU.",
      icon: "⚠️",
    },
    {
      title: "Travamento de Inventários e Partilhas",
      desc: "Imóveis irregulares geram custos exorbitantes e atrasos de anos em processos de partilha de bens entre herdeiros.",
      icon: "⚖️",
    },
    {
      title: "Desvalorização de até 40% no Mercado",
      desc: "Imóveis sem documentação completa sofrem deságio severo e são vendidos muito abaixo do potencial real de mercado.",
      icon: "📉",
    },
  ];

  const benefits = [
    {
      title: "Escritura e RGI 100% Regularizados",
      desc: "Tenha a documentação definitiva em mãos, com total garantia de posse e conformidade perante a lei.",
    },
    {
      title: "Valorização Imediata do Patrimônio",
      desc: "Seu imóvel passa a valer o preço integral de mercado, apto a receber qualquer proposta de compra.",
    },
    {
      title: "Processo Sem Burocracia para Você",
      desc: "A Betel Arquitetura cuida de todo o levantamento, projetos, trâmites em órgãos públicos e cartórios.",
    },
    {
      title: "Tranquilidade e Segurança Familiar",
      desc: "Proteja seu maior bem contra fiscalizações, litígios ou entraves burocráticos no futuro.",
    },
  ];

  return (
    <section className="py-20 bg-white text-dark border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">
            Segurança Patrimonial
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-[#222]">
            Você sabia que um imóvel irregular pode perder até <span className="text-primary">40% do seu valor</span>?
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            A ausência de habite-se, acréscimos não declarados ou falta de averbação em cartório são os principais vilões que travam negociações e causam prejuízos financeiros.
          </p>
        </div>

        {/* Grid Comparativo */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Coluna Riscos */}
          <div className="bg-red-50/50 border border-red-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-red-200">
                <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-lg">
                  ✕
                </span>
                <h3 className="text-xl font-bold text-red-900">
                  Os Riscos de Manter seu Imóvel Irregular
                </h3>
              </div>

              <div className="space-y-5">
                {problems.map((p, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-2xl shrink-0 mt-0.5">{p.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                        {p.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-200/60 text-xs text-red-700 font-medium">
              * Evite notificações e cobranças retroativas de impostos e penalidades.
            </div>
          </div>

          {/* Coluna Soluções Betel */}
          <div className="bg-[#1F1F1F] text-white border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-700">
                <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  ✓
                </span>
                <h3 className="text-xl font-bold text-white">
                  O Cenário Regularizado com a Betel Arquitetura
                </h3>
              </div>

              <div className="space-y-5">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-primary font-bold text-lg shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">
                        {b.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-700">
              <a
                href="#contato"
                className="w-full inline-flex justify-center items-center py-3.5 px-6 bg-primary hover:bg-[#b5141d] text-white font-bold text-sm uppercase tracking-wider rounded shadow transition-all"
              >
                Regularizar Meu Imóvel Agora
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
