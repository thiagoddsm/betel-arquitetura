import './style.css';
import FormWrapper from "@/components/FormWrapper";

export const ContactSection = ({ id, formTitle, formSubtitle }) => {
  return (
    <div className="relative" id={id}>
      <div className="absolute top-0 size-full -z-1">
        <div className="grid grid-cols-[40%_1fr] h-full items-end">
          <div className="h-[200px] bg-[url('/bg-2.png')] bg-center bg-cover relative bottom-[55%] md:bottom-0">
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8 md:p-0">
        <div className="grid md:grid-cols-[40%_1fr]">
          <div className="flex flex-col justify-between bg-white md:row-span-2">
            <div className="p-4 lg:p-12">
              <h4 className="leading-[1.2] text-2xl md:text-3xl">
                Quer saber mais sobre a <br />
                <span className="font-bold">Betel Arquitetura?</span>
              </h4>

              <div className="flex flex-col gap-4 mt-6">
                <div className="py-2 font-bold">
                  <p className="text-sm">(21) 99733-2031</p>
                  <p className="text-sm">
                    robertomoura@betelarquitetura.com.br
                  </p>
                </div>

                <div>
                  <p className="font-bold">ESCRITÓRIO NITERÓI - RJ</p>
                  <p>
                    Rink Plaza Offices - Sala 307. Rua Quinze de Novembro, 106
                  </p>
                </div>

                <div>
                  <p className="font-bold">ESCRITÓRIO SÃO GONÇALO - RJ</p>
                  <p>
                    Rua Profa. Adélia Martins, 150b - Mutondo 24452-165
                  </p>
                </div>
              </div>
            </div>

            <img
              className="h-full object-cover"
              src="/banner-bg.jpg"
              alt="Betel Arquitetura"
            />
          </div>

          <div className="p-5 pe-0 lg:p-16 bg-[#DEDEDE]">
            <FormWrapper
              formTitle={formTitle}
              formSubtitle={formSubtitle}
            />
          </div>

          <div className="h-[200px] md:col-start-2 bg-[url('/bg-1.png')] bg-center bg-cover relative">
            <div className="absolute inset-0 bg-neutral-950/80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;