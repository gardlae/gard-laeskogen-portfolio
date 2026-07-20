const tieUpEmbedUrl =
  "https://marvelapp.com/prototype/14aj7hae/screen/78212187?emb=1";

export function TieUpDemo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`prototype-frame-shell${compact ? " prototype-frame-shell-compact" : ""}`}>
      <iframe
        allow="fullscreen"
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        src={tieUpEmbedUrl}
        title="Interactive TieUp prototype"
      />
    </div>
  );
}
