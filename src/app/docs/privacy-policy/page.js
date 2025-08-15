export const metadata = {
  title: "Privacy Policy — MONSWAP Docs",
  description: "Data collection, usage, and user choices.",
  alternates: { canonical: "/docs/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Privacy Policy</h1>
      <div className="docs-prose">
        <h2>Overview</h2>
        <p>
          This policy describes what information may be collected when you use Monswap properties and
          how that information may be used. Monswap is a non‑custodial DeFi product; we do not handle
          user funds or access private keys.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>Basic technical data: IP address, device, browser, and page requests (via standard web logs).</li>
          <li>Usage analytics: aggregate, de‑identified metrics to improve product quality.</li>
          <li>On‑chain data: public blockchain data relevant to protocol usage.</li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>Operate, maintain, and improve our interfaces and documentation.</li>
          <li>Detect abuse and protect the integrity and security of the service.</li>
          <li>Understand feature adoption in aggregate to guide development priorities.</li>
        </ul>

        <h2>Cookies and analytics</h2>
        <p>
          We may use minimal cookies or similar technologies to keep basic preferences and facilitate
          session behavior. Any analytics is aggregated and de‑identified where feasible.
        </p>

        <h2>Third‑party services</h2>
        <p>
          We may rely on third‑party infrastructure (e.g., RPC providers, hosting, analytics). Their
          independent policies govern their handling of data. Review those policies for details.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>Use privacy‑preserving browsers or disable cookies where appropriate.</li>
          <li>Limit the information you provide through optional inputs.</li>
          <li>Review third‑party settings for additional controls.</li>
        </ul>

        <h2>Updates</h2>
        <p>
          We may update this policy as the protocol and interfaces evolve. Material changes will be
          reflected on this page with a revised date.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this policy, contact the team via our Discord community.
        </p>
      </div>
    </div>
  )
}