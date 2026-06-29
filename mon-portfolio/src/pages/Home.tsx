import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, slideRight, stagger } from "@/components/motion-variants";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={profile.about} />
        <meta property="og:title" content={`${profile.name} — Portfolio`} />
        <meta property="og:description" content={profile.about} />
      </Helmet>

      <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-16 gap-16">
        {/* ── Hero ── */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gauche — stagger */}
          <motion.div
            className="flex flex-col gap-6"
            variants={stagger(0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/5 text-primary text-xs font-medium tracking-wide"
            >
              Étudiant · Développement Web · Marrakech
            </motion.span>

            <motion.div variants={fadeUp}>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
                Je suis <span className="text-primary">{profile.name}</span>
              </h1>
              <p className="mt-3 text-xl text-muted-foreground font-medium">
                {profile.role}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed max-w-lg"
            >
              {profile.about}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-5 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary"
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
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary"
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
                {profile.email}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-1">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                Voir mes projets
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border text-foreground text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all"
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>

          {/* Droite — slide depuis la droite */}
          <motion.div
            className="relative"
            variants={slideRight}
            initial="hidden"
            animate="show"
          >
            <div className="absolute -inset-1 rounded-2xl bg-primary/10 blur-xl" />
            <div className="relative bg-card border border-border/60 rounded-2xl p-6 flex flex-col gap-5">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                Profil
              </span>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {profile.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {profile.about}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-border/50">
                {[
                  { value: profile.stats.projects, label: "Projets" },
                  { value: profile.stats.certifs, label: "Certifs" },
                  { value: profile.stats.diplome, label: "Diplôme" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.35 }}
                  >
                    <p className="text-2xl font-extrabold text-primary">
                      {s.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Skills */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={stagger(0.04)}
                initial="hidden"
                animate="show"
              >
                {profile.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeUp}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border/50 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Cartes spécialités ── */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {profile.specialties.map((spec) => (
            <motion.div
              key={spec.title}
              variants={fadeUp}
              className="bg-card border border-border/60 rounded-xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <h3 className="font-semibold text-foreground">{spec.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
