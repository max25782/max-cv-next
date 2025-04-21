export default function Header() {
  return (
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
  )
} 