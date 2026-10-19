"use client";

import Link from "next/link";

export default function LpFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A312A] text-[#E8DFD0]/80 py-14 border-t border-[#344F43]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#344F43]">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-serif tracking-widest text-[#F8F7F3] font-normal text-xl uppercase">
              BETEL ARQUITETURA
            </span>
            <p className="text-xs text-[#AD9166] font-medium">
              Roberto Moura • Arquiteto e Urbanista • CAU/BR A14965-9
            </p>
            <p className="text-xs text-[#E8DFD0]/60 font-light">
              Orientação técnica e regularização em Niterói, São Gonçalo, Maricá e região.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-[#E8DFD0]">
            <a href="#servicos" className="hover:text-[#AD9166] transition-colors">
              Serviços
            </a>
            <a href="#como-funciona" className="hover:text-[#AD9166] transition-colors">
              Como Funciona
            </a>
            <a href="#roberto-moura" className="hover:text-[#AD9166] transition-colors">
              Roberto Moura
            </a>
            <a href="#faq" className="hover:text-[#AD9166] transition-colors">
              Dúvidas
            </a>
            <a href="#contato" className="hover:text-[#AD9166] transition-colors">
              Contato
            </a>
          </nav>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DFD0]/60 gap-4">
          <p>© {currentYear} Betel Arquitetura. Roberto Moura. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Site Institucional Betel
            </Link>
            <span>•</span>
            <a href="#contato" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
