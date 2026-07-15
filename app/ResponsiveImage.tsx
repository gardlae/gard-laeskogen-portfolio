type ResponsiveImageProps = {
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
  src: string;
};

export function ResponsiveImage({
  alt,
  className = "",
  priority = false,
  sizes,
  src,
}: ResponsiveImageProps) {
  const extensionIndex = src.lastIndexOf(".");
  const stem = extensionIndex > -1 ? src.slice(0, extensionIndex) : src;
  const avif = `${stem}-640.avif 640w, ${stem}-768.avif 768w, ${stem}-1280.avif 1280w`;
  const webp = `${stem}-640.webp 640w, ${stem}-768.webp 768w, ${stem}-1280.webp 1280w`;

  return (
    <picture className={`responsive-image ${className}`}>
      <source sizes={sizes} srcSet={avif} type="image/avif" />
      <source sizes={sizes} srcSet={webp} type="image/webp" />
      <img
        alt={alt}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        src={src}
      />
    </picture>
  );
}
