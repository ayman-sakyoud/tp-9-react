import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const status = isRouteErrorResponse(error) ? error.status : null;
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : "Une erreur inattendue s'est produite.";

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-6 p-6 text-center">
      <div className="text-6xl font-bold text-muted-foreground/30">
        {status ?? "Erreur"}
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">
          {status === 404 ? "Page introuvable" : "Une erreur est survenue"}
        </h1>
        <p className="text-sm text-muted-foreground max-w-sm">
          {status === 404
            ? "La page que vous cherchez n'existe pas ou a été déplacée."
            : message}
        </p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
