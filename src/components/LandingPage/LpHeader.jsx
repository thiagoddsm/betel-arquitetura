"use client";

import Link from "next/link";

export default function LpHeader() {
  const whatsappNumber = "5521997332031";
  const whatsappMsg = encodeURIComponent(
    "Olá, Arquiteto Roberto Moura. Vim pela página de Legalização da Betel Arquitetura e gostaria de orientação para o meu imóvel."
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
    <header className="sticky top-0 z-50 bg-[#F8F7F3]/90 backdrop-blur-md border-b border-[#E8DFD0]/80 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.05)] transition-all">
      <div className="container mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* Identidade à esquerda: BETEL ARQUITETURA + Roberto Moura */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-serif tracking-widest text-[#203B32] font-semibold text-lg md:text-xl uppercase transition-colors group-hover:text-[#344F43]">
              BETEL
            </span>
            <span className="h-4 w-[1px] bg-[#AD9166]"></span>
            <span className="text-[11px] md:text-xs uppercase tracking-wider text-[#73766F] font-medium">
              Arquitetura
            </span>
          </Link>
          <div className="hidden sm:block border-l border-[#E8DFD0] pl-3 py-0.5">
            <p className="text-[11px] text-[#203B32] font-semibold leading-tight">
              Roberto Moura
            </p>
            <p className="text-[10px] text-[#73766F] leading-tight">
              Arquiteto e Urbanista • CAU A14965-9
            </p>
          </div>
        </div>

        {/* Navegação editorial */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-[#292D2A]">
          <a href="#servicos" className="hover:text-[#AD9166] transition-colors py-1">
            Serviços
          </a>
          <a href="#como-funciona" className="hover:text-[#AD9166] transition-colors py-1">
            Como Funciona
          </a>
          <a href="#roberto-moura" className="hover:text-[#AD9166] transition-colors py-1">
            Roberto Moura
          </a>
          <a href="#faq" className="hover:text-[#AD9166] transition-colors py-1">
            Dúvidas Frequentes
          </a>
        </nav>

        {/* Botão de WhatsApp */}
        <div className="flex items-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 md:py-3 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] text-xs font-medium tracking-wider uppercase transition-all rounded-[2px] shadow-sm hover:shadow"
          >
            <svg
              className="w-3.5 h-3.5 fill-[#AD9166] shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.008-.471-1.682-.699-2.756-2.433-2.841-2.546-.084-.112-.676-.901-.676-1.718 0-.818.428-1.22.58-1.383.153-.163.334-.204.446-.204.112 0 .224.001.322.006.103.005.242-.039.378.289.144.35.492 1.203.535 1.291.043.088.072.192.014.307-.058.115-.088.187-.174.288-.088.102-.185.228-.264.306-.089.088-.182.184-.078.362.104.178.464.766.996 1.24 1.157 1.031 2.133 1.35 2.435 1.5.302.15.48.127.659-.08.179-.207.766-.893.97-1.198.204-.305.408-.255.688-.152.28.102 1.776.837 2.081.989.306.152.51.228.585.355.076.128.076.741-.068 1.146z" />
            </svg>
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </header>
  );
}
