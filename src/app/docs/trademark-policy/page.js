export const metadata = {
  title: "Trademark Policy — MONSWAP Docs",
  description: "Guidelines for using the Monswap name and marks.",
  alternates: { canonical: "/docs/trademark-policy" },
}

export default function TrademarkPolicyPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Trademark Policy</h1>
      <div className="docs-prose">
        <h2>Overview</h2>
        <p>
          This policy explains how to reference Monswap, our names, and any associated marks. The goal
          is to support accurate attribution and avoid confusion.
        </p>

        <h2>Allowed use</h2>
        <ul>
          <li>Use the name “Monswap” to truthfully refer to the project and its products.</li>
          <li>Link to official resources, including this documentation and monswap.app.</li>
          <li>Use our logos and assets as provided, without modification, where attribution is appropriate.</li>
        </ul>

        <h2>Prohibited use</h2>
        <ul>
          <li>Do not imply endorsement, partnership, or official status without express permission.</li>
          <li>Do not alter, distort, or combine our marks with other symbols or names.</li>
          <li>Do not register domain names, trademarks, or accounts that may cause confusion.</li>
        </ul>

        <h2>Naming for integrations</h2>
        <p>
          When integrating with Monswap, use clear names such as “YourApp for Monswap” or “YourApp —
          Monswap integration.” Avoid phrasing that suggests official ownership or control.
        </p>

        <h2>Questions</h2>
        <p>
          If you have questions about this policy or need permission for a specific use, contact the
          team via our Discord community.
        </p>
      </div>
    </div>
  )
}