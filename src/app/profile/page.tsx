import { Metadata } from 'next'
import Link from 'next/link'
import Profile from '@/components/Profile'
import Achievements from '@/components/Achievements'

export const metadata: Metadata = {
  title: 'Profile - Maxim Shreiber',
  description: 'Professional profile and achievements of Maxim Shreiber',
}

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link href="/" className="inline-block mb-8 text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to Home
        </Link>
        <div className="space-y-8">
          <Profile />
          <Achievements />
        </div>
      </div>
    </main>
  )
} 