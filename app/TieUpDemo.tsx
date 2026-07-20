const tieUpEmbedUrl = "https://marvelapp.com/prototype/14aj7hae?emb=1&";

export function TieUpDemo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`prototype-frame-shell${compact ? " prototype-frame-shell-compact" : ""}`}>
      <iframe
        allow="fullscreen"
        loading="eager"
        referrerPolicy="no-referrer"
        src={tieUpEmbedUrl}
        title="Interactive TieUp prototype"
      />
    </div>
  );
}
