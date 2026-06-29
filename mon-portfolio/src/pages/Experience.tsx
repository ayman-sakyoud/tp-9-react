import { experiences } from "@/data/experience";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion-variants";

export default function Experience() {
  return (
    <section className="py-12 grid gap-8">
      <Helmet>
        <title>Expérience — Ayman Sakyoud</title>
        <meta
          name="description"
          content="Mes stages : Hôtel Royal Mansour Marrakech (maintenance informatique) et Evoltec (développement application RH)."
        />
        <meta property="og:title" content="Expérience — Ayman Sakyoud" />
        <meta
          property="og:description"
          content="Stages en maintenance informatique et développement logiciel à Marrakech."
        />
      </Helmet>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-foreground">Expériences</h2>
        <p className="mt-1 text-muted-foreground">
          Mes stages, expériences professionnelles et compétences pratiques.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-5"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {experiences.map((e) => (
          <motion.article
            key={e.company + e.start}
            variants={fadeUp}
            className="bg-card border border-border/60 rounded-2xl overflow-hidden flex flex-col hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
          >
            {e.image ? (
              <img
                src={e.image}
                alt={e.company}
                className="w-full h-44 object-cover"
              />
            ) : (
              <div className="w-full h-44 bg-muted flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-muted-foreground/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            )}

            <div className="p-5 flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">
                  {e.start}
                  {e.end && e.end !== e.start ? ` – ${e.end}` : ""}
                </span>
                <span className="text-xs text-muted-foreground">{e.type}</span>
              </div>

              <div>
                <h3 className="font-bold text-primary text-base leading-snug">
                  {e.title}
                </h3>
                <p className="text-sm font-medium text-foreground/80 mt-0.5">
                  {e.company}
                </p>
                <p className="text-xs text-muted-foreground">{e.location}</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {e.description}
              </p>

              <ul className="flex flex-col gap-1.5 flex-1">
                {e.tasks.map((t) => (
                  <li
                    key={t}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                {e.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-muted text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
