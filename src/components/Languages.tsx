import { profileData } from '@/data/profile'

export default function Languages() {
  const { languages } = profileData

  return (
    <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-4 text-blue-400">LANGUAGES</h3>
      <ul className="list-none space-y-2 text-gray-300">
        {languages.map((lang, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-blue-400">•</span>
            <span>{lang.name} ({lang.level})</span>
          </li>
        ))}
      </ul>
    </section>
  )
} 