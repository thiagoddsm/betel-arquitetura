import Link from "next/link";
import LpHeader from "@/components/LandingPage/LpHeader";
import LpTrustBand from "@/components/LandingPage/LpTrustBand";
import LpContactForm from "@/components/LandingPage/LpContactForm";
import LpFooter from "@/components/LandingPage/LpFooter";
import FloatingWhatsApp from "@/components/LandingPage/FloatingWhatsApp";

export const metadata = {
  title: "Legalização de Imóveis em Maricá | Roberto Moura (CAU/BR A14965-9)",
  description:
    "Orientação técnica para Habite-se, saneamento (fossa/filtro/sumidouro) e regularização de imóveis em Maricá e Itaipuaçu. Novo Plano Diretor LC 400/2025.",
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/legalizacao-imoveis-marica/",
  },
  openGraph: {
    title: "Legalização de Imóveis em Maricá | Roberto Moura — Betel Arquitetura",
    description:
      "Assessoria técnica em Maricá e Itaipuaçu: Habite-se, projetos hidrossanitários, Novo Plano Diretor LC 400/2025 e averbação com Roberto Moura.",
    url: "https://www.betelarquitetura.com.br/legalizacao-imoveis-marica/",
    type: "website",
  },
};

export default function LegalizacaoMaricaPage() {
  const whatsappNumber = "5521997339287";
  const whatsappMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de solicitar orientação técnica para regularização de um imóvel em Maricá."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Legalização e Regularização de Imóveis em Maricá - Roberto Moura",
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
      "name": "Maricá",
      "sameAs": "https://pt.wikipedia.org/wiki/Maric%C3%A1"
    },
    "telephone": "+5521997339287",
    "description": "Assessoria técnica e projetos para concessão de Habite-se, adequação sanitária e regularização de imóveis perante a Secretaria de Urbanismo de Maricá e Cartório de RGI de Maricá."
  };

  const highlights = [
    {
      title: "Novo Plano Diretor de Maricá (LC nº 400/2025)",
      desc: "Adequação dos processos ao novo marco do desenvolvimento urbano sustentável de Maricá e à Lei nº 3.431/2023 de Uso e Ocupação do Solo.",
    },
    {
      title: "Projetos de Saneamento Individual Obrigatório",
      desc: "Em Maricá, a vistoria do Habite-se exige a comprovação física e documental do sistema de Fossa Séptica + Filtro Anaeróbio + Sumidouro (NBRs 7229 e 13969) com projeto assinado por profissional técnico.",
    },
    {
      title: "Fiscalização e Desembargo em Itaipuaçu",
      desc: "Atendimento a proprietários de Itaipuaçu com notificações, multas ou embargos de obras por falta de alvará prévio ou ocupação inadequada de recuos.",
    },
    {
      title: "Averbação no Cartório de RGI de Maricá",
      desc: "Instrução cartorial completa para que a residência seja averbada na matrícula do terreno, permitindo financiamento bancário pela Caixa e bancos privados.",
    },
  ];

  const regions = [
    {
      region: "Itaipuaçu (Rápido Crescimento e Alta Demanda)",
      desc: "Região com expressivo volume de construções residenciais e condomínios de sobrados. Foco em medições cadastrais, controle de greide/nível de soleira e projetos de drenagem e esgotamento sanitário individual.",
    },
    {
      region: "Centro de Maricá e Adjacências",
      desc: "Adensamento comercial e residencial multifamiliar. Exigência estrita de recuo frontal obrigatório para expansão viária e atendimento às normas de acessibilidade.",
    },
    {
      region: "Ponta Negra, Cordeirinho e Orla Lagunar",
      desc: "Fortes restrições ambientais decorrentes da proximidade com restingas e lagoas, demandando observância à Faixa Marginal de Proteção (FMP) de 15m a 30m delimitada pelos órgãos ambientais.",
    },
    {
      region: "Inoã e Condomínios Fechados",
      desc: "Regularização de ampliações, coberturas e áreas de lazer executadas em lotes de condomínios residenciais fechados que exigem aprovação na prefeitura e na convenção interna.",
    },
  ];

  const faqs = [
    {
      q: "Por que o sistema de fossa séptica e filtro é tão cobrado no Habite-se de Maricá?",
      a: "Enquanto as redes públicas da Sanemar seguem em implantação, a legislação sanitária e ambiental de Maricá exige que toda edificação conte com sistema autônomo individual dimensionado (fossa séptica + filtro anaeróbio + sumidouro). Na vistoria final do Habite-se, o fiscal verifica in loco as tampas de inspeção e as especificações técnicas apresentadas no projeto.",
    },
    {
      q: "Comprei uma casa em Itaipuaçu e o banco recusou o financiamento. O que houve?",
      a: "É comum em Itaipuaçu existirem casas vendidas apenas por escritura de posse ou onde a construção física não foi averbada na matrícula do RGI. Sem a averbação da benfeitoria no Registro de Imóveis, os bancos não aprovam o crédito habitacional.",
    },
    {
      q: "O que é a Mais-Valia em Maricá?",
      a: "Regulamentada recentemente pelo Decreto nº 166/2025, a mais-valia é o instrumento que permite a regularização onerosa (mediante contrapartida financeira à prefeitura) de obras que ultrapassaram parâmetros permitidos, como taxa de ocupação ou recuos, desde que não invadam áreas públicas ou de proteção ambiental.",
    },
    {
      q: "Onde os processos de obras tramitam em Maricá?",
      a: "Os processos são instruídos junto à Secretaria de Urbanismo e Planejamento Territorial de Maricá, com protocolo e acompanhamento pelo portal SIM (Serviços Integrados Municipais) e atendimento na sede central.",
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
                ATUAÇÃO MUNICIPAL ESPECIALIZADA • MARICÁ - RJ
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#203B32] tracking-tight leading-[1.14]">
                Legalização de imóveis em Maricá e Itaipuaçu: Habite-se, saneamento e registro
              </h1>

              <p className="text-[#292D2A]/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
                Orientação técnica sob o Novo Plano Diretor de Maricá (LC nº 400/2025) e exigências hidrossanitárias para obtenção de Habite-se e averbação com <strong className="font-semibold text-[#203B32]">Roberto Moura</strong>, arquiteto e urbanista (CAU/BR A14965-9).
              </p>

              <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs sm:text-sm tracking-wider rounded-[3px] shadow-sm hover:shadow transition-all"
                >
                  <span>Solicitar análise do meu imóvel em Maricá</span>
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
                * Atuação técnica em Itaipuaçu, Centro de Maricá, Inoã, Ponta Negra, Cordeirinho, São José do Imbassaí e condomínios.
              </p>

            </div>
          </div>
        </section>

        <LpTrustBand />

        {/* Pilares e Conhecimento Local */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Conformidade Técnica em Maricá
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Como conduzimos a regularização na Secretaria de Urbanismo de Maricá
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                Maricá vive um momento de fiscalização ativa e modernização urbanística. A instrução correta do processo evita embargos e agiliza a liberação da certidão de habite-se.
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

        {/* Vetores de Crescimento de Maricá */}
        <section className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Regiões de Atendimento
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Particularidades técnicas por região de Maricá
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                As regras variam entre a faixa litorânea de Itaipuaçu, áreas centrais e regiões lagunares de preservação.
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
                    Região 0{i + 1}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-[#F8F7F3] border-l-4 border-[#AD9166] text-xs sm:text-sm text-[#344F43] leading-relaxed">
              <strong>Etapa cartorial essencial:</strong> Após a emissão do Habite-se pela prefeitura de Maricá, fazemos o desembaraço da CND da Receita Federal e a{" "}
              <Link href="/averbacao-construcao" className="underline font-semibold hover:text-[#203B32]">
                averbação da construção no Cartório de RGI de Maricá
              </Link>. Se você aumentou a área da sua casa, veja também{" "}
              <Link href="/regularizacao-ampliacao-imovel" className="underline font-semibold hover:text-[#203B32]">
                regularização de ampliação de imóvel
              </Link>.
            </div>
          </div>
        </section>

        {/* FAQs de Maricá */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="max-w-2xl mb-14 text-left">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Dúvidas Locais
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Perguntas frequentes sobre regularização em Maricá e Itaipuaçu
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
