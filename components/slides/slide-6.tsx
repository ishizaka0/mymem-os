export default function Slide6() {
  return (
    <div className="h-full w-full flex flex-col p-16">
      <h2 className="text-3xl font-light text-gray-800 mb-8">再現性（Reproducibility）</h2>

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Illustration: Small dots connecting into a large network */}
        <div className="mb-12">
          <svg width="550" height="280" viewBox="0 0 550 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stage 1: Individual dots (left) */}
            <g opacity="0.5">
              <circle cx="50" cy="100" r="3" fill="#9CA3AF" />
              <circle cx="80" cy="120" r="3" fill="#9CA3AF" />
              <circle cx="60" cy="140" r="3" fill="#9CA3AF" />
            </g>

            {/* Stage 2: Small connected groups (center-left) */}
            <g opacity="0.7">
              <circle cx="150" cy="90" r="3.5" fill="#2A6DF5" />
              <circle cx="180" cy="100" r="3.5" fill="#2A6DF5" />
              <circle cx="165" cy="120" r="3.5" fill="#2A6DF5" />
              <line x1="150" y1="90" x2="180" y2="100" stroke="#2A6DF5" strokeWidth="1" />
              <line x1="180" y1="100" x2="165" y2="120" stroke="#2A6DF5" strokeWidth="1" />
              <line x1="165" y1="120" x2="150" y2="90" stroke="#2A6DF5" strokeWidth="1" />
            </g>

            {/* Stage 3: Larger network (right) */}
            <g>
              {/* Nodes */}
              <circle cx="320" cy="80" r="4" fill="#2A6DF5" />
              <circle cx="370" cy="90" r="4" fill="#2A6DF5" />
              <circle cx="420" cy="85" r="4" fill="#2A6DF5" />
              <circle cx="470" cy="100" r="4" fill="#2A6DF5" />
              <circle cx="300" cy="130" r="4" fill="#2A6DF5" />
              <circle cx="350" cy="140" r="4" fill="#2A6DF5" />
              <circle cx="400" cy="135" r="4" fill="#2A6DF5" />
              <circle cx="450" cy="150" r="4" fill="#2A6DF5" />
              <circle cx="330" cy="180" r="4" fill="#2A6DF5" />
              <circle cx="380" cy="185" r="4" fill="#2A6DF5" />
              <circle cx="430" cy="190" r="4" fill="#2A6DF5" />

              {/* Connections */}
              <line x1="320" y1="80" x2="370" y2="90" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="370" y1="90" x2="420" y2="85" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="420" y1="85" x2="470" y2="100" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="320" y1="80" x2="300" y2="130" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="370" y1="90" x2="350" y2="140" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="420" y1="85" x2="400" y2="135" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="470" y1="100" x2="450" y2="150" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="300" y1="130" x2="350" y2="140" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="350" y1="140" x2="400" y2="135" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="400" y1="135" x2="450" y2="150" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="300" y1="130" x2="330" y2="180" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="350" y1="140" x2="380" y2="185" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="400" y1="135" x2="430" y2="190" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="330" y1="180" x2="380" y2="185" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
              <line x1="380" y1="185" x2="430" y2="190" stroke="#2A6DF5" strokeWidth="1.5" opacity="0.6" />
            </g>

            {/* Arrows showing progression */}
            <path d="M 100 120 L 130 110" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrow-gray)" />
            <path d="M 210 110 L 270 110" stroke="#9CA3AF" strokeWidth="1.5" markerEnd="url(#arrow-gray)" />

            <defs>
              <marker id="arrow-gray" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#9CA3AF" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Main message */}
        <p className="text-4xl font-bold text-[#2A6DF5] mb-6 text-center max-w-4xl leading-relaxed text-balance">
          個やAIの知識を手順に変え、手順を集合の知へと変える。
        </p>

        {/* Supporting text */}
        <p className="text-xl text-gray-600 text-center max-w-3xl leading-relaxed">それが「再現知」のはじまり。</p>
      </div>
    </div>
  )
}
