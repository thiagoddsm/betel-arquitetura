"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function LpContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cidade: "Niterói",
    tipoImovel: "Residencial (Casa ou Apartamento)",
    objetivo: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleWhatsAppDirect = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "final",
        page: "legalizacao",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      // Salva no Firestore se disponível
      try {
        await addDoc(collection(db, "leads"), {
          nome: formData.nome,
          whatsapp: formData.whatsapp,
          cidade: formData.cidade,
          tipoImovel: formData.tipoImovel,
          descricao: formData.objetivo,
          origem: "landing_page_legalizacao",
          createdAt: serverTimestamp(),
        });
      } catch (err) {
        console.warn("Firestore lead save skipped/cached:", err);
      }

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          position: "form_final",
          page: "legalizacao",
        });
      }

      setSubmitted(true);

      const message = `*Solicitação de Análise Inicial — Roberto Moura*\n\n` +
        `*Nome:* ${formData.nome}\n` +
        `*WhatsApp:* ${formData.whatsapp}\n` +
        `*Município:* ${formData.cidade}\n` +
        `*Tipo de Imóvel:* ${formData.tipoImovel}\n` +
        `*Situação:* ${formData.objetivo || "Não informada"}`;

      const whatsappUrl = `https://wa.me/5521997332031?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setErrorMessage("Ocorreu um erro ao processar seu pedido. Por favor, tente pelo WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappDirectMsg = encodeURIComponent(
    "Olá, Roberto. Gostaria de enviar as informações iniciais do meu imóvel para triagem e análise técnica."
  );

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#203B32] text-[#F8F7F3] border-t border-[#344F43]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Informações Editoriais e WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#AD9166] block">
              Contato Inicial & Triagem
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
              Vamos entender o que seu imóvel precisa?
            </h2>
            <p className="text-[#E8DFD0]/90 text-sm sm:text-base leading-relaxed font-light">
              Compartilhe as informações iniciais para que possamos compreender sua necessidade e orientar os próximos passos.
            </p>

            {/* Acesso Alternativo ao WhatsApp */}
            <div className="pt-4">
              <a
                href={`https://wa.me/5521997332031?text=${whatsappDirectMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppDirect}
                className="w-full inline-flex justify-center items-center gap-3 px-6 py-4 bg-[#344F43] hover:bg-[#3D5C4F] text-[#F8F7F3] font-medium text-xs uppercase tracking-widest rounded-[2px] border border-[#AD9166]/30 transition-all shadow-sm"
              >
                <svg className="w-4 h-4 fill-[#AD9166] shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.008-.471-1.682-.699-2.756-2.433-2.841-2.546-.084-.112-.676-.901-.676-1.718 0-.818.428-1.22.58-1.383.153-.163.334-.204.446-.204.112 0 .224.001.322.006.103.005.242-.039.378.289.144.35.492 1.203.535 1.291.043.088.072.192.014.307-.058.115-.088.187-.174.288-.088.102-.185.228-.264.306-.089.088-.182.184-.078.362.104.178.464.766.996 1.24 1.157 1.031 2.133 1.35 2.435 1.5.302.15.48.127.659-.08.179-.207.766-.893.97-1.198.204-.305.408-.255.688-.152.28.102 1.776.837 2.081.989.306.152.51.228.585.355.076.128.076.741-.068 1.146z" />
                </svg>
                <span>Falar diretamente no WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#344F43] space-y-1.5 text-xs text-[#E8DFD0]/70 font-light">
              <p>• Atendimento: Niterói, São Gonçalo, Maricá e Grande Rio.</p>
              <p>• Tratamento de dados estritamente restrito para finalidade de contato técnico.</p>
            </div>
          </div>

          {/* Formulário Editorial e Seguro */}
          <div className="lg:col-span-7 bg-[#1A312A] border border-[#344F43] p-7 sm:p-10 rounded-[3px] shadow-2xl">
            <h3 className="font-serif text-xl font-normal text-white mb-2">
              Formulário de Análise Prévia
            </h3>
            <p className="text-xs text-[#E8DFD0]/80 mb-6 font-light">
              Preencha os campos abaixo para iniciar a avaliação do seu imóvel.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-[2px] bg-[#344F43] border border-[#AD9166] text-[#F8F7F3] text-xs leading-relaxed">
                ✓ Informações organizadas com sucesso! Redirecionando para o canal de atendimento...
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 rounded-[2px] bg-red-950/60 border border-red-700 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#E8DFD0] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full bg-[#12221D] border border-[#344F43] rounded-[2px] px-4 py-3 text-white placeholder-[#73766F] focus:outline-none focus:border-[#AD9166] transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E8DFD0] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="(21) 99999-9999"
                    className="w-full bg-[#12221D] border border-[#344F43] rounded-[2px] px-4 py-3 text-white placeholder-[#73766F] focus:outline-none focus:border-[#AD9166] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#E8DFD0] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                    Município do Imóvel *
                  </label>
                  <select
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    className="w-full bg-[#12221D] border border-[#344F43] rounded-[2px] px-4 py-3 text-white focus:outline-none focus:border-[#AD9166] transition-colors"
                  >
                    <option value="Niterói">Niterói</option>
                    <option value="São Gonçalo">São Gonçalo</option>
                    <option value="Maricá">Maricá</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Outro município do RJ">Outro município do RJ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#E8DFD0] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                  Tipo de Imóvel
                </label>
                <select
                  name="tipoImovel"
                  value={formData.tipoImovel}
                  onChange={handleChange}
                  className="w-full bg-[#12221D] border border-[#344F43] rounded-[2px] px-4 py-3 text-white focus:outline-none focus:border-[#AD9166] transition-colors"
                >
                  <option value="Residencial (Casa ou Apartamento)">Residencial (Casa ou Apartamento)</option>
                  <option value="Comercial (Loja, Clínica, Escritório)">Comercial (Loja, Clínica, Escritório)</option>
                  <option value="Terreno / Lote">Terreno / Lote</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-[#E8DFD0] uppercase tracking-wider text-[10px] font-medium mb-1.5">
                  Descrição da Situação (opcional)
                </label>
                <textarea
                  name="objetivo"
                  rows={3}
                  value={formData.objetivo}
                  onChange={handleChange}
                  placeholder="Conte brevemente sobre o imóvel ou a pendência documental existente..."
                  className="w-full bg-[#12221D] border border-[#344F43] rounded-[2px] px-4 py-3 text-white placeholder-[#73766F] focus:outline-none focus:border-[#AD9166] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-[#AD9166] hover:bg-[#c2a373] text-[#203B32] font-semibold text-xs uppercase tracking-widest rounded-[2px] transition-all disabled:opacity-50 shadow-sm"
              >
                {isLoading ? "Processando..." : "Solicitar análise inicial →"}
              </button>

              <p className="text-[10px] text-[#E8DFD0]/60 text-center pt-2 leading-relaxed">
                Ao enviar, você concorda com o tratamento de dados para fins exclusivos de atendimento técnico.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
