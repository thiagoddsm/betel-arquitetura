import Link from "next/link";
import LpHeader from "@/components/LandingPage/LpHeader";
import LpTrustBand from "@/components/LandingPage/LpTrustBand";
import LpContactForm from "@/components/LandingPage/LpContactForm";
import LpFooter from "@/components/LandingPage/LpFooter";
import FloatingWhatsApp from "@/components/LandingPage/FloatingWhatsApp";

export const metadata = {
  title: "Averbação de Construção em Cartório de RGI | Roberto Moura — Betel Arquitetura",
  description:
    "Precisa averbar a construção da sua casa ou acréscimo na matrícula do RGI? Orientação completa sobre Habite-se, CND da Receita Federal (SERO) e registro imobiliário.",
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/averbacao-construcao/",
  },
  openGraph: {
    title: "Averbação de Construção em Cartório de RGI | Roberto Moura — Betel Arquitetura",
    description:
      "Entenda como averbar sua edificação no RGI para viabilizar venda financiada, inventário e segurança jurídica com Roberto Moura.",
    url: "https://www.betelarquitetura.com.br/averbacao-construcao/",
    type: "website",
  },
};

export default function AverbacaoConstrucaoPage() {
  const whatsappNumber = "5521997339287";
  const whatsappMsg = encodeURIComponent(
    "Olá, Roberto. Preciso de assessoria técnica para averbar uma construção no Cartório de RGI."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Averbação de Construção em Cartório de RGI",
    "provider": {
      "@type": "Person",
      "name": "Roberto Moura",
      "jobTitle": "Arquiteto e Urbanista",
      "hasCredential": "CAU/BR A14965-9",
      "worksFor": {
        "@type": "Organization",
        "name": "Betel Arquitetura"
      }
    },
    "areaServed": ["Niterói", "São Gonçalo", "Maricá", "Rio de Janeiro"],
    "description": "Consultoria e condução técnica para averbação de benfeitorias, casas e ampliações na matrícula do Registro Geral de Imóveis, incluindo Habite-se municipal e CND da Receita Federal."
  };

  const reasons = [
    {
      title: "Financiamento Bancário Impossibilitado",
      desc: "Os bancos (Caixa, BB, Itaú, Santander, Bradesco) não financiam imóveis cuja construção física não esteja descrita e averbada na matrícula do RGI. Sem averbação, para a lei existe apenas um terreno vago.",
    },
    {
      title: "Travamento de Inventários e Heranças",
      desc: "Na partilha de bens entre herdeiros, discrepâncias entre a realidade física e o documento cartorial geram notas devolutivas, atrasos judiciais e problemas no cálculo do ITD.",
    },
    {
      title: "Desvalorização de Mercado (25% a 40%)",
      desc: "Imóveis sem averbação no RGI sofrem forte deságio nas negociações, pois restringem a venda exclusivamente a compradores com recursos à vista.",
    },
    {
      title: "Doação e Blindagem Patrimonial",
      desc: "Qualquer ato solene de doação ou transmissão exige obediência ao Princípio da Especialidade Registral — a área real deve coincidir com a área transcrita no cartório.",
    },
  ];

  const pillars = [
    {
      stage: "Etapa 1",
      title: "Prefeitura Municipal",
      subtitle: "Habite-se / Certidão de Conclusão",
      desc: "Conduzimos o projeto arquitetônico cadastral (as-built) e o processo fiscalizatório até a emissão da Carta de Habite-se ou Boletim de Aceite.",
    },
    {
      stage: "Etapa 2",
      title: "Receita Federal do Brasil",
      subtitle: "SERO & CND de Obras",
      desc: "Abertura do CNO, aferição eletrônica pelo sistema SERO, cálculo ou comprovação de decadência previdenciária e emissão da Certidão Negativa de Débitos (CND).",
    },
    {
      stage: "Etapa 3",
      title: "Cartório de Registro de Imóveis",
      subtitle: "Averbação na Matrícula",
      desc: "Montagem do requerimento formal, certidões fiscais e prenotação perante o oficial registrador do RGI até a certidão de ônus reais com a casa averbada.",
    },
  ];

  const faqs = [
    {
      q: "O que é a averbação de construção?",
      a: "É o ato praticado pelo oficial do Cartório de Registro de Imóveis (RGI) que anota formalmente na matrícula do terreno a existência da edificação (área construída em m², número de pavimentos e numeração oficial). É o documento definitivo que comprova perante terceiros e perante o Estado que a construção existe legalmente.",
    },
    {
      q: "A Carta de Habite-se da prefeitura já serve como averbação?",
      a: "Não. A Carta de Habite-se é um documento municipal emitido pelo Poder Executivo local. Para que ela produza efeitos patrimoniais plenos, deve ser levada ao Cartório de Registro de Imóveis acompanhada da Certidão Negativa da Receita Federal (CND de Obra) para ser formalmente averbada na matrícula do imóvel.",
    },
    {
      q: "O que é a CND de Obra da Receita Federal (SERO)?",
      a: "A Lei Federal nº 8.212/91 exige que toda construção comprove o recolhimento das contribuições previdenciárias sobre a mão de obra utilizada. Pelo sistema SERO (Serviço Eletrônico de Aferição de Obras), avaliamos a metragem, o período da construção e as possibilidades de abatimento ou decadência tributária para expedição da certidão negativa exigida pelo cartório.",
    },
    {
      q: "Como a Betel Arquitetura e Roberto Moura podem ajudar?",
      a: "Roberto Moura atua de ponta a ponta: desde a vistoria técnica inicial, desenho das plantas, protocolo na prefeitura para obtenção do Habite-se, até a instrução correta da documentação para a Receita Federal e o Cartório de RGI, evitando que o processo caia em exigências e notas devolutivas.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#292D2A] flex flex-col font-sans selection:bg-[#203B32] selection:text-[#F8F7F3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LpHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-[#F8F7F3] text-[#292D2A] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex flex-col items-start space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8DFD0]/60 border border-[#AD9166]/30 text-[#203B32] text-[11px] font-semibold tracking-widest uppercase rounded-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]" />
                REGISTRO IMOBILIÁRIO & CARTÓRIOS DE RGI
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#203B32] tracking-tight leading-[1.14]">
                Averbação de construção em cartório: o passo definitivo para o seu patrimônio
              </h1>

              <p className="text-[#292D2A]/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
                Orientação técnica e rito completo da Prefeitura ao Cartório de Registro de Imóveis (RGI), com <strong className="font-semibold text-[#203B32]">Roberto Moura</strong>, arquiteto e urbanista (CAU/BR A14965-9).
              </p>

              <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs sm:text-sm tracking-wider rounded-[3px] shadow-sm hover:shadow transition-all"
                >
                  <span>Solicitar assessoria para averbação</span>
                  <span className="text-[#AD9166]">&rarr;</span>
                </a>

                <Link
                  href="/legalizacao-de-imoveis"
                  className="inline-flex justify-center items-center px-6 py-4 text-[#203B32] hover:text-[#344F43] font-medium text-xs sm:text-sm tracking-wider border border-[#E8DFD0] hover:border-[#AD9166]/50 bg-white/60 transition-all rounded-[3px]"
                >
                  Conhecer escopo completo
                </Link>
              </div>

              <p className="text-[11px] text-[#73766F] leading-normal pt-1 max-w-xl">
                * Atendimento especializado nos Cartórios de RGI de Niterói (1º e 2º Ofícios), São Gonçalo (1º, 2º e 3º Ofícios), Maricá e Rio de Janeiro.
              </p>

            </div>
          </div>
        </section>

        <LpTrustBand />

        {/* Por que averbar é indispensável */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Segurança Registral
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Por que a averbação na matrícula do RGI é inegociável?
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                Muitos proprietários acreditam que a escritura de compra do terreno é suficiente. No entanto, se a casa não constar averbada na matrícula, o patrimônio sofre restrições severas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((r, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DFD0] rounded-[3px] p-7 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.03)]"
                >
                  <div className="text-[11px] font-serif font-semibold text-[#AD9166] mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#203B32] mb-2 leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O Ciclo Completo de Averbação */}
        <section className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Fluxo de Trâmite
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                As três etapas para regularização definitiva no RGI
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                A averbação não depende apenas de um requerimento; é a união de três esferas públicas articuladas com precisão técnica.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F7F3] border border-[#E8DFD0] rounded-[3px] p-8 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#AD9166] block mb-2">
                      {item.stage}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-[#203B32] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#AD9166] font-medium mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#E8DFD0]/60 text-[11px] text-[#73766F]">
                    Trâmite Oficial 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-[#F8F7F3] border-l-4 border-[#AD9166] text-xs sm:text-sm text-[#344F43] leading-relaxed">
              <strong>Você construiu ou ampliou recentemente?</strong> Saiba como atuamos também na{" "}
              <Link href="/regularizacao-ampliacao-imovel" className="underline font-semibold hover:text-[#203B32]">
                regularização de ampliações e reformas
              </Link>{" "}
              ou consulte as particularidades de{" "}
              <Link href="/legalizacao-imoveis-niteroi" className="underline font-semibold hover:text-[#203B32]">
                legalização de imóveis em Niterói
              </Link>.
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="max-w-2xl mb-14 text-left">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Perguntas Frequentes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Dúvidas comuns sobre averbação no Registro de Imóveis
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((f, idx) => (
                <div key={idx} className="bg-white border border-[#E8DFD0] rounded-[3px] p-6">
                  <h3 className="font-serif text-base sm:text-lg text-[#203B32] mb-2 font-normal">
                    {f.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed font-light">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de Contato */}
        <LpContactForm />
      </main>

      <LpFooter />
      <FloatingWhatsApp />
    </div>
  );
}
