export const metadata = {
  title: "Voting Tutorial — MONSWAP Docs",
  description: "How to cast votes and direct emissions.",
  alternates: { canonical: "/docs/tutorials/voting" },
}

import DemoVoting from "../../components/demos/DemoVoting"

export default function VotingTutorialPage() {
  return (
    <div className="rounded-2xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-3">Voting Tutorial</h1>
      <div className="docs-prose">
        <ol>
          <li>Create or extend a lock to gain vote power.</li>
          <li>Allocate power across pools; review bribes and fees.</li>
          <li>Confirm votes; re‑vote each epoch as allocations reset.</li>
        </ol>
        <h2>Interface preview</h2>
        <p>Interactive demo preview of the voting flow.</p>
      </div>
      <div className="mt-6 max-w-xl">
        <div className="mb-2 text-sm text-[--color-muted]">Demo</div>
        <DemoVoting />
      </div>
    </div>
  )
}


