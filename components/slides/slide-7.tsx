export default function Slide7() {
  return (
    <div className="h-full w-full flex flex-col p-16">
      <h2 className="text-3xl font-light text-gray-800 mb-8">自由と手順（Freedom & Flow）</h2>

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Illustration: Grid below, flowing waves above */}
        <div className="mb-12">
          <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Foundation box */}
            <rect x="40" y="170" width="380" height="130" rx="16" fill="#E0E7FF" />
            <text x="210" y="245" fontSize="32" fontWeight="600" fill="#1F2937" textAnchor="middle">
              思考の土台
            </text>

            {/* Left arrow - 自由な発想 */}
            <path d="M 80 170 Q 80 100, 100 50" stroke="#2A6DF5" strokeWidth="3" strokeDasharray="8,6" fill="none" />
            <path d="M 100 50 L 95 60 L 105 60 Z" fill="#2A6DF5" />
            <text x="60" y="40" fontSize="18" fill="#2A6DF5" fontWeight="500">
              自由な発想
            </text>

            {/* Middle arrow - 創造性 */}
            <path d="M 210 170 Q 210 100, 230 50" stroke="#2A6DF5" strokeWidth="3" strokeDasharray="8,6" fill="none" />
            <path d="M 230 50 L 225 60 L 235 60 Z" fill="#2A6DF5" />
            <text x="240" y="40" fontSize="18" fill="#2A6DF5" fontWeight="500">
              創造性
            </text>

            {/* Right arrow - 大胆な */}
            <path d="M 340 170 Q 340 100, 360 50" stroke="#2A6DF5" strokeWidth="3" strokeDasharray="8,6" fill="none" />
            <path d="M 360 50 L 355 60 L 365 60 Z" fill="#2A6DF5" />
            <text x="370" y="40" fontSize="18" fill="#2A6DF5" fontWeight="500">
              大胆な挑戦
            </text>
          </svg>
        </div>

        {/* Main message */}
        <p className="text-4xl font-bold text-[#2A6DF5] mb-6 text-center max-w-4xl leading-relaxed text-balance">
          明確な手順は、制約ではない。
        </p>

        {/* Supporting text */}
        <p className="text-xl text-gray-600 text-center max-w-3xl whitespace-nowrap">
          それは、自由を生み出す「思考の土台」です。mymemは、その土台を支えるパートナーです。
        </p>
      </div>
    </div>
  )
}
