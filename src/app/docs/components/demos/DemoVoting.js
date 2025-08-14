"use client"

import VoteCard from "../../../components/VoteCard"

export default function DemoVoting() {
  return (
    <div className="max-w-lg mx-auto force-dark rounded-2xl p-4">
      <VoteCard tokenSymbol="RAWR" available="—" veBalance="0" />
    </div>
  )
}


