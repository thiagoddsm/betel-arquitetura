import LpHeader from "@/components/LandingPage/LpHeader";
import LpHero from "@/components/LandingPage/LpHero";
import LpTrustBand from "@/components/LandingPage/LpTrustBand";
import LpSituations from "@/components/LandingPage/LpSituations";
import LpMainService from "@/components/LandingPage/LpMainService";
import LpProcessTimeline from "@/components/LandingPage/LpProcessTimeline";
import LpAuthority from "@/components/LandingPage/LpAuthority";
import LpComplementaryServices from "@/components/LandingPage/LpComplementaryServices";
import LpCasesAndExperience from "@/components/LandingPage/LpCasesAndExperience";
import LpFaq from "@/components/LandingPage/LpFaq";
import LpContactForm from "@/components/LandingPage/LpContactForm";
import LpFooter from "@/components/LandingPage/LpFooter";
import FloatingWhatsApp from "@/components/LandingPage/FloatingWhatsApp";

export const metadata = {
  title: "Legalização de Imóveis em Niterói, São Gonçalo e Maricá | Roberto Moura",
  description:
    "Orientação técnica e condução de processos de regularização imobiliária com Roberto Moura, arquiteto e urbanista (CAU/BR A14965-9), Betel Arquitetura.",
  openGraph: {
    title: "Legalização de Imóveis em Niterói, São Gonçalo e Maricá | Roberto Moura",
    description:
      "Seu imóvel regularizado. Orientação técnica e condução com Roberto Moura, arquiteto e urbanista (CAU/BR A14965-9).",
    type: "website",
    url: "https://www.betelarquitetura.com.br/legalizacao-de-imoveis/",
    images: [
      {
        url: "https://www.betelarquitetura.com.br/roberto-moura.png",
        width: 800,
        height: 800,
        alt: "Roberto Moura - Arquiteto e Urbanista CAU/BR A14965-9",
      },
    ],
  },
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/legalizacao-de-imoveis/",
  },
};

export default function LegalizacaoDeImoveisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.betelarquitetura.com.br/#roberto-moura",
        "name": "Roberto Moura",
        "jobTitle": "Arquiteto e Urbanista",
        "hasCredential": "CAU/BR A14965-9",
        "description": "Arquiteto e urbanista com mais de 40 anos de prática profissional em projetos, consultoria técnica e legalização de imóveis.",
        "image": "https://www.betelarquitetura.com.br/roberto-moura.png",
        "worksFor": {
          "@type": "Organization",
          "name": "Betel Arquitetura",
          "url": "https://www.betelarquitetura.com.br"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.betelarquitetura.com.br/#service-legalizacao",
        "name": "Roberto Moura - Regularização e Legalização de Imóveis",
        "url": "https://www.betelarquitetura.com.br/legalizacao-de-imoveis/",
        "telephone": "+5521997339287",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Niterói",
          "addressRegion": "RJ",
          "addressCountry": "BR"
        },
        "areaServed": [
          { "@type": "City", "name": "Niterói" },
          { "@type": "City", "name": "São Gonçalo" },
          { "@type": "City", "name": "Maricá" },
          { "@type": "City", "name": "Rio de Janeiro" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#292D2A] flex flex-col font-sans selection:bg-[#203B32] selection:text-[#F8F7F3]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Cabeçalho Minimalista e Elegante */}
      <LpHeader />

      <main className="flex-1">
        {/* 2. Hero Principal com Foto Autêntica */}
        <LpHero />

        {/* 3. Faixa de Credibilidade */}
        <LpTrustBand />

        {/* 4. Situações que Roberto Atende */}
        <LpSituations />

        {/* 5. Escopo Técnico: O que é analisado no seu imóvel */}
        <LpMainService />

        {/* 6. Como Funciona o Atendimento (Jornada do Cliente) */}
        <LpProcessTimeline />

        {/* 7. Apresentação Editorial de Roberto Moura com Foto Real */}
        <LpAuthority />

        {/* 8. Serviços Complementares */}
        <LpComplementaryServices />

        {/* 9. Tipos de Análise Técnica */}
        <LpCasesAndExperience />

        {/* 10. Perguntas Frequentes (FAQ Revisada) */}
        <LpFaq />

        {/* 11. CTA Final e Formulário com Consentimento LGPD */}
        <LpContactForm />
      </main>

      {/* 12. Rodapé Sóbrio */}
      <LpFooter />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
