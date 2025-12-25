export default function Slide4() {
  return (
    <div className="h-full w-full flex flex-col p-16 pb-32">
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-800">洞察（Insight）</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 max-w-5xl w-full mx-auto mt-6">
        <div className="w-full max-w-4xl bg-slate-900 rounded-3xl shadow-lg p-12">
          <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Left side: Simple chaotic scribble */}
            <g>
              {/* Messy overlapping circles representing chaos */}
              <circle cx="140" cy="140" r="50" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.4" />
              <circle cx="160" cy="130" r="45" stroke="#93C5FD" strokeWidth="2" fill="none" opacity="0.3" />
              <circle cx="150" cy="150" r="55" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.5" />
              <circle cx="170" cy="145" r="40" stroke="#93C5FD" strokeWidth="2" fill="none" opacity="0.4" />
              <circle cx="145" cy="135" r="48" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.6" />
            </g>

            {/* Vertical divider line */}
            <line x1="350" y1="60" x2="350" y2="220" stroke="#2A6DF5" strokeWidth="3" />

            {/* Center: Large solid arrow */}
            <path d="M 280 140 L 330 140 L 330 120 L 365 140 L 330 160 L 330 140" fill="#2A6DF5" />

            {/* Right side: Clean organized parallel lines */}
            <g>
              <path d="M 400 90 L 700 90" stroke="#93C5FD" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M 400 115 L 700 115" stroke="#60A5FA" strokeWidth="2.5" fill="none" />
              <path d="M 400 140 L 700 140" stroke="#93C5FD" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M 400 165 L 700 165" stroke="#60A5FA" strokeWidth="2.5" fill="none" />
              <path d="M 400 190 L 700 190" stroke="#93C5FD" strokeWidth="2" fill="none" opacity="0.6" />

              {/* Arrow at the end */}
              <path d="M 700 140 L 720 140 L 720 125 L 745 140 L 720 155 L 720 140" fill="#2A6DF5" />
            </g>
          </svg>
        </div>

        <div className="text-center space-y-4">
          <p className="text-5xl font-bold text-[#2A6DF5] whitespace-nowrap">
            最も大切なのは知能ではなく、思考の構造と手順。
          </p>
          <p className="text-xl text-gray-800 leading-relaxed">「モノの見方」を増やす視点づくり</p>
        </div>
      </div>
    </div>
  )
}
