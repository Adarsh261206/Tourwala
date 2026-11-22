import { createFileRoute, Link } from "@tanstack/react-router";
import { imageCredits } from "@/lib/image-credits";
import { CtaArrow } from "@/components/tourwala/ui";
import { ctaClass } from "@/lib/cta";

const title = "Photography Credits | Tourwala Travels";
const description =
  "Photography sources and licence details for the destination images used across the Tourwala Travels website.";

export const Route = createFileRoute("/credits")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CreditsPage,
});

function CreditsPage() {
  return (
    <main className="bg-ivory pb-20 pt-28 sm:pt-32">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8">
        <p className="eyebrow text-saffron">Credits</p>
        <h1 className="display-lg mt-4 max-w-3xl text-maroon-deep">
          Photography <span className="italic text-saffron">credits.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
          Destination photography on this site comes from Unsplash under the Unsplash License and
          from Wikimedia Commons under the licences listed below. Images have been resized and
          cropped for layout.
        </p>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-border bg-card">
          <div className="hidden grid-cols-[1fr_1.4fr_1fr_1fr] gap-4 border-b border-border bg-cream px-5 py-3 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:grid">
            <span>Subject</span>
            <span>Source</span>
            <span>Author</span>
            <span>Licence</span>
          </div>
          <ul>
            {imageCredits.map((credit) => (
              <li
                key={credit.file}
                className="grid gap-2 border-b border-border px-5 py-4 text-xs leading-6 text-muted-foreground last:border-0 sm:grid-cols-[1fr_1.4fr_1fr_1fr] sm:items-center sm:gap-4"
              >
                <span className="font-semibold text-maroon-deep">{credit.label}</span>
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline break-words text-maroon/75 transition-colors hover:text-maroon"
                >
                  {credit.title.replace("File:", "")}
                </a>
                <span>{credit.artist || "—"}</span>
                <span>
                  {credit.licenseUrl ? (
                    <a
                      href={credit.licenseUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-maroon/75 transition-colors hover:text-maroon"
                    >
                      {credit.license}
                    </a>
                  ) : (
                    credit.license || "—"
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className={ctaClass("outline-dark", "mt-8")}>
          Back to home
          <CtaArrow />
        </Link>
      </div>
    </main>
  );
}
