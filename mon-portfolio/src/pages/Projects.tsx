import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion-variants";

export default function Projects() {
  return (
    <section className="py-12 grid gap-8">
      <Helmet>
        <title>Projets — Ayman Sakyoud</title>
        <meta
          name="description"
          content="Découvrez mes projets : gestion de personnel, coopérative agricole, stock, visites médicales et portfolio React."
        />
        <meta property="og:title" content="Projets — Ayman Sakyoud" />
        <meta
          property="og:description"
          content="Projets académiques et personnels en PHP, Java, Spring Boot et React."
        />
      </Helmet>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold text-foreground">Mes Projets</h2>
          <p className="mt-1 text-muted-foreground">
            Quelques projets académiques et personnels réalisés ces dernières
            années.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={fadeUp}
            className="bg-card border border-border/60 rounded-2xl p-5 flex flex-col gap-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
          >
            {p.period && (
              <span className="inline-flex w-fit text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">
                {p.period}
              </span>
            )}

            <h3 className="font-bold text-foreground text-base leading-snug">
              {p.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {p.summary}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 text-xs rounded-full bg-muted text-muted-foreground border border-border/50"
                >
                  {t}
                </span>
              ))}
            </div>

            {(p.repo || p.link) && (
              <div className="flex gap-2 pt-2 border-t border-border/40">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Code
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    Demo
                  </a>
                )}
              </div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
