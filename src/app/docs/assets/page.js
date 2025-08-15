export const metadata = {
  title: "Assets — MONSWAP Docs",
  description: "Download official Monswap logos and visual assets.",
  alternates: { canonical: "/docs/assets" },
}

export default function AssetsPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Assets</h1>
      <div className="docs-prose">
        <p>Official Monswap assets for press, integrations, and partners.</p>
        <ul>
          <li><a href="/mon-2.svg" download>Logo (SVG)</a></li>
          <li><a href="/monswaplogo.png" download>Logo (PNG)</a></li>
        </ul>
        <p>If you need additional formats, reach out via Official Links.</p>
      </div>
    </div>
  )
}


