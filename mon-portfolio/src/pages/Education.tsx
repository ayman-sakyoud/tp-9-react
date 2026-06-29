import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion-variants";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="py-12 grid gap-8">
      <Helmet>
        <title>Formations — Ayman Sakyoud</title>
        <meta
          name="description"
          content="Mon parcours académique : Licence Informatique (FST Marrakech), DTS Informatique, Baccalauréat Sciences Physiques."
        />
        <meta property="og:title" content="Formations — Ayman Sakyoud" />
        <meta
          property="og:description"
          content="Parcours académique en informatique à Marrakech, Maroc."
        />
      </Helmet>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">
          Portefeuille
        </p>
        <h2 className="text-4xl font-extrabold text-foreground">Formations</h2>
        <p className="mt-2 text-muted-foreground">
          Mon parcours académique et les compétences acquises.
        </p>
      </motion.div>

      <motion.ol
        className="relative border-s-2 border-primary/30 flex flex-col gap-6"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {education.map((e) => (
          <motion.li
            key={e.school + e.start}
            variants={fadeUp}
            className="ms-6"
          >
            <span className="absolute -start-[9px] mt-5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />

            <article className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-bold text-primary leading-snug">
                  {e.degree}
                  {e.field ? (
                    <>
                      {" "}
                      — <span className="text-foreground">{e.field}</span>
                    </>
                  ) : null}
                </h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {fmt(e.start)} — {fmt(e.end)}
                </span>
              </div>

              <p className="text-sm text-muted-foreground -mt-2">
                <span className="text-foreground/80 font-medium">
                  {e.school}
                </span>
                {e.location ? ` • ${e.location}` : ""}
                {e.gpa ? ` • GPA ${e.gpa}` : ""}
              </p>

              {e.courses?.length ? (
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-foreground">
                    Cours principal :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {e.courses.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border/50"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {e.highlights?.length ? (
                <ul className="flex flex-col gap-1.5">
                  {e.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5 flex-shrink-0">
                        •
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
