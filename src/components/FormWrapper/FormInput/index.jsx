'use client';

export const Input = ({
  as,
  id,
  type,
  value,
  label,
  placeholder = "",
  callback,
}) => {
  const baseClasses = "w-full p-2 bg-white";

   const applyPhoneMask = (input = "") => {
      if (!input) return ""; // 👈 impede "(" inicial

      if (input.length > 10) {
         return input.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      }

      if (input.length > 6) {
         return input.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
      }

      if (input.length > 2) {
         return input.replace(/^(\d{2})(\d{0,5})$/, "($1) $2");
      }

      return input;
   };


  return (
    <div className="w-full">
      <label htmlFor={id} className="uppercase font-bold">
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => callback(e.target.value)}
          className={baseClasses}
          rows={4}
          required
        />
      ) : (
        <input
          id={id}
          type={type}
          value={type === "tel" ? applyPhoneMask(value) : value}
          placeholder={placeholder}
          inputMode={type === "tel" ? "numeric" : undefined}
          maxLength={type === "tel" ? 15 : undefined}
          onChange={(e) => {
            if (type === "tel") {
              callback(e.target.value.replace(/\D/g, "").slice(0, 11));
            } else {
              callback(e.target.value);
            }
          }}
          className={baseClasses}
          required
        />
      )}
    </div>
  );
};
