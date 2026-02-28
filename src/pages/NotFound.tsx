import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-6">
      <div className="text-center max-w-xl">
        <h1 className="mb-4 font-display text-[3rem] text-[var(--text-primary)]">404</h1>
        <p className="mb-4 text-[1.1rem] text-[var(--text-secondary)]">
          Pagina nao encontrada.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-[var(--accent-gold)] text-[var(--bg-primary)] font-btn text-sm hover:bg-[var(--accent-gold-hover)] transition-colors"
        >
          Voltar para o inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
