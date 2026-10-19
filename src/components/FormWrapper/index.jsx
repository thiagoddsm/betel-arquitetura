'use client';

import SectionTitle from "@/components/SectionTitle";
import Form from "@/components/FormWrapper/Form";

export const FormWrapper = ({
  formTitle = "fale conosco",
  formSubtitle = "Atendemos o Brasil todo, de forma presencial ou on-line!",
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_WP_API_URL
  const formId = process.env.NEXT_PUBLIC_CONTACT_FORM_ID;
  const unitTag = process.env.NEXT_PUBLIC_CONTACT_FORM_UNIT_TAG;
  
  return (
    <div className="size-full">
      <SectionTitle
        title={formTitle}
        subtitle={formSubtitle}
        align="start"
        width="100%"
        dividerWidth="w-full md:w-[70px]"
      />

      <Form siteUrl={siteUrl} formId={formId} unitTag={unitTag} />
    </div>
  );
};

export default FormWrapper;
