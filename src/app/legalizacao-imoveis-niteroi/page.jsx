import Link from "next/link";
import LpHeader from "@/components/LandingPage/LpHeader";
import LpTrustBand from "@/components/LandingPage/LpTrustBand";
import LpContactForm from "@/components/LandingPage/LpContactForm";
import LpFooter from "@/components/LandingPage/LpFooter";
import FloatingWhatsApp from "@/components/LandingPage/FloatingWhatsApp";

export const metadata = {
  title: "Legalização de Imóveis em Niterói | Roberto Moura (CAU/BR A14965-9)",
  description:
    "Orientação técnica e processos de regularização na Secretaria de Urbanismo de Niterói (SMU). Nova Lei Urbanística 3.905/2024, Habite-se, Icaraí e Região Oceânica.",
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/legalizacao-imoveis-niteroi/",
  },
  openGraph: {
    title: "Legalização de Imóveis em Niterói | Roberto Moura — Betel Arquitetura",
    description:
      "Atuação técnica na SMU Niterói: Icaraí, Santa Rosa, Região Oceânica e Pendotiba. Nova Lei Urbanística e Habite-se com Roberto Moura.",
    url: "https://www.betelarquitetura.com.br/legalizacao-imoveis-niteroi/",
    type: "website",
  },
};

