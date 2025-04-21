import { profileData } from '@/data/profile'
import * as SiIcons from 'react-icons/si'
import * as TbIcons from 'react-icons/tb'

export default function TechStack() {
  const { techStack } = profileData

  const getIcon = (iconName: string) => {
    if (iconName.startsWith('Si')) {
      return SiIcons[iconName as keyof typeof SiIcons]
    } else if (iconName.startsWith('Tb')) {
      return TbIcons[iconName as keyof typeof TbIcons]
    }
    return null
  }

  return (
    <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-6 text-blue-400">TECH STACK</h3>
      <div className="space-y-8">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold text-white mb-4 capitalize">{category}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {items.map((item, index) => {
                const Icon = getIcon(item.icon)
                return (
                  <div key={index} className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
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
    </section>
  )
} 