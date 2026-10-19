"use client";

import { useState } from "react";

export default function LpFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "O que significa regularizar um imóvel?",
      a: "Regularizar significa buscar a conformidade entre a situação física real da edificação, os registros municipais (Prefeitura) e a matrícula do Cartório de Registro de Imóveis (RGI). Esse processo pode envolver a obtenção de certidões, habite-se e averbação das áreas construídas, contribuindo para a segurança documental e a preservação do valor venal do patrimônio.",
    },
    {
      q: "Quando uma obra ou ampliação precisa ser avaliada para regularização?",
      a: "Em regra, quando ocorrem alterações na área construída (como acréscimo de cômodos, novos pavimentos, coberturas ou reformas estruturais) que não constem no projeto previamente aprovado pela Prefeitura. A necessidade exata de regularização e o caminho aplicável dependem da legislação urbanística de cada município e das características da edificação.",
    },
    {
      q: "Quais documentos podem ser úteis para a conversa inicial?",
      a: "Para a triagem preliminar, você pode compartilhar os documentos que já possuir: certidão de ônus reais do RGI ou escritura, carnê recente de IPTU, plantas ou projetos anteriores (se houver) e fotos do local. Não ter toda a documentação reunida não impede o primeiro contato.",
    },
    {
      q: "É possível iniciar se o imóvel não tiver projeto aprovado?",
      a: "Sim. A ausência de projeto original é frequente. Nesses casos, o trabalho técnico inclui o levantamento arquitetônico cadastral no local (as-built) e a produção das peças técnicas necessárias para instruir o processo perante os órgãos responsáveis.",
    },
    {
      q: "Quanto custa o serviço?",
      a: "Os honorários técnicos variam conforme a complexidade da situação documental, a área construída, a tipologia do imóvel e o município. Uma proposta com escopo detalhado é apresentada após a compreensão das necessidades do caso.",
    },
    {
      q: "Quanto tempo costuma levar o processo?",
      a: "O tempo total é composto por duas fases distintas: a elaboração dos levantamentos e projetos técnicos (conduzida pelo escritório) e a tramitação nos órgãos externos (Prefeitura e Cartório). A proposta técnica distingue expressamente os prazos do trabalho profissional das estimativas de análise dos órgãos públicos.",
    },
    {
      q: "A aprovação do processo é garantida?",
      a: "Não. A viabilidade e o deferimento dependem do atendimento às normas urbanísticas vigentes, das condições do imóvel e da análise soberana dos órgãos competentes. A atuação técnica de Roberto Moura organiza, instrui e acompanha o processo com rigor técnico para buscar a conformidade documental dentro dos parâmetros legais.",
    },
    {
      q: "Roberto atende imóveis comerciais e pequenos negócios?",
      a: "Sim. A orientação técnica contempla proprietários de lojas, clínicas, escritórios e outros negócios que necessitam avaliar o imóvel para abertura, transferência ou adequação de atividades junto ao município.",
    },
    {
      q: "Quais cidades são atendidas prioritariamente?",
      a: "A atuação principal concentra-se em Niterói, São Gonçalo, Maricá e região metropolitana. A viabilidade de atendimento para outros municípios pode ser consultada no contato inicial.",
    },
    {
      q: "É necessário comparecer ao escritório para iniciar?",
      a: "O primeiro contato e a triagem documental acontecem com praticidade via WhatsApp. Caso o caso exija vistoria técnica no imóvel ou reunião presencial, as etapas são alinhadas diretamente com o cliente.",
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
            Perguntas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
            Esclareça suas dúvidas sobre a regularização
          </h2>
          <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed font-light">
            Orientações objetivas e responsáveis sobre procedimentos, documentos, prazos e viabilidade técnica.
          </p>
        </div>

        {/* Acordeão Editorial */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8DFD0] rounded-[3px] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#203B32] hover:text-[#AD9166] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <span
                    className={`w-6 h-6 rounded-full border border-[#E8DFD0] flex items-center justify-center shrink-0 text-xs transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#203B32] text-white border-[#203B32]" : "text-[#73766F] bg-[#F8F7F3]"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`px-6 text-xs sm:text-sm text-[#73766F] leading-relaxed transition-all duration-200 font-light ${
                    isOpen ? "pb-6 pt-1 block border-t border-[#E8DFD0]/60" : "hidden"
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
