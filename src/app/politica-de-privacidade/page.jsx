import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade | Betel Arquitetura",
  description:
    "Saiba como a Betel Arquitetura coleta, utiliza e protege suas informações pessoais no atendimento de serviços arquitetônicos e regularização imobiliária.",
  alternates: {
    canonical: "https://www.betelarquitetura.com.br/politica-de-privacidade/",
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#292D2A] flex flex-col font-sans selection:bg-[#203B32] selection:text-[#F8F7F3]">
      {/* Header simples */}
      <header className="border-b border-[#203B32]/10 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link
            href="/legalizacao-de-imoveis"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#344F43] hover:text-[#203B32] font-medium transition-colors"
          >
            <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Voltar para a página inicial
          </Link>
          <div className="text-right">
            <span className="font-serif text-lg font-bold text-[#203B32] tracking-tight block">
              Betel Arquitetura
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#73766F] block">
              Privacidade & Dados
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 py-12 md:py-20">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Tag & Título */}
          <div className="mb-10 pb-8 border-b border-[#203B32]/10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#203B32]/5 text-[#203B32] text-xs font-semibold uppercase tracking-wider mb-4">
              <svg className="w-3.5 h-3.5 stroke-[#AD9166] fill-none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Conformidade LGPD
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-[#203B32] tracking-tight mb-4">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-sm text-[#73766F]">
              Última atualização: Outubro de 2026 • Betel Arquitetura & Urbanismo
            </p>
          </div>

          <div className="space-y-8 text-base leading-relaxed text-[#292D2A]">
            <section>
              <h2 className="font-serif text-xl font-bold text-[#203B32] mb-3">
                1. Compromisso com a sua privacidade
              </h2>
              <p>
                A <strong>Betel Arquitetura</strong> (inscrita sob a responsabilidade técnica do Arquiteto e Urbanista Roberto Moura, CAU/BR A14965-9) tem o compromisso de tratar suas informações pessoais com transparência, segurança e rigor ético, em total conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018 — LGPD).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#203B32] mb-3">
                2. Informações que coletamos
              </h2>
              <p className="mb-3">
                Coletamos apenas os dados estritamente necessários para viabilizar o primeiro atendimento, a avaliação técnica preliminar de regularização de imóveis ou projetos arquitetônicos, especificamente:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#344F43]">
                <li><strong>Identificação básica:</strong> Nome completo;</li>
                <li><strong>Canais de contato:</strong> Telefone celular / WhatsApp e endereço de e-mail;</li>
                <li><strong>Localização e dados do imóvel:</strong> Município (ex.: Niterói, São Gonçalo, Maricá, Rio de Janeiro), tipo de imóvel e descrição resumida da situação trazida pelo próprio usuário;</li>
                <li><strong>Dados técnicos de navegação:</strong> Métricas agregadas de acesso anônimo (via Google Analytics / Meta Pixel) para aperfeiçoar a experiência de navegação em nosso site.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#203B32] mb-3">
                3. Finalidade do uso dos dados
              </h2>
              <p className="mb-2">
                Os dados fornecidos no formulário de contato são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#344F43]">
                <li>Realizar contato direto para esclarecer dúvidas técnicas e propor o atendimento adequado ao caso imobiliário;</li>
                <li>Avaliar a viabilidade inicial da consulta de acordo com as normas urbanísticas municipais pertinentes;</li>
                <li>Registrar o histórico de relacionamento comercial inicial entre o solicitante e o escritório.</li>
              </ul>
              <p className="mt-3">
                <strong>Em nenhuma hipótese</strong> vendemos, comercializamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing ou prospecção não autorizada.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#203B32] mb-3">
                4. Armazenamento e segurança
              </h2>
              <p>
                Os dados informados são armazenados em ambiente de nuvem seguro (Google Cloud / Firebase), com controles de acesso restrito e conexões criptografadas (HTTPS/TLS). Adotamos medidas técnicas adequadas para salvaguardar suas informações contra perda, uso indevido, acesso não autorizado ou divulgação.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#203B32] mb-3">
                5. Seus direitos (Artigo 18 da LGPD)
              </h2>
              <p className="mb-3">
                Como titular dos dados, você pode a qualquer momento solicitar:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm md:text-base text-[#344F43]">
                <li>Confirmação da existência de tratamento e acesso aos dados armazenados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Eliminação dos dados pessoais tratados com o seu consentimento;</li>
                <li>Revogação do consentimento concedido anteriormente.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-[#203B32] mb-3">
                6. Canal de contato do responsável
              </h2>
              <p className="mb-4">
                Para exercer seus direitos de titular ou esclarecer qualquer dúvida referente ao tratamento dos seus dados pessoais, entre em contato direto conosco:
              </p>
              <div className="bg-white p-6 rounded-2xl border border-[#203B32]/10 space-y-3 text-sm">
                <div className="flex items-center gap-3 text-[#203B32]">
                  <span className="font-semibold text-[#AD9166]">Responsável Técnico:</span>
                  <span>Roberto Moura (CAU/BR A14965-9)</span>
                </div>
                <div className="flex items-center gap-3 text-[#203B32]">
                  <span className="font-semibold text-[#AD9166]">Atendimento Técnico / Legalização:</span>
                  <span>(21) 99733-9287</span>
                </div>
                <div className="flex items-center gap-3 text-[#203B32]">
                  <span className="font-semibold text-[#AD9166]">E-mail:</span>
                  <span>contato@betelarquitetura.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-[#203B32]">
                  <span className="font-semibold text-[#AD9166]">Atuação:</span>
                  <span>Niterói, São Gonçalo, Maricá e Rio de Janeiro — RJ</span>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* Footer simples */}
      <footer className="border-t border-[#203B32]/10 bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73766F]">
          <p>© {new Date().getFullYear()} Betel Arquitetura. Todos os direitos reservados.</p>
          <Link
            href="/legalizacao-de-imoveis"
            className="hover:text-[#203B32] underline transition-colors"
          >
            Página de Legalização de Imóveis
          </Link>
        </div>
      </footer>
    </div>
  );
}
