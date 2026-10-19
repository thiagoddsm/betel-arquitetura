"use client";

import { useState } from "react";

export default function LpFaq() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Como saber se meu imóvel precisa de legalização ou regularização?",
      a: "Alguns sinais são ampliação ou reforma sem atualização, ausência de projeto ou aprovação, diferença entre a área construída e a documentação e dificuldades antes de vender, financiar ou inventariar. A confirmação depende da análise do imóvel e dos documentos.",
    },
    {
      q: "Quais documentos preciso ter para o primeiro contato?",
      a: "Envie o que já tiver, como matrícula ou escritura, IPTU ou inscrição imobiliária, plantas e aprovações anteriores, fotos atuais e um breve histórico. Não ter todos os documentos não impede a conversa inicial.",
    },
    {
      q: "É possível começar se o imóvel não tem projeto aprovado?",
      a: "A ausência de projeto é uma das situações que podem exigir levantamento e produção de peças técnicas. Roberto precisa avaliar o imóvel, a documentação disponível e as regras aplicáveis antes de indicar o caminho.",
    },
    {
      q: "Quanto custa o serviço?",
      a: "O valor depende da área, do tipo de imóvel, da situação documental, do município e do escopo técnico. O orçamento é preparado após a compreensão inicial do caso.",
    },
    {
      q: "Quanto tempo leva?",
      a: "O prazo varia conforme a complexidade, os documentos, a necessidade de ajustes e o andamento dos órgãos envolvidos. A proposta deve separar o prazo do trabalho técnico dos prazos externos.",
    },
    {
      q: "A aprovação é garantida?",
      a: "Não. A viabilidade e a aprovação dependem das condições do imóvel, da legislação e da análise dos órgãos competentes. O trabalho técnico organiza e conduz o processo dentro do escopo contratado.",
    },
    {
      q: "Roberto atende imóveis comerciais e pequenos negócios?",
      a: "Sim. A comunicação do site contempla proprietários de lojas, clínicas, escritórios e outros negócios que precisam avaliar o imóvel para abrir, transferir ou regularizar uma atividade. O escopo é definido caso a caso.",
    },
    {
      q: "Quais cidades são atendidas?",
      a: "O atendimento principal abrange Niterói, São Gonçalo, Maricá e região. A possibilidade de atender outros municípios deve ser confirmada no primeiro contato.",
    },
    {
      q: "Preciso ir ao escritório?",
      a: "O primeiro contato pode acontecer pelo WhatsApp. Depois da triagem, a equipe informa se o caso exige reunião, vistoria ou outra etapa presencial.",
    },
    {
      q: "Roberto também desenvolve projetos arquitetônicos?",
      a: "Sim. Projetos arquitetônicos aparecem como serviço complementar, com apoio institucional da Betel Arquitetura. A necessidade de projeto pode surgir de forma independente ou dentro de uma demanda relacionada ao imóvel.",
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-white text-[#1E242B] border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="text-center mb-12">
          <span className="text-[#0F3B46] font-bold text-xs uppercase tracking-widest bg-[#E3EDF0] px-3 py-1 rounded">
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 text-[#121A1F] font-serif">
            Dúvidas comuns sobre legalização e atendimento
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Respostas claras para as principais questões antes de iniciar o contato.
          </p>
        </div>

        {/* Acordeão */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#F8F9FA] border border-gray-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#0F3B46] transition-colors text-sm sm:text-base"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-gray-700 text-xs transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#E3EDF0] text-[#0F3B46]" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Resposta sempre acessível e indexável */}
                <div
                  className={`px-5 sm:px-6 text-xs sm:text-sm text-gray-600 leading-relaxed transition-all duration-200 ${
                    isOpen ? "pb-5 pt-1 block border-t border-gray-200/60" : "hidden"
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Suporte Extra */}
        <div className="mt-10 text-center p-6 bg-[#F8F9FA] rounded-xl border border-gray-200">
          <p className="text-sm font-semibold text-gray-800">
            Tem outra dúvida sobre a situação do seu imóvel?
          </p>
          <p className="text-xs text-gray-500 mt-1 mb-4">
            Envie sua pergunta diretamente pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/5521997332031?text=Ol%C3%A1%2C%20Roberto.%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20regulariza%C3%A7%C3%A3o%20do%20meu%20im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0F3B46] hover:bg-[#164E5D] text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
          >
            Fazer Pergunta no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
