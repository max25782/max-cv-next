import { profileData } from '@/data/profile'

export default function Education() {
  const { education } = profileData

  return (
    <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-4 text-blue-400">EDUCATION</h3>
      <p className="text-gray-300">
        <strong className="text-white">{education.institution}</strong><br />
        {education.degree}, {education.period}
      </p>
    </section>
  )
} 