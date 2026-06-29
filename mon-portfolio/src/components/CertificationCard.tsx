import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const today = new Date().toISOString().slice(0, 7);
  const isExpired =
    c.status === "expired" ||
    (c.expiryDate !== undefined && c.expiryDate < today);

  const viewUrl = c.certificateFile
    ? encodeURI(c.certificateFile)
    : c.credentialUrl;

  return (
    <article
      className={clsx(
        "bg-card border border-border/60 rounded-2xl p-5 flex flex-col gap-3 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all",
        isExpired && "opacity-70",
      )}
      aria-label={`Certification ${c.title}`}
    >
      {/* Header : logo + titre */}
      <div className="flex items-start gap-3">
        {c.image && (
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={40}
            height={40}
            loading="lazy"
            className="w-10 h-10 object-contain rounded-lg bg-muted p-1 border border-border/50 flex-shrink-0 mt-0.5"
          />
        )}
        <h3 className="font-semibold leading-snug text-sm text-foreground">
          {c.title}
        </h3>
      </div>

      {/* Émetteur + date */}
      <p className="text-xs text-muted-foreground">
        {c.issuer} • {mmYYYY(c.issueDate)}
        {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        {c.credentialId ? ` • ID ${c.credentialId}` : ""}
      </p>

      {/* Compétences */}
      {c.skills?.length ? (
        <div className="flex flex-wrap gap-1">
          {c.skills.map((s) => (
            <span
              key={s}
              className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground border border-border/50"
            >
              {s}
            </span>
          ))}
        </div>
      ) : null}

      {/* Tags */}
      {c.tags?.length ? (
        <div className="flex flex-wrap gap-1">
          {c.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {/* Pied de carte */}
      <div className="mt-auto flex items-center justify-between gap-3 pt-2 border-t border-border/40">
        {isExpired && (
          <span className="text-xs text-yellow-500 font-medium">Expirée</span>
        )}
        {c.status === "revoked" && (
          <span className="text-xs text-red-500 font-medium">Révoquée</span>
        )}

        {viewUrl && (
          <button
            type="button"
            onClick={() =>
              window.open(viewUrl, "_blank", "noreferrer,noopener")
            }
            aria-label={`Voir le certificat ${c.title}`}
            className="ml-auto inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 active:scale-95 transition-all shadow-sm shadow-primary/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            Voir le certificat
          </button>
        )}
      </div>
    </article>
  );
}
