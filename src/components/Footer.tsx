import { profileData } from '@/data/profile'

export default function Footer() {
  const { education } = profileData

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>
            <p className="text-gray-300">
              <strong className="text-white">{education.institution}</strong><br />
              {education.degree}, {education.period}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 