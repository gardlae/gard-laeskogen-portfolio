export function buildDocumentRequestMailto(email: string, organisation: string) {
  const subject = `Detailed CV and portfolio request - ${organisation}`;
  const body = [
    `Company or organisation: ${organisation}`,
    "",
    "I would like to request Gard Laeskogen's detailed CV and project portfolio.",
  ].join("\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
