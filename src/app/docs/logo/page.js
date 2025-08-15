export const metadata = {
  title: "Logo — MONSWAP Docs",
  description: "Logo formats, clearspace, and sizing guidance.",
  alternates: { canonical: "/docs/logo" },
}

export default function LogoPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Logo</h1>
      <div className="docs-prose">
        <h2>Overview</h2>
        <p>Use the primary logo on dark backgrounds. Maintain minimum width of 24px on digital.</p>
        <p>Clearspace around the logo should be at least the height of the “m”.</p>
        <h3>Download</h3>
        <p>
          <a href="/mon-2.svg" download>SVG</a> · <a href="/monswaplogo.png" download>PNG</a>
        </p>
      </div>
    </div>
  )
}


