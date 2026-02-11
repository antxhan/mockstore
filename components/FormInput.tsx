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
        className="absolute top-[-0.75rem] left-3 z-3 w-max bg-neutral-000 p-1 text-small"
        htmlFor={toCamelCase(title)}
      >
        {title}
      </label>
      <input
        className="h-14 rounded-2xl border border-neutral-300 p-2 pl-4 text-normal"
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
