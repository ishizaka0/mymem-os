import type { Locale } from "@/lib/i18n"

const copy: Record<Locale, { title: string; mainLines: [string, string]; supporting: string }> = {
  ja: {
    title: "定義 ー 「人とAIのあいだをつなぐ仕組み」",
    mainLines: ["AIが賢くなるほど、", "人とAIの意図はすれ違う。"],
    supporting: "mymemは、人間の創造を再び中心に取り戻すための仕組み。",
  },
  en: {
    title: "Definition — Connecting Humans and AI",
    mainLines: ["As AI becomes smarter,", "the intentions of humans and AI drift further apart."],
    supporting: "mymem is a system designed to bring human creativity back to the center.",
  },
}

export default function Slide2({ locale }: { locale: Locale }) {
  const text = copy[locale]

  return (
    <div className="h-full w-full flex flex-col p-16">
      {/* Section title */}
      <h2 className="text-3xl font-light text-gray-800 mb-16">{text.title}</h2>

      {/* Main content: two columns */}
      <div className="flex-1 flex items-center gap-16">
        {/* Left column: Text content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Main message */}
          <p className="text-5xl font-bold text-[#2A6DF5] mb-8 leading-relaxed text-balance">
            {text.mainLines[0]}
            <br />
            {text.mainLines[1]}
          </p>

          {/* Supporting text */}
          <p className="text-xl text-gray-600 leading-relaxed">{text.supporting}</p>
        </div>

        {/* Right column: Illustration in beige box */}
        <div className="flex-1 flex items-start justify-center">
          <div className="bg-[#F5F1E8] rounded-3xl p-16 w-full aspect-square max-h-[450px] flex items-center justify-center">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Human figure on left - hand-drawn style */}
              <g>
                {/* Head - slightly imperfect circle */}
                <path
                  d="M 120 100 Q 122 80 105 82 Q 88 84 82 95 Q 80 108 88 118 Q 98 122 108 118 Q 118 112 120 100"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Body - wavy line */}
                <path
                  d="M 100 118 Q 102 135 98 152 Q 100 168 100 185"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arms - curved, organic */}
                <path
                  d="M 98 135 Q 88 138 78 145 Q 72 150 68 155"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 102 135 Q 112 138 122 145 Q 128 150 132 155"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Legs - slightly curved */}
                <path
                  d="M 98 185 Q 92 205 88 225 Q 86 235 85 242"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 102 185 Q 108 205 112 225 Q 114 235 115 242"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrow - hand-drawn style */}
                <path
                  d="M 135 100 Q 145 98 155 100"
                  stroke="#2A6DF5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 148 95 L 155 100 L 150 105"
                  stroke="#2A6DF5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </g>

              {/* AI/Robot figure on right - hand-drawn geometric style */}
              <g>
                {/* Head - wobbly square */}
                <path
                  d="M 278 88 L 318 85 Q 322 88 322 92 L 320 122 Q 318 126 314 126 L 280 125 Q 276 122 278 118 Z"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Eyes - hand-drawn dots */}
                <circle cx="290" cy="102" r="3.5" fill="#1a1a1a" />
                <circle cx="310" cy="102" r="3.5" fill="#1a1a1a" />
                {/* Antenna - wavy line */}
                <path
                  d="M 300 85 Q 298 78 300 72"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="300" cy="69" r="4" fill="#1a1a1a" />
                {/* Body - irregular rectangle */}
                <path
                  d="M 283 130 L 317 128 Q 320 132 318 138 L 320 165 Q 318 172 314 172 L 286 170 Q 282 168 283 162 Z"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arms - curved organic lines */}
                <path
                  d="M 283 138 Q 275 142 268 148 Q 262 152 258 158"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 317 138 Q 325 142 332 148 Q 338 152 342 158"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Legs - slightly wavy */}
                <path
                  d="M 290 170 Q 288 185 290 200 Q 289 210 290 218"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 310 170 Q 312 185 310 200 Q 311 210 310 218"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrow - hand-drawn style */}
                <path
                  d="M 265 105 Q 255 103 245 105"
                  stroke="#2A6DF5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 252 100 L 245 105 L 250 110"
                  stroke="#2A6DF5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </g>

              {/* Dotted line in middle - hand-drawn dashes */}
              <path
                d="M 175 150 L 185 152 M 190 151 L 200 150 M 205 151 L 215 152 M 220 150 L 230 151"
                stroke="#999"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Question mark - hand-drawn style */}
              <path
                d="M 195 125 Q 198 120 203 120 Q 208 120 210 125 Q 210 130 205 133 Q 202 135 202 140"
                stroke="#999"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="202" cy="148" r="2.5" fill="#999" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
