import { Metadata } from 'next'
import Link from 'next/link'
import Experience from '@/components/Experience'

export const metadata: Metadata = {
  title: 'Experience - Maxim Shreiber',
  description: 'Professional experience and work history of Maxim Shreiber',
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href="/" className="inline-block mb-8 text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to Home
        </Link>
        <Experience />
      </div>
    </main>
  )
} 