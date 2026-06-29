import { useEffect } from "react";

interface CertModalProps {
  title: string;
  fileUrl: string;
  onClose: () => void;
}

export default function CertModal({ title, fileUrl, onClose }: CertModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={`Certificat : ${title}`}
    >
      <div
        className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Barre supérieure */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-background">
          <span className="text-sm font-semibold truncate pr-4">{title}</span>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={fileUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border hover:bg-muted transition-colors"
              aria-label="Télécharger le certificat"
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
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              Télécharger
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-muted transition-colors"
              aria-label="Fermer"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Visionneuse PDF */}
        <iframe
          src={fileUrl}
          title={title}
          className="flex-1 w-full border-0"
        />
      </div>
    </div>
  );
}
