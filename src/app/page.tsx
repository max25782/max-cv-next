import { Metadata } from 'next'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiHtml5, SiCss3, SiSass, SiMui, SiChakraui,
  SiStyledcomponents, SiNodedotjs, SiExpress, SiNestjs,
  SiGraphql, SiSocketdotio, SiRedis, SiPrisma, SiMongodb,
  SiPostgresql, SiMysql, SiAuth0, SiJsonwebtokens,
  SiPassport, SiRabbitmq, SiApachekafka, SiAmazon,
  SiMicrosoftazure, SiServerless, SiDocker, SiKubernetes,
  SiGithubactions, SiJenkins, SiTerraform, SiGrafana,
  SiPrometheus, SiSentry, SiJest, SiCypress, SiTestinglibrary,
  SiVitest, SiSwagger, SiOpenai, SiGit, SiGithub,
  SiEslint, SiPrettier, SiApollographql,
  SiWebpack, SiVite, SiNginx
} from 'react-icons/si'
import { TbBrandReactNative, TbBrandVisualStudio } from 'react-icons/tb'

export const metadata: Metadata = {
  title: 'Maxim Shreiber - Full Stack Developer',
  description: 'Full Stack Developer with 3+ years of hands-on experience in building scalable web and mobile applications.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="header mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Maxim Shreiber</h1>
          <h2 className="text-3xl text-gray-300 mb-6">Full Stack Developer</h2>
          <div className="text-gray-300 space-y-2">
            <p className="flex items-center justify-center gap-4">
              <span>Tel: +972 524494848</span>
              <span>|</span>
              <span>Mail: max25782@gmail.com</span>
              <span>|</span>
              <span>Address: Karnei Shomron, Israel</span>
            </p>
            <p>
              GitHub: <a href="https://github.com/max25782" className="text-blue-400 hover:text-blue-300 transition-colors">github.com/max25782</a>
            </p>
          </div>
        </div>

        <section className="mb-12 bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">PROFILE</h3>
          <p className="text-gray-300 leading-relaxed">
            Full Stack Developer with 3+ years of hands-on experience in building scalable web and mobile applications. 
            Proven ability to improve performance, create reusable components, and drive development efficiency. 
            Passionate about clean code, modern UI, and cross-functional teamwork. Open to remote opportunities in the EMEA region.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">KEY ACHIEVEMENTS</h3>
              <ul className="list-none space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Boosted frontend performance by 20% through optimized rendering and lazy loading, reducing load time from 4.5 to 3.6 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Reduced code duplication by 15% via reusable React components, implementing a library of 30+ UI elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed and launched a warehouse management mobile app that automated 5 key business processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Successfully integrated 8+ third-party APIs, configured GraphQL and Apollo Client, reducing data fetch time by 35%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Improved session handling and scalability using Redis, ensuring support for 10,000+ concurrent users</span>
                </li>
              </ul>
            </section>

            <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">PROFESSIONAL EXPERIENCE</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Frontend Web Developer</h4>
                <p className="text-gray-400 mb-4">ALP ITSM, Germany (Jan 2024 – Dec 2024)</p>
                <ul className="list-none space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Built responsive and accessible UI with React and Tailwind, reducing time-to-market for new features by 30%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Optimized bundle size by 25% and app load time from 3.8 to 2.5 seconds through code splitting and best practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Integrated 5+ REST APIs and GraphQL endpoints using Apollo Client, ensuring seamless operations for 5,000+ daily users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Managed application state using Redux and Context API, creating a scalable data architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Maintained high code quality with ESLint, Prettier, and thorough code reviews, reducing bugs by 30%</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Full Stack Developer</h4>
                <p className="text-gray-400 mb-4">Benecom Technologies, Russia (Remote) (Oct 2022 – Dec 2023)</p>
                <ul className="list-none space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Built 3 full-stack web applications using Node.js, Express.js, Nest.js, receiving positive feedback from 90% of users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Implemented Redis for session management, caching, and pub/sub patterns, increasing data load speed by 40%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Used Prisma ORM for structured and secure database access, reducing development time by 20%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Managed PostgreSQL and MongoDB databases, optimizing queries for 50% performance improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Integrated GraphQL APIs and RESTful services in scalable architecture, handling over 1 million requests per month</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Frontend Developer</h4>
                <p className="text-gray-400 mb-4">Yandex.Market, Russia (Remote) (Apr 2021 – Aug 2022)</p>
                <ul className="list-none space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Developed high-performance UI with React and Next.js for a service with 5+ million monthly users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Implemented security improvements and performance optimizations, eliminating 15+ vulnerabilities and improving Lighthouse score by 25 points</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-2">Frontend Developer</h4>
                <p className="text-gray-400 mb-4">SberKorus, Russia (Remote) (Jul 2020 – Jan 2021)</p>
                <ul className="list-none space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Worked on frontend solutions for public sector platforms serving over 500,000 users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Maintained and updated UI components in legacy systems, successfully migrating 20+ features to modern tech stack</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">EDUCATION</h3>
              <p className="text-gray-300">
                <strong className="text-white">Saint Petersburg State Institute of Technology</strong><br />
                Bachelor's Degree in Computer Science, 2016–2020
              </p>
            </section>

            <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">LANGUAGES</h3>
              <ul className="list-none space-y-2 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Hebrew (Native)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>Russian (Fluent)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-400">•</span>
                  <span>English (Intermediate, improving towards B2)</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">TECH STACK</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Frontend & UI</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiReact className="text-3xl text-[#61DAFB]" />
                        <span className="text-sm text-gray-300">React</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <TbBrandReactNative className="text-3xl text-[#61DAFB]" />
                        <span className="text-sm text-gray-300">React Native</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiNextdotjs className="text-3xl text-white" />
                        <span className="text-sm text-gray-300">Next.js</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiTypescript className="text-3xl text-[#3178C6]" />
                        <span className="text-sm text-gray-300">TypeScript</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiTailwindcss className="text-3xl text-[#38B2AC]" />
                        <span className="text-sm text-gray-300">Tailwind</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiMui className="text-3xl text-[#0081CB]" />
                        <span className="text-sm text-gray-300">Material UI</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Backend & APIs</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiNodedotjs className="text-3xl text-[#339933]" />
                        <span className="text-sm text-gray-300">Node.js</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiExpress className="text-3xl text-white" />
                        <span className="text-sm text-gray-300">Express</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiNestjs className="text-3xl text-[#E0234E]" />
                        <span className="text-sm text-gray-300">Nest.js</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiGraphql className="text-3xl text-[#E10098]" />
                        <span className="text-sm text-gray-300">GraphQL</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiSocketdotio className="text-3xl text-white" />
                        <span className="text-sm text-gray-300">Socket.IO</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiPrisma className="text-3xl text-white" />
                        <span className="text-sm text-gray-300">Prisma</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Databases & Caching</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiMongodb className="text-3xl text-[#47A248]" />
                        <span className="text-sm text-gray-300">MongoDB</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiPostgresql className="text-3xl text-[#336791]" />
                        <span className="text-sm text-gray-300">PostgreSQL</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiMysql className="text-3xl text-[#4479A1]" />
                        <span className="text-sm text-gray-300">MySQL</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiRedis className="text-3xl text-[#DC382D]" />
                        <span className="text-sm text-gray-300">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Cloud & DevOps</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiAmazon className="text-3xl text-[#FF9900]" />
                        <span className="text-sm text-gray-300">AWS</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiDocker className="text-3xl text-[#2496ED]" />
                        <span className="text-sm text-gray-300">Docker</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiKubernetes className="text-3xl text-[#326CE5]" />
                        <span className="text-sm text-gray-300">Kubernetes</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiNginx className="text-3xl text-[#009639]" />
                        <span className="text-sm text-gray-300">Nginx</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiTerraform className="text-3xl text-[#7B42BC]" />
                        <span className="text-sm text-gray-300">Terraform</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiGithubactions className="text-3xl text-[#2088FF]" />
                        <span className="text-sm text-gray-300">GitHub Actions</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Testing & Monitoring</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiJest className="text-3xl text-[#C21325]" />
                        <span className="text-sm text-gray-300">Jest</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiCypress className="text-3xl text-[#17202C]" />
                        <span className="text-sm text-gray-300">Cypress</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiTestinglibrary className="text-3xl text-[#E33332]" />
                        <span className="text-sm text-gray-300">Testing Library</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiGrafana className="text-3xl text-[#F46800]" />
                        <span className="text-sm text-gray-300">Grafana</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiPrometheus className="text-3xl text-[#E6522C]" />
                        <span className="text-sm text-gray-300">Prometheus</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiSentry className="text-3xl text-[#362D59]" />
                        <span className="text-sm text-gray-300">Sentry</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Tools & Utilities</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiGit className="text-3xl text-[#F05032]" />
                        <span className="text-sm text-gray-300">Git</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiSwagger className="text-3xl text-[#85EA2D]" />
                        <span className="text-sm text-gray-300">Swagger</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiEslint className="text-3xl text-[#4B32C3]" />
                        <span className="text-sm text-gray-300">ESLint</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiPrettier className="text-3xl text-[#F7B93E]" />
                        <span className="text-sm text-gray-300">Prettier</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiWebpack className="text-3xl text-[#8DD6F9]" />
                        <span className="text-sm text-gray-300">Webpack</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <SiVite className="text-3xl text-[#646CFF]" />
                        <span className="text-sm text-gray-300">Vite</span>
                      </div>
                    </div>
                    <div className="tech-item group p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                      <div className="flex flex-col items-center gap-2">
                        <TbBrandVisualStudio className="text-3xl text-[#007ACC]" />
                        <span className="text-sm text-gray-300">VS Code</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
