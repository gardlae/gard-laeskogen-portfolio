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
    <main className="site-main">
      <SiteHeader />
      <div className="page-content compact-page full-height-page">
        <header className="page-heading request-heading">
          <div><p className="kicker">Private material</p><h1>Document request</h1></div>
          <p>The detailed CV and project portfolio are shared directly with selected companies and recruiters.</p>
        </header>

        <section className="request-workspace">
          <aside className="request-process">
            <div className="private-badge"><span /> Controlled access</div>
            <h2>Request detailed material</h2>
            <p>The files are not stored on the public website. Gard reviews each request and replies directly.</p>
            <ol>
              <li><span>01</span><div><strong>Complete request</strong><p>Add your company and hiring context.</p></div></li>
              <li><span>02</span><div><strong>Prepare email</strong><p>Your email app opens with the request.</p></div></li>
              <li><span>03</span><div><strong>Direct review</strong><p>Access is approved and shared individually.</p></div></li>
            </ol>
          </aside>
          <RequestForm />
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
