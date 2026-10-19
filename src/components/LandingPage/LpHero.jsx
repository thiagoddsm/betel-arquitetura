"use client";

export default function LpHero() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá. Vim pelo site do Roberto Moura e gostaria de explicar a situação do meu imóvel. Ele fica em [cidade/bairro] e preciso de ajuda com [breve descrição]."
  );

  const handleHeroCta = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "hero",
        page: "legalizacao",
      });
    }
  };

  return (
    <section className="relative bg-[#121A1F] text-white pt-12 pb-16 md:py-20 overflow-hidden border-b border-[#22313A]">
      {/* Detalhe sutil de fundo arquitetônico */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b272f_1px,transparent_1px),linear-gradient(to_bottom,#1b272f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Coluna de Texto */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tag / Badge de Geografia */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A333E] border border-[#2B4E5D] text-[#8FD5E8] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              Atendimento em Niterói, São Gonçalo, Maricá e região
            </div>

            {/* H1 Definido no Briefing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.18] font-serif">
              Legalização e regularização de imóveis em Niterói, São Gonçalo e Maricá
            </h1>

            {/* Copy Principal do Briefing */}
            <p className="text-[#D3DCE0] text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Roberto Moura reúne <strong className="text-white font-semibold">mais de 40 anos de experiência</strong> para analisar a situação do seu imóvel, orientar o caminho técnico e conduzir as etapas do serviço com clareza. Atendimento a proprietários, famílias e pequenos negócios.
            </p>

            {/* Botão Principal de Conversão */}
            <div className="pt-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleHeroCta}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#0D2214] font-bold text-base uppercase tracking-wider rounded shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.008-.471-1.682-.699-2.756-2.433-2.841-2.546-.084-.112-.676-.901-.676-1.718 0-.818.428-1.22.58-1.383.153-.163.334-.204.446-.204.112 0 .224.001.322.006.103.005.242-.039.378.289.144.35.492 1.203.535 1.291.043.088.072.192.014.307-.058.115-.088.187-.174.288-.088.102-.185.228-.264.306-.089.088-.182.184-.078.362.104.178.464.766.996 1.24 1.157 1.031 2.133 1.35 2.435 1.5.302.15.48.127.659-.08.179-.207.766-.893.97-1.198.204-.305.408-.255.688-.152.28.102 1.776.837 2.081.989.306.152.51.228.585.355.076.128.076.741-.068 1.146z" />
                </svg>
                <span>Solicitar análise pelo WhatsApp</span>
              </a>
            </div>

            {/* Linha de Apoio Exata do Briefing */}
            <div className="pt-4 border-t border-[#22313A] w-full">
              <p className="text-xs sm:text-sm text-[#A2B4BC]">
                <strong className="text-white">Roberto Moura</strong> | Arquiteto e Urbanista | <span className="text-[#8FD5E8] font-semibold">CAU/BR A14965-9</span> | Sócio-fundador da Betel Arquitetura
              </p>
            </div>

          </div>

          {/* Coluna Card Visual do Arquiteto */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#18232A] border border-[#2B3B44] rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-[#1F3742] border-2 border-[#8FD5E8] flex items-center justify-center text-[#8FD5E8] font-bold text-2xl font-serif">
                  RM
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-serif">Roberto Moura</h2>
                  <p className="text-xs text-[#8FD5E8] font-medium">Arquiteto e Urbanista • CAU/BR A14965-9</p>
                  <p className="text-xs text-gray-400 mt-0.5">Mais de 40 anos de atuação profissional</p>
                </div>
              </div>

              <div className="space-y-3 bg-[#0F161A] p-4 rounded-xl border border-[#22313A] text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#8FD5E8] font-bold">✓</span>
                  <span>Análise técnica individual antes de definir escopo ou orçamento.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#8FD5E8] font-bold">✓</span>
                  <span>Orientação responsável sem promessas irreais de aprovação.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#8FD5E8] font-bold">✓</span>
                  <span>Betel Arquitetura como estrutura institucional e técnica de apoio.</span>
                </div>
              </div>

              <div className="mt-5 text-center">
                <a
                  href="#sobre"
                  className="text-xs text-[#8FD5E8] hover:text-white underline underline-offset-4 transition-colors"
                >
                  Conheça a trajetória profissional de Roberto Moura &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
