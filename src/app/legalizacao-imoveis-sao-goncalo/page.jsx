import Link from "next/link";
import LpHeader from "@/components/LandingPage/LpHeader";
import LpTrustBand from "@/components/LandingPage/LpTrustBand";
import LpContactForm from "@/components/LandingPage/LpContactForm";
import LpFooter from "@/components/LandingPage/LpFooter";
import FloatingWhatsApp from "@/components/LandingPage/FloatingWhatsApp";

export const metadata = {
  title: "Legalização de Imóveis em São Gonçalo | Roberto Moura (CAU/BR A14965-9)",
  description:
    "Orientação técnica para Habite-se, desdobro de lotes e regularização de imóveis na Prefeitura de São Gonçalo (Subsecretaria / Lavourão) com Roberto Moura.",
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/legalizacao-imoveis-sao-goncalo/",
  },
  openGraph: {
    title: "Legalização de Imóveis em São Gonçalo | Roberto Moura — Betel Arquitetura",
    description:
      "Atendimento técnico especializado em São Gonçalo: Habite-se, desdobro de terrenos e legalização de construções antigas com Roberto Moura.",
    url: "https://www.betelarquitetura.com.br/legalizacao-imoveis-sao-goncalo/",
    type: "website",
  },
};

export default function LegalizacaoSaoGoncaloPage() {
  const whatsappNumber = "5521997339287";
  const whatsappMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de solicitar orientação técnica para regularização de um imóvel em São Gonçalo."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Legalização e Regularização de Imóveis em São Gonçalo - Roberto Moura",
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
    "areaServed": {
      "@type": "City",
      "name": "São Gonçalo",
      "sameAs": "https://pt.wikipedia.org/wiki/S%C3%A3o_Gon%C3%A7alo_(Rio_de_Janeiro)"
    },
    "telephone": "+5521997339287",
    "description": "Elaboração de projetos de levantamento, desdobro de terrenos e condução de Habite-se perante a Prefeitura de São Gonçalo e Cartórios de RGI de São Gonçalo."
  };

  const services = [
    {
      title: "Desdobro e Desmembramento de Terrenos",
      desc: "Subdivisão legal de lotes onde foram erguidas duas ou mais casas familiares com acessos independentes, permitindo a criação de IPTUs e matrículas autônomas.",
    },
    {
      title: "Legalização de Imóveis Antigos sem Habite-se",
      desc: "Instrução de processos para residências consolidadas há anos na cidade, com elaboração de Laudo Técnico de Habitabilidade e Estabilidade Estrutural com RRT.",
    },
    {
      title: "Acréscimos, Coberturas e Reformas",
      desc: "Adequação documental de ampliações de pavimentos, varandas e garagens que modificaram a área construída perante a prefeitura.",
    },
    {
      title: "Averbação nos 1º, 2º e 3º RGIs de São Gonçalo",
      desc: "Condução documental completa do Habite-se municipal à CND da Receita Federal (SERO) e respectiva averbação na matrícula registral.",
    },
  ];

  const highlights = [
    {
      title: "Atendimento na Subsecretaria (Centro Cultural Joaquim Lavoura)",
      desc: "Conhecemos o rito processual e a documentação exigida pela Subsecretaria de Fiscalização e Licenciamento de São Gonçalo, reduzindo idas e vindas de exigências.",
    },
    {
      title: "Código de Edificações de São Gonçalo (LC nº 05/2010)",
      desc: "Avaliação criteriosa de recuos, afastamentos de divisa, iluminação, ventilação e áreas mínimas exigidas pela legislação urbanística municipal.",
    },
    {
      title: "Diagnóstico Fiscal de IPTU vs. RGI",
      desc: "Cruzamento entre os lançamentos tributários da Secretaria Municipal de Fazenda e a realidade jurídica transcrita nos Cartórios de Imóveis.",
    },
    {
      title: "40 Anos de Vivência Técnica no Leste Fluminense",
      desc: "Roberto Moura alia profunda vivência das dinâmicas imobiliárias de São Gonçalo ao suporte técnico do escritório Betel Arquitetura.",
    },
  ];

  const faqs = [
    {
      q: "Como funciona a divisão de um terreno com mais de uma casa em São Gonçalo?",
      a: "O procedimento chama-se desdobro de lote. O arquiteto realiza a medição topográfica das duas residências, delimita a nova linha de divisa e submete o projeto à prefeitura. Cada novo lote deve respeitar a área mínima e a testada (largura da frente) exigidas pela zona da cidade, além de possuir acesso direto para a via pública.",
    },
    {
      q: "Moro em uma casa antiga que nunca teve Habite-se. Como começar?",
      a: "Iniciamos com uma vistoria técnica no imóvel para produzir o projeto arquitetônico de levantamento (as-built) e o Laudo de Habitabilidade. Com esses documentos e o RRT emitido pelo CAU, protocolamos o pedido de Legalização de Construção Existente na prefeitura.",
    },
    {
      q: "Onde os processos de obras de São Gonçalo são protocolados atualmente?",
      a: "Os processos de legalização de obras, acréscimos e habite-se em São Gonçalo tramitam na Subsecretaria de Fiscalização e Licenciamento, sediada no Centro Cultural Joaquim Lavoura (Lavourão), na Av. Presidente Kennedy, 721, Estrela do Norte.",
    },
    {
      q: "Depois do Habite-se em São Gonçalo, em qual cartório o registro é feito?",
      a: "São Gonçalo é dividida em três circunscrições registrais: o 1º Ofício (Zé Garoto), o 2º Ofício (Centro) e o 3º Ofício de Registro de Imóveis (Alcântara). A localização do imóvel determina qual cartório é competente para averbar a construção.",
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
                ATUAÇÃO MUNICIPAL ESPECIALIZADA • SÃO GONÇALO - RJ
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#203B32] tracking-tight leading-[1.14]">
                Legalização de imóveis em São Gonçalo: Habite-se, desdobros e regularização predial
              </h1>

              <p className="text-[#292D2A]/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
                Orientação técnica para desdobro de terrenos, aprovação de construções existentes e averbação em cartório com <strong className="font-semibold text-[#203B32]">Roberto Moura</strong>, arquiteto e urbanista (CAU/BR A14965-9).
              </p>

              <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs sm:text-sm tracking-wider rounded-[3px] shadow-sm hover:shadow transition-all"
                >
                  <span>Solicitar análise do meu imóvel em São Gonçalo</span>
                  <span className="text-[#AD9166]">&rarr;</span>
                </a>

                <Link
                  href="/legalizacao-de-imoveis"
                  className="inline-flex justify-center items-center px-6 py-4 text-[#203B32] hover:text-[#344F43] font-medium text-xs sm:text-sm tracking-wider border border-[#E8DFD0] hover:border-[#AD9166]/50 bg-white/60 transition-all rounded-[3px]"
                >
                  Ver estrutura do escritório
                </Link>
              </div>

              <p className="text-[11px] text-[#73766F] leading-normal pt-1 max-w-xl">
                * Atendimento em Alcântara, Rocha, Centro, Zé Garoto, Colubandê, Mutondo, Pacheco, Trindade, Neves e demais bairros.
              </p>

            </div>
          </div>
        </section>

        <LpTrustBand />

        {/* Serviços mais demandados em SG */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Demandas em São Gonçalo
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Principais situações de regularização em São Gonçalo
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                Grande parte dos imóveis de São Gonçalo possui edificações consolidadas que necessitam de atualização cadastral e registral para viabilizar negociações e partilhas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DFD0] rounded-[3px] p-7 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.03)]"
                >
                  <div className="text-[11px] font-serif font-semibold text-[#AD9166] mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#203B32] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pilares e Conhecimento Local */}
        <section className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Segurança Técnica
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Como conduzimos seu processo perante a Prefeitura de São Gonçalo
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                A experiência prática com os trâmites locais da Subsecretaria e dos três cartórios de RGI de São Gonçalo garante agilidade e clareza.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F7F3] border border-[#E8DFD0] rounded-[3px] p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#203B32] mb-2">
                      {h.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E8DFD0]/60 text-[10px] uppercase tracking-wider text-[#AD9166] font-medium">
                    Diferencial 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-[#F8F7F3] border-l-4 border-[#AD9166] text-xs sm:text-sm text-[#344F43] leading-relaxed">
              <strong>Regularização de obras e acréscimos:</strong> Se você construiu um pavimento novo ou ampliou a casa sem projeto original, conheça nossa página de{" "}
              <Link href="/regularizacao-ampliacao-imovel" className="underline font-semibold hover:text-[#203B32]">
                regularização de ampliações de imóveis
              </Link>{" "}
              ou tire dúvidas sobre a{" "}
              <Link href="/averbacao-construcao" className="underline font-semibold hover:text-[#203B32]">
                averbação da construção no Cartório de RGI
              </Link>.
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="max-w-2xl mb-14 text-left">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Dúvidas Locais
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Perguntas frequentes sobre legalização em São Gonçalo
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
