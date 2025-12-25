export default function Slide71() {
  return (
    <div className="relative h-full w-full bg-white p-16 overflow-hidden">
      {/* Background network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="#2A6DF5" />
            <line x1="50" y1="50" x2="100" y2="50" stroke="#2A6DF5" strokeWidth="1" />
            <line x1="50" y1="50" x2="50" y2="100" stroke="#2A6DF5" strokeWidth="1" />
            <line x1="50" y1="50" x2="75" y2="25" stroke="#2A6DF5" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>

      {/* Section title */}
      <div className="mb-16">
        <h2 className="text-3xl font-light text-gray-800">
          共有性<span className="text-gray-500 text-xl ml-2">（Shareability）</span>
        </h2>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-8rem)] gap-12">
        {/* Main copy */}
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold text-[#2A6DF5] leading-relaxed">
            自分の考え方や視点を、他者が再利用できる時代へ。
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed">
            mymemは、思考の手順をつなぐ "Skill Network" を構築します。
          </p>
        </div>

        {/* Skill Network Diagram */}
        <div className="flex items-center justify-center gap-8 my-8">
          {/* Individual */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl">🧍</div>
            <span className="text-sm text-gray-600 font-medium">個人</span>
          </div>

          {/* Arrow */}
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-[#2A6DF5]">
            <path
              d="M 5 20 L 45 20 M 35 10 L 45 20 L 35 30"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* AI Clone */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center text-4xl">🤖</div>
            <span className="text-sm text-gray-600 font-medium">分身AI</span>
          </div>

          {/* Arrow */}
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-[#2A6DF5]">
            <path
              d="M 5 20 L 45 20 M 35 10 L 45 20 L 35 30"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Skill Library */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-[#2A6DF5] flex items-center justify-center text-4xl">🌐</div>
            <span className="text-sm text-white font-medium bg-[#2A6DF5] px-3 py-1 rounded-full">Skill Library</span>
          </div>

          {/* Arrow */}
          <svg width="60" height="40" viewBox="0 0 60 40" className="text-[#2A6DF5]">
            <path
              d="M 5 20 L 45 20 M 35 10 L 45 20 L 35 30"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Others */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-4xl">👥</div>
            <span className="text-sm text-gray-600 font-medium">他者</span>
          </div>
        </div>

        {/* English label */}
        <p className="text-sm text-gray-500 italic">Skill Network / Cognitive Sharing Layer</p>

        {/* Bottom catchphrases */}
        <div className="text-center space-y-2 mt-8">
          <p className="text-lg text-gray-700 font-medium">一人の思考は、次の創造の起点になり得る。</p>
          <p className="text-lg text-gray-700 font-medium">人と人がつながり、創造の循環が生まれていく。</p>
        </div>
      </div>
    </div>
  )
}
