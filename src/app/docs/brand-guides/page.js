export const metadata = {
  title: "Brand Guides — monswap-docs",
  description: "Brand usage, colors, spacing, and typography.",
  alternates: { canonical: "/docs/brand-guides" },
}

export default function BrandGuidesPage() {
  return (
    <div className="glass hairline rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Brand Guides</h1>
      <div className="docs-prose">
        <h2>Logo usage</h2>
        <ul>
          <li>Maintain clearspace equal to the height of the “m”.</li>
          <li>Do not alter colors or proportions.</li>
          <li>Use provided assets for best quality.</li>
        </ul>
        <h2>Colors</h2>
        <ul>
          <li>Primary: Accent gradient (red → blue).</li>
          <li>Background: #0b0b0f. Foreground: #e6e6e6.</li>
        </ul>
        <h2>Typography</h2>
        <p>Use the default site font stack for consistency. Avoid substituting unfamiliar display fonts.</p>
      </div>
    </div>
  )
}


