"use client";

export default function FloatingWhatsApp() {
  const whatsappNumber = "5521997332031";
  const defaultMsg = encodeURIComponent(
    "Olá. Vim pelo site do Roberto Moura e gostaria de explicar a situação do meu imóvel. Ele fica em [cidade/bairro] e preciso de ajuda com [breve descrição]."
  );

  const handleFloatingClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_whatsapp", {
        position: "floating",
        page: "legalizacao",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip / Badge */}
      <div className="hidden md:flex items-center mr-3 px-3.5 py-1.5 bg-[#121A1F] text-white text-xs font-semibold rounded-full shadow-xl border border-[#2B3B44] opacity-90 group-hover:opacity-100 transition-opacity">
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-ping" />
        Falar com o Arquiteto Roberto Moura
      </div>

      {/* Botão Ícone WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleFloatingClick}
        aria-label="Falar pelo WhatsApp com Roberto Moura"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-[#0D2214] flex items-center justify-center rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.008-.471-1.682-.699-2.756-2.433-2.841-2.546-.084-.112-.676-.901-.676-1.718 0-.818.428-1.22.58-1.383.153-.163.334-.204.446-.204.112 0 .224.001.322.006.103.005.242-.039.378.289.144.35.492 1.203.535 1.291.043.088.072.192.014.307-.058.115-.088.187-.174.288-.088.102-.185.228-.264.306-.089.088-.182.184-.078.362.104.178.464.766.996 1.24 1.157 1.031 2.133 1.35 2.435 1.5.302.15.48.127.659-.08.179-.207.766-.893.97-1.198.204-.305.408-.255.688-.152.28.102 1.776.837 2.081.989.306.152.51.228.585.355.076.128.076.741-.068 1.146z" />
        </svg>
      </a>
    </div>
  );
}
