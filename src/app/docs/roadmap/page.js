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
        <h2>Overview</h2>
        <p>
          We prefer to under‑promise and over‑deliver. The plan below outlines the near‑term sequence
          we are working toward. Ordering and scope may adjust based on audit outcomes and user feedback.
        </p>

        <h2>Milestones</h2>

        <h3>1. Marketing and community growth</h3>
        <p>
          A focused Twitter/X campaign to expand reach and prime distribution for launch. During this
          phase we will run an exclusive testnet NFT mint.
        </p>
        <p><strong>Pixel Monsters (testnet)</strong></p>
        <ul>
          <li>Limited to 333 unique monsters</li>
          <li>Guaranteed allowlist (GTD WL)</li>
          <li>First‑come‑first‑serve allowlist (FCFS WL)</li>
        </ul>
        <p>
          Note: Monswap is a DeFi project. At most three collections are planned as part of the
          community expansion campaign.
        </p>

        <h3>2. veDEX testnet launch (≈ 1 month)</h3>
        <p>
          Public testnet deployment to validate core flows, gather feedback, and prepare for mainnet.
        </p>

        <h3>3. Liquidity provisioning</h3>
        <p>
          Fundraising focused on deepening liquidity for key pairs and improving routing efficiency.
          Whitelisting details will be shared closer to launch.
        </p>

        <h3>4. Security review and whitepaper finalization</h3>
        <p>
          Smart contract audit and finalization of the protocol specification.
        </p>

        <h3>5. Mainnet launch</h3>
        <p>
          Progressive rollout with safeguards, monitoring, and iteration informed by early usage.
        </p>

        <h2>Status</h2>
        <p>
          The frontend is approximately 80% complete. We will iterate further once on‑chain components
          are integrated and we collect real user feedback.
        </p>
      </div>
    </div>
  )
}


