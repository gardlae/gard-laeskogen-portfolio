"use client";

import { useState } from "react";

const tieUpEmbedUrl =
  "https://marvelapp.com/prototype/14aj7hae/screen/78212187?emb=1";

export function TieUpDemo({ compact = false }: { compact?: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`prototype-frame-shell${compact ? " prototype-frame-shell-compact" : ""}${loaded ? " is-loaded" : ""}`}
    >
      <span aria-hidden="true" className="prototype-preview" />
      <iframe
        allow="fullscreen"
        loading="eager"
        onLoad={() => setLoaded(true)}
        referrerPolicy="strict-origin-when-cross-origin"
        src={tieUpEmbedUrl}
        title="Interactive TieUp prototype"
      />
    </div>
  );
}
