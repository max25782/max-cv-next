import { profileData } from '@/data/profile'

export default function Profile() {
  const { personal } = profileData

  return (
    <section className="mb-12 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-4 text-blue-400">PROFILE</h3>
      <div className="text-gray-300 space-y-4">
        <p className="leading-relaxed">{personal.summary}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <span>Tel: {personal.contact.phone}</span>
          <span>|</span>
          <span>Mail: {personal.contact.email}</span>
          <span>|</span>
          <span>Location: {personal.contact.location}</span>
        </div>
        <p>
          GitHub: <a href={personal.contact.github} className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">{personal.contact.github.replace('https://', '')}</a>
        </p>
      </div>
    </section>
  )
} 