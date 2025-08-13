import DocsShell from "./DocsShell"

export const metadata = {
  title: "monswap-docs",
  description: "Documentation for monswap.",
  openGraph: {
    title: "monswap-docs",
    description: "Documentation for monswap.",
    url: "/docs",
    siteName: "monswap-docs",
    images: [
      { url: "/mon-2.svg", width: 1200, height: 630, alt: "monswap" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "monswap-docs",
    description: "Documentation for monswap.",
    images: ["/mon-2.svg"],
  },
}

export default function DocsLayout({ children }) {
  return (
    <main className="min-h-[80vh] max-w-7xl mx-auto px-6 py-10" role="main">
      <DocsShell>{children}</DocsShell>
    </main>
  )
}


