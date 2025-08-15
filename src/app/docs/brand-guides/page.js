export const metadata = {
  title: "Brand — MONSWAP Docs",
  description: "Brand guidelines, logo usage, and downloadable assets.",
  alternates: { canonical: "/docs/brand-guides" },
}

export default function BrandPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Brand</h1>
      <div className="docs-prose">
        <h2>Logo usage</h2>
        <ul>
          <li>Maintain clearspace equal to the height of the “m”.</li>
          <li>Do not alter colors or proportions.</li>
          <li>Use provided assets for best quality.</li>
        </ul>
        <p>Use the primary logo on dark backgrounds. Maintain a minimum width of 24px on digital.</p>
        <p>Clearspace around the logo should be at least the height of the “m”.</p>

        <h2>Colors</h2>
        <ul>
          <li>Primary: Accent gradient (red → blue).</li>
          <li>Background: #0b0b0f. Foreground: #e6e6e6.</li>
        </ul>

        <h2>Typography</h2>
        <p>Use the default site font stack for consistency. Avoid substituting unfamiliar display fonts.</p>

        <h2>Assets & Downloads</h2>
        <ul>
          <li><a href="/mon-2.svg" download>Logo (SVG)</a></li>
          <li><a href="/monswaplogo.png" download>Logo (PNG)</a></li>
        </ul>
      </div>
    </div>
  )
}