export default function LegalizacaoNiteroiPage() {
  const whatsappNumber = "5521997339287";
  const whatsappMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de solicitar orientação técnica para regularização de um imóvel em Niterói."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Legalização e Regularização de Imóveis em Niterói - Roberto Moura",
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
      "name": "Niterói",
      "sameAs": "https://pt.wikipedia.org/wiki/Niter%C3%B3i"
    },
    "telephone": "+5521997339287",
    "description": "Assessoria e projetos técnicos para aprovação, concessão de Habite-se e regularização imobiliária perante a Secretaria Municipal de Urbanismo (SMU Niterói) e Cartórios do 1º e 2º RGI de Niterói."
  };

  const regions = [
    {
      region: "Icaraí, Ingá e Santa Rosa (Zona Sul)",
      desc: "Áreas de alta densidade onde prevalecem demandas de fechamento de varandas, ampliações em coberturas, pergolados, terraços e adequação a normas condominiais e recuos viários.",
    },
    {
      region: "Região Oceânica (Piratininga, Itaipu, Camboinhas)",
      desc: "Bairros horizontais com rígidas exigências de taxa de ocupação e permeabilidade mínima do solo (20% a 30%), além de sistemas hidrossanitários individuais (fossa-filtro-sumidouro).",
    },
    {
      region: "Pendotiba (Badu, Cantagalo, Maria Paula, Sapê)",
      desc: "Topografia com declives e encostas, demandando frequente elaboração de laudos de estabilidade geotécnica e respeito às faixas marginais de preservação de cursos d'água.",
    },
    {
      region: "Centro, Fonseca e Zona Norte",
      desc: "Imóveis e galpões comerciais que exigem adequações ao Código de Edificações de Niterói para obtenção de alvarás de funcionamento e acessibilidade.",
    },
  ];

  const highlights = [
    {
      title: "Nova Lei Urbanística de Niterói (Lei nº 3.905/2024)",
      desc: "A legislação em vigor unificou os antigos Planos Urbanísticos Regionais (PURs) sob as diretrizes do Plano Diretor de Niterói, atualizando os parâmetros de uso do solo e as condições de regularização edilícia.",
    },
    {
      title: "Trâmite Digital pela SMU Niterói",
      desc: "Instrução técnica 100% digital pelo Portal de Serviços da Prefeitura de Niterói, com acompanhamento de folhas de exigências e interlocução direta com os analistas municipais.",
    },
    {
      title: "Boletim de Aceite de Obras & Carta de Habite-se",
      desc: "Condução do projeto de levantamento (as-built) e vistoria fiscal até a emissão do documento municipal que atesta a conformidade técnica da construção.",
    },
    {
      title: "Averbação no 1º e 2º Ofícios de RGI de Niterói",
      desc: "Encaminhamento cartorial completo da CND da Receita Federal (SERO) à averbação na matrícula do imóvel no Registro Geral de Imóveis.",
    },
  ];

  const faqs = [
    {
      q: "Como a Nova Lei Urbanística de Niterói impacta quem tem obra sem habite-se?",
      a: "A Lei nº 3.905/2024 trouxe novos parâmetros para índices construtivos, recuos e taxas de ocupação em diversas zonas da cidade. Edificações concluídas que antes não se enquadravam nos antigos PURs podem agora encontrar viabilidade técnica de legalização ou compensação urbanística.",
    },
    {
      q: "O que é exigido para regularizar acréscimo de cobertura em Niterói?",
      a: "Além do projeto arquitetônico assinado por arquiteto registrado no CAU e observância dos limites de gabarito e prismas de ventilação, é indispensável a autorização expressa do condomínio (ata de assembleia com quórum legal), antes de protocolar na SMU Niterói.",
    },
    {
      q: "Na Região Oceânica, por que a taxa de permeabilidade é tão fiscalizada?",
      a: "Devido às bacias hidrográficas das lagoas de Piratininga e Itaipu, a legislação de Niterói exige que uma parcela significativa do terreno (geralmente entre 20% e 30%) seja mantida com solo natural e permeável. Projetos de legalização devem demonstrar graficamente o cumprimento dessa taxa no quadro de áreas.",
    },
    {
      q: "Em quais cartórios de Niterói a averbação é realizada?",
      a: "Niterói conta com duas circunscrições imobiliárias: o 1º Ofício de Registro de Imóveis (Centro) e o 2º Ofício de Registro de Imóveis (Icaraí). A circunscrição competente depende da localização exata do lote.",
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
                ATUAÇÃO MUNICIPAL ESPECIALIZADA • NITERÓI - RJ
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#203B32] tracking-tight leading-[1.14]">
                Legalização de imóveis em Niterói: do Habite-se na SMU à averbação em cartório
              </h1>

              <p className="text-[#292D2A]/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
                Orientação técnica sob a Nova Lei Urbanística de Niterói (Lei nº 3.905/2024), com <strong className="font-semibold text-[#203B32]">Roberto Moura</strong>, arquiteto e urbanista (CAU/BR A14965-9), com mais de 40 anos de prática profissional na cidade.
              </p>

              <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs sm:text-sm tracking-wider rounded-[3px] shadow-sm hover:shadow transition-all"
                >
                  <span>Solicitar análise do meu imóvel em Niterói</span>
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
                * Atendimento em Icaraí, Santa Rosa, Itaipu, Piratininga, Camboinhas, Itacoatiara, Pendotiba, Fonseca e Centro.
              </p>

            </div>
          </div>
        </section>

        <LpTrustBand />

        {/* Pilares Técnicos em Niterói */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Conhecimento Regulatório Local
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Como conduzimos seu processo perante os órgãos de Niterói
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                Niterói possui trâmites informatizados e legislação urbanística rigorosa. A condução por profissional experiente reduz prazos e evita retrabalho.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E8DFD0] rounded-[3px] p-7 shadow-[0_2px_15px_-3px_rgba(32,59,50,0.03)]"
                >
                  <div className="text-[11px] font-serif font-semibold text-[#AD9166] mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#203B32] mb-2 leading-snug">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Particularidades por Bairros de Niterói */}
        <section className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Geografia Urbana de Niterói
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Particularidades técnicas por região de Niterói
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                Cada região do município possui diretrizes próprias de ocupação, permeabilidade e topografia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {regions.map((reg, i) => (
                <div
                  key={i}
                  className="bg-[#F8F7F3] border border-[#E8DFD0] rounded-[3px] p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#203B32] mb-2">
                      {reg.region}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#73766F] leading-relaxed">
                      {reg.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#E8DFD0]/60 text-[10px] uppercase tracking-wider text-[#AD9166] font-medium">
                    Diretriz Regional 0{i + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-[#F8F7F3] border-l-4 border-[#AD9166] text-xs sm:text-sm text-[#344F43] leading-relaxed">
              <strong>Demanda de ampliação ou cartório?</strong> Saiba mais sobre{" "}
              <Link href="/regularizacao-ampliacao-imovel" className="underline font-semibold hover:text-[#203B32]">
                regularização de ampliações de imóveis
              </Link>{" "}
              ou consulte os procedimentos de{" "}
              <Link href="/averbacao-construcao" className="underline font-semibold hover:text-[#203B32]">
                averbação de construção em cartório no RJ
              </Link>.
            </div>
          </div>
        </section>

        {/* FAQs de Niterói */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="max-w-2xl mb-14 text-left">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Dúvidas Locais
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Perguntas frequentes sobre legalização em Niterói
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
