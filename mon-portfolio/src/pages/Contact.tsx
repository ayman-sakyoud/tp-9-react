import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="py-12 grid gap-8 max-w-2xl">
      <Helmet>
        <title>Contact — Ayman Sakyoud</title>
        <meta
          name="description"
          content="Contactez Ayman Sakyoud — développeur Full Stack basé à Marrakech, Maroc."
        />
        <meta property="og:title" content="Contact — Ayman Sakyoud" />
        <meta
          property="og:description"
          content="Envoyez-moi un message ou retrouvez-moi sur GitHub et LinkedIn."
        />
      </Helmet>
      <div>
        <h2 className="text-3xl font-bold text-foreground">Contact</h2>
        <p className="mt-1 text-muted-foreground">
          N'hésitez pas à me contacter
        </p>
      </div>

      {/* Infos de contact */}
      <div className="grid gap-3">
        {[
          {
            label: "Email",
            value: profile.email,
            href: `mailto:${profile.email}`,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            ),
          },
          {
            label: "Localisation",
            value: profile.location,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ),
          },
          ...profile.socials.map((s) => ({
            label: s.label,
            value: s.href.replace("https://", ""),
            href: s.href,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            ),
          })),
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 bg-card border border-border/60 rounded-xl px-5 py-4 hover:border-primary/30 transition-colors"
          >
            <span className="text-primary flex-shrink-0">{item.icon}</span>
            <div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-foreground">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Formulaire */}
      <form
        className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3 className="font-semibold text-foreground">Envoyer un message</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-muted-foreground">Nom</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="bg-muted border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-muted-foreground">Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="bg-muted border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-muted-foreground">Message</label>
          <textarea
            rows={5}
            placeholder="Votre message..."
            className="bg-muted border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="self-start px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          Envoyer →
        </button>
      </form>
    </section>
  );
}
