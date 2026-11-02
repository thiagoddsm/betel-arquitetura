"use client";

import Link from "next/link";

export default function LpFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A312A] text-[#E8DFD0]/80 py-14 border-t border-[#344F43]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Topo do Rodapé: Identidade e Navegação Geral */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#344F43]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-serif tracking-widest text-[#F8F7F3] font-normal text-xl uppercase">
              BETEL ARQUITETURA
            </span>
            <p className="text-xs text-[#AD9166] font-medium">
              Roberto Moura • Arquiteto e Urbanista • CAU/BR A14965-9
            </p>
            <p className="text-xs text-[#E8DFD0]/60 font-light">
              Orientação técnica e regularização em Niterói, São Gonçalo, Maricá e RJ • WhatsApp: (21) 99733-9287
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

        {/* Links Estratégicos de SEO / Guias Regionais e Temáticos */}
        <div className="py-8 border-b border-[#344F43] grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-xs font-light">
          <div>
            <p className="font-serif text-sm text-white mb-2 font-normal">
              Especialidades Técnicas
            </p>
            <ul className="space-y-1.5 text-[#E8DFD0]/70">
              <li>
                <Link href="/regularizacao-ampliacao-imovel" className="hover:text-[#AD9166] transition-colors">
                  • Regularização de Ampliação de Imóvel
                </Link>
              </li>
              <li>
                <Link href="/averbacao-construcao" className="hover:text-[#AD9166] transition-colors">
                  • Averbação de Construção em Cartório (RGI)
                </Link>
              </li>
              <li>
                <Link href="/legalizacao-imovel-existente" className="hover:text-[#AD9166] transition-colors">
                  • Legalização de Imóvel Existente & Habite-se
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm text-white mb-2 font-normal">
              Atuação por Município
            </p>
            <ul className="space-y-1.5 text-[#E8DFD0]/70">
              <li>
                <Link href="/legalizacao-imoveis-niteroi" className="hover:text-[#AD9166] transition-colors">
                  • Legalização de Imóveis em Niterói (SMU)
                </Link>
              </li>
              <li>
                <Link href="/legalizacao-imoveis-sao-goncalo" className="hover:text-[#AD9166] transition-colors">
                  • Legalização de Imóveis em São Gonçalo
                </Link>
              </li>
              <li>
                <Link href="/legalizacao-imoveis-marica" className="hover:text-[#AD9166] transition-colors">
                  • Legalização de Imóveis em Maricá & Itaipuaçu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm text-white mb-2 font-normal">
              Transparência & Conformidade
            </p>
            <p className="text-[#E8DFD0]/60 leading-relaxed">
              Atendimento sob rigor ético e normas do Conselho de Arquitetura e Urbanismo (CAU/BR). Processos conduzidos de acordo com as leis urbanísticas municipais e normas cartorárias vigentes.
            </p>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DFD0]/60 gap-4">
          <p>© {currentYear} Betel Arquitetura. Roberto Moura. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Site Institucional Betel
            </Link>
            <span>•</span>
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors underline">
              Política de Privacidade
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
