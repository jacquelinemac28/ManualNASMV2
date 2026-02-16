import React, { useEffect, useState } from "react";
import "../Styles/resourser.css";

const Resourser = () => {
  const [open, setOpen] = useState(false);
  const [visits, setVisits] = useState(0);

  // Visitor Counter (localStorage)
  useEffect(() => {
    const storedVisits = localStorage.getItem("nasm_visits");
    const newVisits = storedVisits ? parseInt(storedVisits) + 1 : 1;
    localStorage.setItem("nasm_visits", newVisits);
    setVisits(newVisits);
  }, []);

  return (
    <section className="resourser-section">
      <h1 className="resourser-title">Recursos Interactivos NASM</h1>

      <div className="resourser-grid">
        {/* Flipbook Widget */}
        <div className="widget flipbook-widget">
          <h2>📖 Manual interactivo</h2>
          <p>Consulta el manual NASM en formato flipbook.</p>
          <button className="resource-btn" onClick={() => setOpen(true)}>
            Abrir Flipbook
          </button>
        </div>

        {/* Visitor Counter Widget */}
        <div className="widget counter-widget">
          <h2>👥 Visitor Counter</h2>
          <p className="counter-number">{visits}</p>
          <span className="counter-label">visitas registradas</span>
        </div>

        {/* Descargas */}
        <div className="widget">
          <h2>📎 Descargas</h2>
          <ul className="resource-list">
            <li>
              <a href="/pdf/nasm-mini-manual.pdf" target="_blank" rel="noreferrer">
                Manual NASM (PDF)
              </a>
            </li>
            <li>
              <a
                href="https://www.nasm.us/pub/nasm/releasebuilds/"
                target="_blank"
                rel="noreferrer"
              >
                Descargar NASM
              </a>
            </li>
          </ul>
        </div>

        {/* Video */}
        <div className="widget">
          <h2>🎥 Video recomendado</h2>
          <iframe
            src="https://www.youtube.com/embed/zeK2Hf9_VIw"
            title="NASM Tutorial"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* MODAL PDF */}
      {open && (
        <div className="modal-overlay">
          <div className="modal flipbook-modal">
            <header className="modal-header">
              <h3>📘 Manual NASM</h3>
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✕
              </button>
            </header>

            <iframe
              src="/pdf/nasm-mini-manual.pdf"
              title="Flipbook NASM"
              className="pdf-viewer"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resourser;
