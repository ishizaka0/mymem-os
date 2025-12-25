export default function Slide3() {
  return (
    <div className="h-full w-full flex flex-col p-16">
      {/* Section title at top left */}
      <h2 className="text-3xl font-light text-gray-800 mb-16">問題（Problem）</h2>

      {/* Main content: two columns */}
      <div className="flex-1 flex items-center gap-16">
        {/* Left column: Text content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Main message */}
          <p className="text-5xl font-bold text-[#2A6DF5] mb-8 leading-relaxed text-balance">
            暗黙知は、
            <br />
            個人の経験と判断に閉じている。
          </p>

          {/* Supporting text */}
          <p className="text-xl text-gray-600 leading-relaxed">属人化された知識は、共有されず、再現されない。</p>
        </div>

        {/* Right column: Illustration in beige box */}
        <div className="flex-1 flex items-start justify-center">
          <div className="bg-[#F5F1E8] rounded-3xl p-16 w-full aspect-square max-h-[450px] flex items-center justify-center">
            {/* Illustration: Scattered dots with some connections */}
            <svg width="400" height="300" viewBox="0 0 500 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Scattered disconnected dots */}
              <circle cx="80" cy="100" r="4" fill="#9CA3AF" />
              <circle cx="150" cy="80" r="3.5" fill="#9CA3AF" />
              <circle cx="200" cy="120" r="4" fill="#9CA3AF" />
              <circle cx="280" cy="90" r="3" fill="#9CA3AF" />
              <circle cx="350" cy="110" r="4" fill="#9CA3AF" />
              <circle cx="420" cy="85" r="3.5" fill="#9CA3AF" />
              <circle cx="120" cy="150" r="3" fill="#9CA3AF" />
              <circle cx="250" cy="160" r="4" fill="#9CA3AF" />
              <circle cx="380" cy="140" r="3.5" fill="#9CA3AF" />

              {/* A few connected dots (representing isolated knowledge) */}
              <circle cx="100" cy="180" r="4" fill="#2A6DF5" />
              <circle cx="140" cy="190" r="4" fill="#2A6DF5" />
              <circle cx="180" cy="185" r="4" fill="#2A6DF5" />
              <line x1="100" y1="180" x2="140" y2="190" stroke="#2A6DF5" strokeWidth="1.5" />
              <line x1="140" y1="190" x2="180" y2="185" stroke="#2A6DF5" strokeWidth="1.5" />

              {/* Another small isolated cluster */}
              <circle cx="320" cy="170" r="4" fill="#2A6DF5" />
              <circle cx="360" cy="175" r="4" fill="#2A6DF5" />
              <line x1="320" y1="170" x2="360" y2="175" stroke="#2A6DF5" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
