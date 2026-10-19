"use client";

import Link from "next/link";

export default function LpFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1317] text-gray-400 py-12 border-t border-[#1F2A31]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1F2A31]">
          
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <span className="text-white font-bold text-base tracking-tight font-serif">
              Roberto Moura | Arquiteto e Urbanista
            </span>
            <p className="text-xs text-[#8FD5E8]">
              CAU/BR A14965-9 • Sócio-fundador da Betel Arquitetura
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Atendimento em Niterói, São Gonçalo, Maricá e região.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-gray-300">
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
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {currentYear} Roberto Moura. Estrutura institucional: Betel Arquitetura.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Site Betel Arquitetura
            </Link>
            <span>•</span>
            <a href="#contato" className="hover:text-gray-300 transition-colors">
              Privacidade & Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
