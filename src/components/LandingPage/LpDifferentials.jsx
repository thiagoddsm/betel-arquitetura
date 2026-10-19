"use client";

export default function LpDifferentials() {
  const differentials = [
    {
      title: "Escritórios Físicos em Niterói e São Gonçalo",
      desc: "Estrutura completa para receber você e seus documentos com segurança, café e atendimento personalizado.",
      icon: "🏢",
    },
    {
      title: "Atendimento Direto com o Arquiteto Roberto Moura",
      desc: "Você não fala com intermediários ou atendentes despreparados. Seu caso é avaliado por um especialista sênior.",
      icon: "🤝",
    },
    {
      title: "Transparência Total & Previsibilidade de Custos",
      desc: "Apresentamos um escopo fechado, detalhando honorários técnicos e estimativas reais de taxas dos órgãos públicos.",
      icon: "📊",
    },
    {
      title: "Agilidade com Trâmites Digitais",
      desc: "Utilizamos as plataformas digitais dos órgãos públicos e cartórios para protocolar e acelerar a tramitação.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 bg-white text-dark border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">
              Por que a Betel Arquitetura?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222] leading-tight">
              A tranquilidade de entregar seu patrimônio a quem tem raízes e tradição no mercado
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Diferente de empresas genéricas, a Betel Arquitetura é sediada na região e tem histórico comprovado de aprovações nas secretarias municipais do Rio de Janeiro, Niterói, São Gonçalo e Maricá.
            </p>

            <div className="p-5 bg-neutral-50 rounded-xl border border-gray-200 space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>Niterói: Rink Plaza Offices - Sala 307</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span>São Gonçalo: Rua Profa. Adélia Martins, 150b - Mutondo</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {differentials.map((d, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-gray-200/80 rounded-2xl p-6 hover:border-primary/40 transition-colors shadow-sm"
              >
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {d.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
