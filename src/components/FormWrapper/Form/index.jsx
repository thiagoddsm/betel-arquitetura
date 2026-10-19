'use client';

import { useState } from "react";
import { Input } from "@/components/FormWrapper/FormInput";

export const Form = ({ formId, siteUrl, unitTag, color = "bg-primary" }) => {
   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [tel, setTel] = useState("");
   const [assunto, setAssunto] = useState("");
   const [mensagem, setMensagem] = useState("");
   const [enviado, setEnviado] = useState(false);
   const [erro, setErro] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("your-name", nome);
      formData.append("your-email", email);
      formData.append("your-tel", tel);
      formData.append("your-subject", assunto);
      formData.append("your-message", mensagem);

      // 🔴 OBRIGATÓRIOS DO CF7
      formData.append("_wpcf7_unit_tag", unitTag);
      formData.append("_wpcf7_locale", "pt_BR");
      // formData.append("_wpcf7_container_post", formId);

      try {
         const response = await fetch(
            `${siteUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
            {
               method: "POST",
               body: formData,
            }
         );

         const data = await response.json();

         if (data.status === "mail_sent") {
            setEnviado(true);
            setErro(null);

            setNome("");
            setEmail("");
            setTel("");
            setAssunto("");
            setMensagem("");
         } else {
            setErro(data.message || "Erro ao enviar o formulário.");
         }
      } catch (error) {
         setErro("Erro na conexão. Tente novamente.");
      }
   };


   return (
      <div className="w-full mx-auto pe-5">
         {enviado && (
            <div className="bg-green-100 border border-green-400 text-green-700 p-3 mb-4 rounded">
               Mensagem enviada com sucesso!
            </div>
         )}

         {erro && (
            <div className="bg-red-100 border border-red-400 text-red-700 p-3 mb-4 rounded">
               {erro}
            </div>
         )}

         <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="flex flex-col lg:flex-row gap-4">
               <Input id="nome" type="text" label="Nome" value={nome} callback={setNome} />
               <Input id="email" type="email" label="E-mail" value={email} callback={setEmail} />
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
               <Input id="tel" type="tel" label="Celular" value={tel} callback={setTel} />
               <Input id="assunto" type="text" label="Assunto" value={assunto} callback={setAssunto} />
            </div>

            <Input
               as="textarea"
               id="mensagem"
               label="Mensagem"
               value={mensagem}
               callback={setMensagem}
            />

            <div className="md:text-end pb-8 md:pb-0">
               <button
                  type="submit"
                  className={`${color} text-white cursor-pointer uppercase font-bold py-2 px-16 hover:bg-primary/70 w-full md:w-auto`}
               >
                  Enviar
               </button>
            </div>
         </form>
      </div>
   );
};

export default Form;