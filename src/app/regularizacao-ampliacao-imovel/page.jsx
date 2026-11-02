import Link from "next/link";
import LpHeader from "@/components/LandingPage/LpHeader";
import LpTrustBand from "@/components/LandingPage/LpTrustBand";
import LpContactForm from "@/components/LandingPage/LpContactForm";
import LpFooter from "@/components/LandingPage/LpFooter";
import FloatingWhatsApp from "@/components/LandingPage/FloatingWhatsApp";

export const metadata = {
  title: "Regularização de Ampliação de Imóvel | Roberto Moura — Betel Arquitetura",
  description:
    "Construiu um novo pavimento, fechou varanda ou ampliou a casa sem licença? Saiba como regularizar a ampliação do seu imóvel com orientação técnica especializada.",
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/regularizacao-ampliacao-imovel/",
  },
  openGraph: {
    title: "Regularização de Ampliação de Imóvel | Roberto Moura — Betel Arquitetura",
    description:
      "Orientação técnica e rito legal para regularizar ampliações, reformas e divergências de metragem em Niterói, São Gonçalo e Maricá.",
    url: "https://www.betelarquitetura.com.br/regularizacao-ampliacao-imovel/",
    type: "website",
  },
};

export default function RegularizacaoAmpliacaoPage() {
  const whatsappNumber = "5521997339287";
  const whatsappMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de solicitar orientação técnica para regularizar uma ampliação no meu imóvel."
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Regularização de Ampliação de Imóvel",
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
    "description": "Procedimento técnico e administrativo perante as prefeituras e cartórios para regularização de ampliações, coberturas, acréscimos e obras concluídas sem licença prévia."
  };

  const situations = [
    {
      title: "Construção de Novo Pavimento ou Cômodo",
      desc: "Acréscimo de quartos, suítes, salas ou segundo pavimento que modificou a área construída registrada originalmente na prefeitura.",
    },
    {
      title: "Fechamento de Varanda e Coberturas",
      desc: "Fechamento de terraços, churrasqueiras, áreas gourmet ou telhados em coberturas de edifícios ou residências unifamiliares.",
    },
    {
      title: "Garagens e Edículas nos Fundos",
      desc: "Construções anexas, lavanderias externas e garagens cobertas que ultrapassaram a taxa de ocupação ou recuos do loteamento.",
    },
    {
      title: "Divergência entre Medição Real e IPTU/RGI",
      desc: "Quando o carnê de IPTU cobra uma metragem diferente daquela averbada na certidão de ônus reais do Registro Geral de Imóveis.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Vistoria e Levantamento Cadastral (As-Built)",
      desc: "Medição in loco de toda a edificação com conferência das áreas existentes, recuos frontais/laterais, taxa de ocupação e permeabilidade.",
    },
    {
      num: "02",
      title: "Diagnóstico Urbanístico e Enquadramento",
      desc: "Cruzamento da edificação com o Código de Edificações municipal para verificar se o acréscimo é legalizável pelo rito convencional ou mediante instrumento de compensação.",
    },
    {
      num: "03",
      title: "Elaboração de Peças Técnicas e RRT",
      desc: "Desenvolvimento do conjunto gráfico exigido pelo município (plantas baixas, cortes, fachadas, quadro de áreas) com emissão do Registro de Responsabilidade Técnica (CAU).",
    },
    {
      num: "04",
      title: "Processo Municipal e Carta de Habite-se",
      desc: "Protocolo formal, cumprimento de eventuais exigências técnicas da fiscalização e acompanhamento até a expedição do Boletim de Aceite / Habite-se.",
    },
  ];

  const faqs = [
    {
      q: "Toda ampliação pode ser regularizada?",
      a: "A possibilidade de regularização depende do cumprimento das normas urbanísticas vigentes no município (como taxa de ocupação, recuos em relação às divisas, altura máxima de gabarito e iluminação natural). Em alguns casos, quando a obra excede os índices convencionais, a legalização pode requerer instrumentos municipais específicos (como a mais-valia ou contrapartida onerosa), desde que haja legislação vigente que a autorize.",
    },
    {
      q: "Por que uma ampliação irregular impede a venda por financiamento?",
      a: "Quando o comprador solicita financiamento habitacional (Caixa, Itaú, Santander, etc.), o engenheiro do banco faz a vistoria presencial. Se a casa tiver 200 m² construídos, mas na certidão de ônus reais do RGI constar apenas 120 m², o banco recusa a garantia e bloqueia o financiamento até a averbação da ampliação.",
    },
    {
      q: "Se eu já pago IPTU pela área aumentada, meu imóvel está regularizado?",
      a: "Não. A cobrança do IPTU é de natureza estritamente tributária (Princípio da Não Imunidade Tributária da Ilegalidade). A prefeitura cadastra a área ampliada por foto aérea ou recadastramento para fins de cobrança do imposto, mas isso não substitui o alvará de obras nem a Carta de Habite-se.",
    },
    {
      q: "Quais documentos preciso ter em mãos para a primeira análise?",
      a: "Para iniciarmos a triagem, você pode compartilhar fotos do imóvel, a certidão de ônus reais do RGI (ou escritura) e o espelho do carnê de IPTU mais recente. Se tiver projetos antigos ou plantas da casa, eles ajudam a agilizar o diagnóstico.",
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
        {/* Hero da Página de Serviço */}
        <section className="relative bg-[#F8F7F3] text-[#292D2A] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex flex-col items-start space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8DFD0]/60 border border-[#AD9166]/30 text-[#203B32] text-[11px] font-semibold tracking-widest uppercase rounded-[2px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AD9166]" />
                REGULARIZAÇÃO DE OBRAS E ACRÉSCIMOS
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#203B32] tracking-tight leading-[1.14]">
                Ampliou o seu imóvel e precisa regularizar a documentação?
              </h1>

              <p className="text-[#292D2A]/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl">
                Orientação técnica e condução de processos para averbação de novos pavimentos, reformas, coberturas e acréscimos com <strong className="font-semibold text-[#203B32]">Roberto Moura</strong>, arquiteto e urbanista (CAU/BR A14965-9), sócio-fundador da Betel Arquitetura.
              </p>

              <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 px-8 py-4 bg-[#203B32] hover:bg-[#344F43] text-[#F8F7F3] font-medium text-xs sm:text-sm tracking-wider rounded-[3px] shadow-sm hover:shadow transition-all"
                >
                  <span>Solicitar análise da minha ampliação</span>
                  <span className="text-[#AD9166]">&rarr;</span>
                </a>

                <Link
                  href="/legalizacao-de-imoveis"
                  className="inline-flex justify-center items-center px-6 py-4 text-[#203B32] hover:text-[#344F43] font-medium text-xs sm:text-sm tracking-wider border border-[#E8DFD0] hover:border-[#AD9166]/50 bg-white/60 transition-all rounded-[3px]"
                >
                  Conhecer visão geral do serviço
                </Link>
              </div>

              <p className="text-[11px] text-[#73766F] leading-normal pt-1 max-w-xl">
                * Cada caso depende de levantamento in loco, histórico documental e atendimento às normas urbanísticas da prefeitura competente.
              </p>

            </div>
          </div>
        </section>

        <LpTrustBand />

        {/* Situações Comuns de Ampliação */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Identificação do Caso
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Situações frequentes de ampliações não averbadas
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                A necessidade de regularização costuma surgir ao tentar vender o imóvel, transmitir por herança ou receber uma notificação municipal.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {situations.map((item, idx) => (
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

        {/* Como Funciona o Procedimento */}
        <section className="py-20 md:py-28 bg-white text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Rito Técnico
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Como regularizamos a sua ampliação
              </h2>
              <p className="text-[#292D2A]/80 mt-3 text-base leading-relaxed">
                O trabalho técnico do arquiteto organiza a realidade construtiva da sua casa e formaliza o projeto perante a Secretaria de Urbanismo.
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
              <strong>Importante para o Registro de Imóveis (RGI):</strong> Após o deferimento do Habite-se pela prefeitura, a ampliação deve ser averbada no Cartório de RGI mediante apresentação da CND de Obra da Receita Federal (SERO). Isso assegura o pleno valor de mercado e a aptidão para financiamento bancário. Conheça também nossa atuação em{" "}
              <Link href="/averbacao-construcao" className="underline font-semibold hover:text-[#203B32]">
                averbação de construção em cartório
              </Link>.
            </div>
          </div>
        </section>

        {/* FAQ da Página */}
        <section className="py-20 md:py-28 bg-[#F8F7F3] text-[#292D2A] border-b border-[#E8DFD0]">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="max-w-2xl mb-14 text-left">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block mb-2">
                Dúvidas Comuns
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#203B32] font-normal leading-tight">
                Perguntas frequentes sobre regularização de ampliações
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
