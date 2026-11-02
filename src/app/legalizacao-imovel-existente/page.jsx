import Link from "next/link";
import LpHeader from "@/components/LandingPage/LpHeader";
import LpTrustBand from "@/components/LandingPage/LpTrustBand";
import LpContactForm from "@/components/LandingPage/LpContactForm";
import LpFooter from "@/components/LandingPage/LpFooter";
import FloatingWhatsApp from "@/components/LandingPage/FloatingWhatsApp";

export const metadata = {
  title: "Legalização de Imóvel Existente e Habite-se | Roberto Moura — Betel Arquitetura",
  description:
    "Seu imóvel foi construído sem projeto aprovado ou alvará? Saiba como obter a Carta de Habite-se e legalizar a edificação existente perante a prefeitura.",
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/legalizacao-imovel-existente/",
  },
  openGraph: {
    title: "Legalização de Imóvel Existente e Habite-se | Roberto Moura — Betel Arquitetura",
    description:
      "Orientação técnica para legalização de construções antigas e consolidadas sem habite-se em Niterói, São Gonçalo e Maricá.",
    url: "https://www.betelarquitetura.com.br/legalizacao-imovel-existente/",
    type: "website",
  },
};

export default function LegalizacaoImovelExistentePage() {
  const whatsappNumber = "5521997339287";
  const whatsappMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de entender como legalizar um imóvel existente que não possui habite-se."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Legalização de Imóvel Existente e Habite-se",
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
    "description": "Elaboração de projetos de levantamento as-built, laudos de estabilidade e habitabilidade e condução de processos administrativos para concessão de Habite-se em edificações consolidadas."
  };

  const steps = [
    {
      num: "01",
      title: "Levantamento Arquitetônico Completo (As-Built)",
      desc: "Medição integral de todos os cômodos, áreas externas, recuos, desníveis e características construtivas da edificação existente.",
    },
    {
      num: "02",
      title: "Laudo Técnico de Estabilidade e Habitabilidade",
      desc: "Avaliação profissional que atesta que a edificação possui condições adequadas de solidez estrutural, ventilação, iluminação e segurança para uso.",
    },
    {
      num: "03",
      title: "Instrução Processual na Secretaria de Urbanismo",
      desc: "Elaboração das pranchas no padrão exigido pelo município, emissão de RRT (CAU) e abertura formal do processo de legalização de construção.",
    },
    {
      num: "04",
      title: "Acompanhamento Fiscal até a Carta de Habite-se",
      desc: "Atendimento a exigências dos fiscais de obras, agendamento de vistoria municipal e obtenção do Boletim de Aceite / Habite-se definitivo.",
    },
  ];

  const profileCases = [
    {
      title: "Casas Construídas Há Anos Sem Planta Aprovada",
      desc: "Imóveis residenciais erguidos por etapas ao longo dos anos, com ou sem acompanhamento técnico inicial, que precisam de regularização para inventário ou venda.",
    },
    {
      title: "Imóveis Comerciais Sem Habite-se",
      desc: "Lojas, clínicas, escritórios e galpões que necessitam de alvará de funcionamento e certidão de habite-se para licenciamento de atividades econômicas.",
    },
    {
      title: "Imóveis com Notificação ou Embargo Municipal",
      desc: "Proprietários que receberam intimação de fiscais da prefeitura e necessitam de representação técnica formal com RRT para sanar as irregularidades.",
    },
    {
      title: "Construções Adquiridas por Contrato de Gaveta ou Posse",
      desc: "Edificações com documentação incompleta que estão em processo de regularização registral ou usucapião e demandam plantas técnicas de situação.",
    },
  ];

  const faqs = [
    {
      q: "É possível legalizar uma casa muito antiga que nunca teve planta?",
      a: "Sim. A grande maioria dos processos de legalização de imóveis existentes é exatamente de casas que nunca tiveram projeto aprovado. O arquiteto realiza o levantamento in loco (as-built), desenha as plantas atuais conforme a edificação se encontra e instrui o processo perante a prefeitura comprovando as condições de segurança e habitabilidade.",
    },
    {
      q: "O que a prefeitura avalia para conceder o Habite-se em um imóvel existente?",
      a: "A fiscalização avalia se a construção atende aos parâmetros básicos do Código de Edificações municipal, especialmente recuos frontais e laterais, ventilação e iluminação natural de banheiros e dormitórios, altura de pé-direito e inexistência de risco estrutural aparente.",
    },
    {
      q: "Quanto tempo demora para sair o Habite-se?",
      a: "O prazo divide-se em duas partes: a etapa técnica do escritório (vistoria, medição e confecção das plantas em cerca de 15 a 30 dias) e o prazo de análise da prefeitura, que varia de acordo com o município e a demanda interna do órgão público.",
    },
    {
      q: "Após o Habite-se, o que devo fazer?",
      a: "Com o Habite-se em mãos, o próximo passo indispensável é emitir a CND de Obras perante a Receita Federal (sistema SERO) e averbar a construção na matrícula do Cartório de Registro de Imóveis (RGI) para que o imóvel fique 100% regular.",
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
                HABITE-SE & CONSTRUÇÕES EXISTENTES
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#203B32] tracking-tight leading-[1.14]">
                Legalização de imóvel existente: seu patrimônio regularizado e seguro
              </h1>

              <p className="text-[#292D2A]/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
                Soluções técnicas para edificações residenciais e comerciais construídas sem projeto inicial aprovado. Levantamento as-built, laudos técnicos e condução do Habite-se com <strong className="font-semibold text-[#203B32]">Roberto Moura</strong>, arquiteto e urbanista (CAU/BR A14965-9).
              </p>

              <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs sm:text-sm tracking-wider rounded-[3px] shadow-sm hover:shadow transition-all"
                >
                  <span>Solicitar análise do meu imóvel</span>
                  <span className="text-[#AD9166]">&rarr;</span>
                </a>

                <Link
                  href="/legalizacao-de-imoveis"
                  className="inline-flex justify-center items-center px-6 py-4 text-[#203B32] hover:text-[#344F43] font-medium text-xs sm:text-sm tracking-wider border border-[#E8DFD0] hover:border-[#AD9166]/50 bg-white/60 transition-all rounded-[3px]"
                >
                  Ver visão geral de serviços
                </Link>
              </div>

              <p className="text-[11px] text-[#73766F] leading-normal pt-1 max-w-xl">
                * Condução com responsabilidade técnica de acordo com as normas municipais de Niterói, São Gonçalo, Maricá e Rio de Janeiro.
              </p>

            </div>
          </div>
        </section>

        <LpTrustBand />

        {/* Perfil de Casos */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Casos Típicos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Em quais casos a legalização de imóvel existente se aplica?
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                Identifique a situação do seu imóvel e entenda como a intervenção técnica resolve a pendência junto aos órgãos públicos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {profileCases.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DFD0] rounded-[3px] p-7 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.03)]"
                >
                  <div className="text-[11px] font-serif font-semibold text-[#AD9166] mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#203B32] mb-2 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O Rito Técnico de Regularização */}
        <section className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Metodologia
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                As quatro etapas para obter o Habite-se
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                Estruturamos todo o processo para que o proprietário não precise enfrentar a burocracia dos órgãos públicos sem amparo profissional.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, i) => (
                <div
                  key={i}
                  className="bg-[#F8F7F3] border border-[#E8DFD0] rounded-[3px] p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-3xl text-[#AD9166] block mb-3">
                      {st.num}
                    </span>
                    <h3 className="font-serif text-base font-normal text-[#203B32] mb-2 leading-snug">
                      {st.title}
                    </h3>
                    <p className="text-xs text-[#73766F] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E8DFD0]/60 text-[10px] uppercase tracking-wider text-[#AD9166] font-medium">
                    Fase {i + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-[#F8F7F3] border-l-4 border-[#AD9166] text-xs sm:text-sm text-[#344F43] leading-relaxed">
              <strong>Próximo passo após a prefeitura:</strong> Finalizada a concessão do Habite-se, conduzimos a{" "}
              <Link href="/averbacao-construcao" className="underline font-semibold hover:text-[#203B32]">
                averbação da construção no Cartório de RGI
              </Link>. Se a sua demanda envolver apenas uma reforma com aumento de área, conheça também nossa página de{" "}
              <Link href="/regularizacao-ampliacao-imovel" className="underline font-semibold hover:text-[#203B32]">
                regularização de ampliação de imóvel
              </Link>.
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="max-w-2xl mb-14 text-left">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Dúvidas Técnicas
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Perguntas frequentes sobre legalização de imóveis existentes
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
