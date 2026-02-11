"use client";

// import FormInput from "@/components/FormInput/FormInput";

export default function FormSection({
  isExpanded = true,
  title,
  className,
  children,
}: {
  isExpanded?: boolean;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={className} data-expanded={isExpanded}>
      <main>
        <h2>{title}</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 max-[700px]:grid-cols-1">
          {/* <FormInput title="First Name" placeholder="John" />
          <FormInput title="Last Name" placeholder="Doe" />
          <FormInput
            title="Email"
            type="email"
            placeholder="john.doe@gmail.com"
          />
          <FormInput title="Phone" type="tel" placeholder="(555) 555-5555" />
          <FormInput title="Address" placeholder="123 Main St" />
          <FormInput title="City" placeholder="Anytown" />
          <FormInput title="State" placeholder="CA" />
          <FormInput title="Zip" placeholder="12345" /> */}
          {children}
        </div>
      </main>
    </section>
  );
}
