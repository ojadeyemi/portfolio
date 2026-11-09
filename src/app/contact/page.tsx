import { DATA } from "@/data/resume";

export default function ContactPage() {
  return (
    <main className="flex flex-col space-y-6 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The best way to reach me is by email.
        </p>
      </div>

      <ul className="flex flex-col gap-y-3">
        {DATA.contact.social.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              className="inline-flex items-center gap-x-3 text-sm hover:underline"
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <social.icon className="size-4" />
              <span className="font-semibold">{social.name}</span>
              <span className="text-muted-foreground">{social.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
