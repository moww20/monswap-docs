export const metadata = {
  title: "Licensing — MONSWAP Docs",
  description: "Licenses for code, content, and dependencies.",
  alternates: { canonical: "/docs/licensing" },
}

export default function LicensingPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Licensing</h1>
      <div className="docs-prose">
        <h2>Overview</h2>
        <p>
          This page summarizes licensing for Monswap code, site content, and third‑party dependencies.
          Specific license files in repositories or packages control in case of conflict.
        </p>

        <h2>Code</h2>
        <p>
          Unless otherwise noted, Monswap application code will be released under a permissive open‑source
          license upon open‑sourcing. Exact terms will be confirmed at that time.
        </p>

        <h2>Content</h2>
        <p>
          Documentation and site content are provided for informational purposes. You may reference and
          quote with attribution. Do not misrepresent or imply endorsement.
        </p>

        <h2>Third‑party dependencies</h2>
        <p>
          Monswap relies on third‑party libraries and services. Those components are licensed under their
          respective terms. Review each dependency’s license for details.
        </p>

        <h2>Questions</h2>
        <p>
          For licensing questions, contact the team via our Discord community.
        </p>
      </div>
    </div>
  )
}