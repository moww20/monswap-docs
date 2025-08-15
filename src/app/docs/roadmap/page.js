export const metadata = {
  title: "Roadmap — MONSWAP Docs",
  description: "Planned milestones and features.",
  alternates: { canonical: "/docs/roadmap" },
}

export default function RoadmapPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Roadmap</h1>
      <div className="docs-prose">
        <h2>Approach</h2>
        <p>
          There’s more we’d love to share—but we’d rather under‑promise and over‑deliver. That said,
          here’s what to expect in the coming days and months.
        </p>

        <h2>Our rough roadmap</h2>

        <h3>1️⃣ Twitter/X Marketing Campaign</h3>
        <p>The goal is to grow our reach so momentum can snowball organically.</p>
        <p>We will be running an exclusive NFT mint on testnet.</p>
        <h3>NFT Collection 1: Pixel Monsters</h3>
        <ul>
          <li>✔️ Limited 333 unique Monsters</li>
          <li>✔️ Guaranteed allowlist (GTD WL)</li>
          <li>✔️ First‑come‑first‑serve allowlist (FCFS WL)</li>
        </ul>
        <p><em>Note:</em> We are a DeFi project and plan to release a maximum of three collections
          as part of our community expansion campaign.</p>

        <h3>2️⃣ VeDEX launch on testnet (≈ 1 month)</h3>
        <p>Testnet deployment to validate core flows, gather feedback, and prepare for mainnet.</p>

        <h3>3️⃣ Fundraising for LP</h3>
        <p>Liquidity provisioning raises to deepen pairs and improve routing efficiency.
           Whitelisting details will be shared closer to launch.</p>

        <h3>4️⃣ Smart contract audit + whitepaper finalization</h3>
        <p>Security review and formalization of the final protocol specification.</p>

        <h3>5️⃣ Official mainnet launch</h3>
        <p>Progressive rollout with safeguards, monitoring, and post‑launch iteration.</p>

        <h2>Status</h2>
        <p>
          The frontend is ~80% complete and will iterate further once everything is hooked up and
          we gather user feedback.
        </p>
      </div>
    </div>
  )
}


