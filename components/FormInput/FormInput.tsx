import { toCamelCase } from "@/utils/utils";

export default function FormInput({
  title,
  type = "text",
  placeholder = "",
  required = true,
  pattern = "",
}: {
  title: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
}) {
  return (
    <div className="relative flex flex-col">
      <label
        className="absolute top-[-0.75rem] left-3 z-3 w-max bg-[var(--clr-neutral-000)] p-1 text-[var(--fs-small)]"
        htmlFor={toCamelCase(title)}
      >
        {title}
      </label>
      <input
        className="h-14 rounded-2xl border border-[var(--clr-neutral-300)] p-2 pl-4 text-[var(--fs-normal)]"
        type={type}
        name={toCamelCase(title)}
        id={toCamelCase(title)}
        {...(placeholder && { placeholder })}
        {...(required && { required })}
        {...(pattern && { pattern })}
      />
    </div>
  );
}
