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
  title: "Legalização de Imóveis em Niterói, São Gonçalo e Maricá | Roberto Moura — Betel Arquitetura",
  description:
    "Orientação técnica para regularização e legalização de imóveis com Roberto Moura, arquiteto e urbanista com mais de 40 anos de experiência. Betel Arquitetura.",
  openGraph: {
    title: "Legalização de Imóveis em Niterói, São Gonçalo e Maricá | Roberto Moura",
    description:
      "Seu imóvel em ordem. O próximo passo, com segurança. Orientação técnica para regularização com Roberto Moura, arquiteto e urbanista.",
    type: "website",
    url: "https://www.betelarquitetura.com.br/legalizacao",
  },
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/servicos/legalizacao-de-imoveis/",
  },
};

export default function LegalizacaoLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.betelarquitetura.com.br/#roberto-moura",
        "name": "Roberto Moura",
        "jobTitle": "Arquiteto e Urbanista",
        "hasCredential": "CAU/BR A14965-9",
        "description": "Arquiteto e urbanista com mais de 40 anos de experiência em projetos, consultoria técnica e legalização de imóveis.",
        "worksFor": {
          "@type": "Organization",
          "name": "Betel Arquitetura",
          "url": "https://www.betelarquitetura.com.br"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.betelarquitetura.com.br/#organization",
        "name": "Roberto Moura - Betel Arquitetura",
        "url": "https://www.betelarquitetura.com.br",
        "telephone": "+5521997332031",
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
        ],
        "priceRange": "$$"
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
        {/* 2. Hero Principal */}
        <LpHero />

        {/* 3. Faixa de Credibilidade */}
        <LpTrustBand />

        {/* 4. Situações que Roberto Atende */}
        <LpSituations />

        {/* 5. Escopo Técnico: O que é analisado no seu imóvel */}
        <LpMainService />

        {/* 6. Como Funciona o Atendimento (Jornada do Cliente) */}
        <LpProcessTimeline />

        {/* 7. Apresentação Editorial de Roberto Moura */}
        <LpAuthority />

        {/* 8. Serviços Complementares */}
        <LpComplementaryServices />

        {/* 9. Tipos de Análise Técnica */}
        <LpCasesAndExperience />

        {/* 10. Perguntas Frequentes (FAQ Revisada) */}
        <LpFaq />

        {/* 11. CTA Final e Formulário com Persistência Firestore */}
        <LpContactForm />
      </main>

      {/* 12. Rodapé Sóbrio */}
      <LpFooter />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
