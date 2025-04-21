import { profileData } from '@/data/profile'

export default function Experience() {
  const { experience } = profileData

  return (
    <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-6 text-blue-400">PROFESSIONAL EXPERIENCE</h3>
      
      {experience.map((job, index) => (
        <div key={index} className="mb-8">
          <h4 className="text-xl font-semibold text-white mb-2">{job.title}</h4>
          <p className="text-gray-400 mb-4">{job.company}, {job.location} ({job.period})</p>
          <ul className="list-none space-y-3 text-gray-300">
            {job.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
} 