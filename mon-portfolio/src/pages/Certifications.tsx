import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/components/motion-variants";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q],
  );

  return (
    <section className="py-12 grid gap-8">
      <Helmet>
        <title>Certifications — Ayman Sakyoud</title>
        <meta
          name="description"
          content="Mes certifications professionnelles : Java, JavaScript, JakartaEE & Spring, One Million Prompters."
        />
        <meta property="og:title" content="Certifications — Ayman Sakyoud" />
        <meta
          property="og:description"
          content="5 certifications MLIAEdu en Java, JavaScript, Spring et Prompt Engineering."
        />
      </Helmet>

      <motion.div
        className="flex items-center justify-between gap-4 flex-wrap"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
          <p className="mt-1 text-muted-foreground">
            {certifications.length} certifications obtenues
          </p>
        </div>
        <input
          placeholder="Filtrer (ex: Java, Spring…)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="bg-muted border border-border rounded-xl px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors w-64"
          aria-label="Filtrer les certifications"
        />
      </motion.div>

      {list.length === 0 ? (
        <p className="text-center text-muted-foreground py-16">
          Aucune certification trouvée pour « {q} ».
        </p>
      ) : (
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {list.map((c) => (
            <motion.div key={c.title + c.issueDate} variants={fadeUp}>
              <CertificationCard c={c} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
