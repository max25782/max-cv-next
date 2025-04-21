export default function Achievements() {
  return (
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
  )
} 