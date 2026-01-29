import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Royal X Casino - Frequently Asked Questions Pakistan',
  description:
    'Find answers to common questions about Royal X Casino including availability in Pakistan, mobile compatibility, deposits, withdrawals, and platform safety.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
