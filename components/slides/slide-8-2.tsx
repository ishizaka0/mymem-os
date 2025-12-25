export default function Slide82() {
  return (
    <div className="relative h-full w-full bg-white p-16 flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 opacity-40" />

      {/* Section title */}
      <div className="relative z-10 mb-16">
        <h2 className="text-3xl font-light text-gray-800">大切にしていること（What We Care About）</h2>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-16 max-w-5xl mx-auto pt-16">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-[#337DFF] mb-8 leading-tight">
            AIは「提案」するが、
            <br />
            「確定」するのは常に人間
          </h3>
        </div>

        {/* Flow diagram - unchanged */}
        <div className="flex items-center justify-center gap-6">
          {/* Human (start) */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-lg bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
              <span className="text-2xl font-semibold text-gray-700">人間</span>
            </div>
            <p className="text-sm text-gray-600 text-center">価値・問い</p>
          </div>

          {/* Arrow down */}
          <svg width="40" height="24" viewBox="0 0 40 24" className="text-gray-400">
            <path
              d="M 0 12 L 30 12 M 25 7 L 30 12 L 25 17"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* AI */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-lg bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
              <span className="text-2xl font-semibold text-blue-600">AI</span>
            </div>
            <p className="text-sm text-gray-600 text-center">整理・比較</p>
          </div>

          {/* Arrow */}
          <svg width="40" height="24" viewBox="0 0 40 24" className="text-gray-400">
            <path
              d="M 0 12 L 30 12 M 25 7 L 30 12 L 25 17"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Options (undecided) */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-lg bg-yellow-50 border-2 border-yellow-300 flex items-center justify-center">
              <span className="text-xl font-semibold text-yellow-700">選択肢</span>
            </div>
            <p className="text-sm text-gray-600 text-center font-semibold">提案</p>
          </div>

          {/* Arrow */}
          <svg width="40" height="24" viewBox="0 0 40 24" className="text-gray-400">
            <path
              d="M 0 12 L 30 12 M 25 7 L 30 12 L 25 17"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Human (end) */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-lg bg-gray-800 border-2 border-gray-900 flex items-center justify-center">
              <span className="text-2xl font-semibold text-white">人間</span>
            </div>
            <p className="text-sm text-gray-600 text-center font-semibold">確定</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-6 text-center">
        <p className="text-sm text-gray-600 leading-relaxed">
          mymemでは価値判断・最終決定をAIに委ねる設計は行いません。AIは思考を補助する存在であり、判断の主体にはなりません。
        </p>
      </div>
    </div>
  )
}
