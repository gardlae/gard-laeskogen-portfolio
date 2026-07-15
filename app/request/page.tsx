import type { Metadata } from "next";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { RequestForm } from "./RequestForm";

export const metadata: Metadata = {
  title: "Request Documents | Gard Laeskogen",
  description: "Request Gard Laeskogen's detailed CV and project portfolio.",
};

export default function RequestPage() {
  return (
    <main>
      <SiteHeader />
      <header className="request-page-header">
        <div>
          <p className="section-number light">Private material</p>
          <h1>Request detailed CV and portfolio.</h1>
        </div>
        <span aria-hidden="true" className="request-lock-mark">Private</span>
      </header>

      <section className="request-page-body">
        <div className="request-explanation">
          <p>
            The full documents are not stored on the public website. Each request is reviewed before access is granted.
          </p>
          <ol>
            <li><span>01</span> Complete the request.</li>
            <li><span>02</span> Your email app opens with the details.</li>
            <li><span>03</span> Gard reviews the request and replies directly.</li>
          </ol>
        </div>
        <RequestForm />
      </section>
      <SiteFooter />
    </main>
  );
}
