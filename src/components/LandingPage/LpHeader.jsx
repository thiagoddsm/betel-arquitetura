"use client";

import Link from "next/link";

export default function LpHeader() {
  const whatsappNumber = "5521997332031";
  const whatsappMsg = encodeURIComponent(
    "Olá. Vim pelo site do Roberto Moura e gostaria de explicar a situação do meu imóvel."
  );

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "header",
        page: "legalizacao",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#121A1F]/95 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Identidade / Wordmark */}
        <div className="flex flex-col">
          <Link href="/legalizacao" className="flex items-baseline gap-2">
            <span className="text-white font-bold text-lg md:text-xl tracking-tight">
              Roberto Moura
            </span>
            <span className="text-[#8FB3BD] text-xs font-medium hidden sm:inline">
              | Arquiteto e Urbanista
            </span>
          </Link>
          <span className="text-[11px] text-gray-400">
            Betel Arquitetura • CAU/BR A14965-9
          </span>
        </div>

        {/* Menu por Âncoras */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
          <a href="#servicos" className="hover:text-white transition-colors">
            Serviços
          </a>
          <a href="#como-funciona" className="hover:text-white transition-colors">
            Como Funciona
          </a>
          <a href="#sobre" className="hover:text-white transition-colors">
            Sobre Roberto
          </a>
          <a href="#experiencias" className="hover:text-white transition-colors">
            Experiência
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            Dúvidas
          </a>
          <a href="#contato" className="hover:text-white transition-colors">
            Contato
          </a>
        </nav>

        {/* CTA Solicitar Análise */}
        <div className="flex items-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="bg-[#25D366] hover:bg-[#20ba5a] text-[#0D2214] text-xs md:text-sm font-bold uppercase tracking-wider px-4 md:px-5 py-2.5 rounded shadow transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 fill-current shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.008-.471-1.682-.699-2.756-2.433-2.841-2.546-.084-.112-.676-.901-.676-1.718 0-.818.428-1.22.58-1.383.153-.163.334-.204.446-.204.112 0 .224.001.322.006.103.005.242-.039.378.289.144.35.492 1.203.535 1.291.043.088.072.192.014.307-.058.115-.088.187-.174.288-.088.102-.185.228-.264.306-.089.088-.182.184-.078.362.104.178.464.766.996 1.24 1.157 1.031 2.133 1.35 2.435 1.5.302.15.48.127.659-.08.179-.207.766-.893.97-1.198.204-.305.408-.255.688-.152.28.102 1.776.837 2.081.989.306.152.51.228.585.355.076.128.076.741-.068 1.146z" />
            </svg>
            <span>Solicitar análise</span>
          </a>
        </div>

      </div>
    </header>
  );
}
