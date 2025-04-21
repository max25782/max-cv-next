import { Metadata } from 'next'
import Link from 'next/link'
import { profileData } from '@/data/profile'
import * as SiIcons from 'react-icons/si'
import * as TbIcons from 'react-icons/tb'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Maxim Shreiber - Full Stack Developer',
  description: 'Full Stack Developer with 3+ years of hands-on experience in building scalable web and mobile applications.',
}

export default function Home() {
  const { personal, experience, languages, achievements, techStack } = profileData

  const getIcon = (iconName: string) => {
    if (iconName.startsWith('Si')) {
      return SiIcons[iconName as keyof typeof SiIcons]
    } else if (iconName.startsWith('Tb')) {
      return TbIcons[iconName as keyof typeof TbIcons]
    }
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {personal.name}
          </h1>
          <h2 className="text-3xl text-gray-300 mb-6">{personal.title}</h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <span>Tel: {personal.contact.phone}</span>
            <span>|</span>
            <span>Mail: {personal.contact.email}</span>
            <span>|</span>
            <span>Location: {personal.contact.location}</span>
          </div>
          <p className="mt-4">
            GitHub: <a href={personal.contact.github} className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">{personal.contact.github.replace('https://', '')}</a>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">About Me</h3>
            <p className="text-gray-300 leading-relaxed">{personal.summary}</p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center text-blue-400">Experience</h3>
          <div className="grid grid-cols-1 gap-6">
            {experience.map((job, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-6 rounded-xl backdrop-blur-sm border border-gray-600/20">
                <h4 className="text-xl font-semibold text-white mb-2">{job.title}</h4>
                <p className="text-gray-400 mb-4">{job.company}, {job.location} ({job.period})</p>
                <ul className="list-none space-y-2 text-gray-300">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center text-blue-400">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-green-900/50 to-green-800/30 p-4 rounded-xl backdrop-blur-sm border border-green-500/20">
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center text-blue-400">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 px-6 py-3 rounded-xl backdrop-blur-sm border border-yellow-500/20">
                <span className="text-gray-300">{lang.name} ({lang.level})</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6 text-center text-blue-400">Tech Stack</h3>
          <div className="space-y-8">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-6 rounded-xl backdrop-blur-sm border border-gray-600/20">
                <h4 className="text-lg font-semibold text-white mb-4 capitalize">{category}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {items.map((item, index) => {
                    const Icon = getIcon(item.icon)
                    return (
                      <div key={index} className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors">
                        <div className="flex flex-col items-center gap-2">
                          {Icon && <Icon className="text-3xl" />}
                          <span className="text-sm text-gray-300">{item.name}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
