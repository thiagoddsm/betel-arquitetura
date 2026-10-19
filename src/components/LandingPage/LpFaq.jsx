"use client";

import { useState } from "react";

export default function LpFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "O que significa regularizar um imóvel?",
      a: "Regularizar significa adequar a situação física da edificação perante a Prefeitura e o Cartório de Registro de Imóveis (RGI). Envolve obter o Habite-se ou certidão equivalente e averbar a área construída real na matrícula do imóvel, garantindo plena segurança jurídica e valor de mercado.",
    },
    {
      q: "Quando uma obra ou ampliação precisa ser regularizada?",
      a: "Sempre que houver alteração de área construída (novos cômodos, segundo pavimento, cobertura, varanda, garagem ou piscina) ou modificações estruturais que não constem na planta aprovada pelo município.",
    },
    {
      q: "Quais documentos podem ser necessários para a análise?",
      a: "Para a conversa inicial, envie o que já tiver em mãos: certidão de ônus reais do RGI ou escritura, carnê recente de IPTU, plantas antigas ou projetos (se houver) e fotos atuais do imóvel. Não possuir todos os documentos não impede o primeiro atendimento.",
    },
    {
      q: "É possível começar se o imóvel não tem projeto aprovado?",
      a: "Sim. A ausência de projeto original é muito comum. Nesses casos, realizamos o levantamento arquitetônico cadastral in loco (as-built) e produzimos as peças técnicas exigidas pela Prefeitura para dar entrada no processo.",
    },
    {
      q: "Quanto custa o serviço?",
      a: "Os honorários técnicos dependem da área construída, do tipo de imóvel (residencial, comercial ou terreno), da complexidade da situação documental e do município. A proposta de serviços é elaborada com escopo fechado após a triagem inicial.",
    },
    {
      q: "Quanto tempo leva o processo?",
      a: "O prazo varia conforme a necessidade de adequações técnicas e o tempo de tramitação dos órgãos públicos envolvidos (Prefeitura, Fazenda e Cartório de Registro de Imóveis). A nossa proposta separa claramente o prazo de elaboração técnica dos prazos externos dos órgãos competentes.",
    },
    {
      q: "A regularização é garantida?",
      a: "Não. Nenhum profissional sério pode garantir aprovação prévia, pois a viabilidade e a decisão final dependem das condições da edificação, do enquadramento nas leis urbanísticas e do deferimento pelos órgãos competentes. O trabalho técnico de Roberto Moura organiza, fundamenta e conduz o processo com o máximo rigor para alcançar a aprovação dentro das normas aplicáveis.",
    },
    {
      q: "Roberto atende imóveis comerciais e pequenos negócios?",
      a: "Sim. Atendemos proprietários de lojas, clínicas, galpões, escritórios e pequenos comércios que precisam de orientação para abertura, transferência ou regularização de suas atividades perante o município.",
    },
    {
      q: "Quais cidades são atendidas?",
      a: "O atendimento prioritário abrange Niterói, São Gonçalo, Maricá e região metropolitana do Rio de Janeiro. A viabilidade para outras localidades pode ser avaliada no primeiro contato.",
    },
    {
      q: "Preciso ir ao escritório para iniciar?",
      a: "Não necessariamente. O primeiro contato e a triagem documental inicial acontecem de forma ágil e prática pelo WhatsApp. Havendo necessidade de vistoria in loco ou reunião presencial, agendamos com você.",
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
          <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
            Orientações objetivas sobre prazos, documentação, custos e viabilidade técnica.
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
                  className={`px-6 text-xs sm:text-sm text-[#73766F] leading-relaxed transition-all duration-200 ${
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
