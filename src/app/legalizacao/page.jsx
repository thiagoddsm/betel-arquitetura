import LpHeader from "@/components/LandingPage/LpHeader";
import LpHero from "@/components/LandingPage/LpHero";
import LpSituations from "@/components/LandingPage/LpSituations";
import LpTrustBand from "@/components/LandingPage/LpTrustBand";
import LpMainService from "@/components/LandingPage/LpMainService";
import LpComplementaryServices from "@/components/LandingPage/LpComplementaryServices";
import LpProcessTimeline from "@/components/LandingPage/LpProcessTimeline";
import LpAuthority from "@/components/LandingPage/LpAuthority";
import LpCasesAndExperience from "@/components/LandingPage/LpCasesAndExperience";
import LpTestimonials from "@/components/LandingPage/LpTestimonials";
import LpFaq from "@/components/LandingPage/LpFaq";
import LpContactForm from "@/components/LandingPage/LpContactForm";
import LpFooter from "@/components/LandingPage/LpFooter";
import FloatingWhatsApp from "@/components/LandingPage/FloatingWhatsApp";

export const metadata = {
  title: "Legalização de Imóveis em Niterói, São Gonçalo e Maricá | Roberto Moura",
  description:
    "Precisa legalizar ou regularizar um imóvel? Fale com Roberto Moura, arquiteto com mais de 40 anos de experiência em Niterói, São Gonçalo e Maricá.",
  openGraph: {
    title: "Legalização de Imóveis em Niterói, São Gonçalo e Maricá | Roberto Moura",
    description:
      "Roberto Moura reúne mais de 40 anos de experiência para analisar a situação do seu imóvel, orientar o caminho técnico e conduzir as etapas do serviço com clareza.",
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
    <div className="min-h-screen bg-[#121A1F] text-[#1E242B] flex flex-col font-sans selection:bg-[#0F3B46] selection:text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Cabeçalho Enxuto */}
      <LpHeader />

      <main className="flex-1">
        {/* 2. Hero */}
        <LpHero />

        {/* 3. Situações Atendidas */}
        <LpSituations />

        {/* 4. Faixa de Confiança */}
        <LpTrustBand />

        {/* 5. Serviço Principal */}
        <LpMainService />

        {/* 6. Serviços Complementares */}
        <LpComplementaryServices />

        {/* 7. Como Funciona o Atendimento (5 etapas) */}
        <LpProcessTimeline />

        {/* 8. Sobre Roberto Moura */}
        <LpAuthority />

        {/* 9 & 10. Casos e Experiências Corporativas */}
        <LpCasesAndExperience />

        {/* 11. Depoimentos */}
        <LpTestimonials />

        {/* 12. FAQ e Objeções */}
        <LpFaq />

        {/* 13. CTA Final & Triagem */}
        <LpContactForm />
      </main>

      {/* 14. Rodapé Profissional */}
      <LpFooter />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
