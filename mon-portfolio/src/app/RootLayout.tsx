import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <motion.header
        className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <NavLink to="/" className="font-bold text-lg">
            Portefeuille <span className="text-primary">Ayman</span>
          </NavLink>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {[
              { to: "/projects", label: "Projets" },
              { to: "/experience", label: "Expérience" },
              { to: "/education", label: "Formations" },
              { to: "/certifications", label: "Certifications" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "hover:text-foreground transition-colors"
                  }
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </div>
        </nav>
      </motion.header>

      <main className="mx-auto max-w-6xl px-6">
        <Outlet />
      </main>

      <footer className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ayman Sakyoud
      </footer>

      <ScrollToTop />
    </div>
  );
}
