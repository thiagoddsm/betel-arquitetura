"use client";

import { useState } from "react";

export default function LpContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cidade: "Niterói",
    tipoImovel: "Residencial",
    objetivo: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDirect = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "final",
        page: "legalizacao",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "generate_lead", {
        position: "form_final",
        page: "legalizacao",
      });
    }

    const message = `*Contato pelo Site - Roberto Moura*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Cidade:* ${formData.cidade}\n` +
      `*Tipo de Imóvel:* ${formData.tipoImovel}\n` +
      `*Descrição:* ${formData.objetivo}`;

    const whatsappUrl = `https://wa.me/5521997332031?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const whatsappDirectMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de enviar as informações iniciais do meu imóvel para triagem."
  );

  return (
    <section id="contato" className="py-16 md:py-20 bg-[#121A1F] text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Informações e Botão Direto do WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[#8FD5E8] font-bold text-xs uppercase tracking-widest bg-[#1A333E] px-3 py-1 rounded">
              Próximo Passo
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Explique a situação do seu imóvel
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Envie uma mensagem com a cidade, o tipo de imóvel e uma breve descrição do que precisa resolver. A equipe reúne as informações iniciais e orienta o próximo passo para análise.
            </p>

            {/* Botão de Destaque WhatsApp */}
            <div className="pt-2">
              <a
                href={`https://wa.me/5521997332031?text=${whatsappDirectMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppDirect}
                className="w-full inline-flex justify-center items-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#0D2214] font-bold text-sm uppercase tracking-wider rounded shadow-lg transition-all"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.008-.471-1.682-.699-2.756-2.433-2.841-2.546-.084-.112-.676-.901-.676-1.718 0-.818.428-1.22.58-1.383.153-.163.334-.204.446-.204.112 0 .224.001.322.006.103.005.242-.039.378.289.144.35.492 1.203.535 1.291.043.088.072.192.014.307-.058.115-.088.187-.174.288-.088.102-.185.228-.264.306-.089.088-.182.184-.078.362.104.178.464.766.996 1.24 1.157 1.031 2.133 1.35 2.435 1.5.302.15.48.127.659-.08.179-.207.766-.893.97-1.198.204-.305.408-.255.688-.152.28.102 1.776.837 2.081.989.306.152.51.228.585.355.076.128.076.741-.068 1.146z" />
                </svg>
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#22313A] space-y-2 text-xs text-gray-400">
              <p>• <strong>Área atendida:</strong> Niterói, São Gonçalo, Maricá e região.</p>
              <p>• <strong>Aviso:</strong> Cada caso depende de avaliação técnica individual.</p>
            </div>
          </div>

          {/* Formulário Alternativo */}
          <div className="lg:col-span-7 bg-[#18232A] border border-[#2B3B44] p-6 sm:p-8 rounded-2xl">
            <h3 className="text-base font-bold text-white mb-1">
              Prefere enviar uma mensagem inicial?
            </h3>
            <p className="text-xs text-gray-400 mb-5">
              Preencha os campos abaixo para adiantar a triagem técnica.
            </p>

            {submitted && (
              <div className="mb-4 p-3 rounded bg-green-900/40 border border-green-700 text-green-200 text-xs">
                ✓ Informações organizadas! Redirecionando para o WhatsApp...
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome completo"
                  className="w-full bg-[#10171B] border border-[#2B3B44] rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#8FD5E8]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(21) 99999-9999"
                    className="w-full bg-[#10171B] border border-[#2B3B44] rounded-lg px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#8FD5E8]"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Município
                  </label>
                  <select
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    className="w-full bg-[#10171B] border border-[#2B3B44] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#8FD5E8]"
                  >
                    <option value="Niterói">Niterói</option>
                    <option value="São Gonçalo">São Gonçalo</option>
                    <option value="Maricá">Maricá</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Outro município">Outro município</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Tipo de Imóvel
                </label>
                <select
                  name="tipoImovel"
                  value={formData.tipoImovel}
                  onChange={handleChange}
                  className="w-full bg-[#10171B] border border-[#2B3B44] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#8FD5E8]"
                >
                  <option value="Residencial (Casa ou Apartamento)">Residencial (Casa ou Apartamento)</option>
                  <option value="Comercial (Loja, Clínica, Escritório)">Comercial (Loja, Clínica, Escritório)</option>
                  <option value="Terreno / Lote">Terreno / Lote</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Breve descrição da necessidade (opcional)
                </label>
                <textarea
                  name="objetivo"
                  rows={2}
                  value={formData.objetivo}
                  onChange={handleChange}
                  placeholder="Ex: Preciso averbar um acréscimo de área no RGI..."
                  className="w-full bg-[#10171B] border border-[#2B3B44] rounded-lg px-3.5 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#8FD5E8] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0F3B46] hover:bg-[#164E5D] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                Enviar informações para triagem &rarr;
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
