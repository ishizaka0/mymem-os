import type { Locale } from "@/lib/i18n"

const copy: Record<
  Locale,
  { title: string; mainLines: [string, string]; supporting: string; tagline: string; layer: string }
> = {
  ja: {
    title: "価値・市場（Value / Market）",
    mainLines: ["AIモデルの競争ではなく、「思考の運用レイヤー」を拓く。", "開発・教育・ナレッジの広大な創造領域へ。"],
    supporting: "mymem は、AIの進化が加速するほど需要が高まり、持続可能な市場優位性を確立します。",
    tagline: "モデルは変わる。思考の運用は残る。",
    layer: "思考運用レイヤー",
  },
  en: {
    title: "Value / Market",
    mainLines: ["Not competing in AI models—but opening the thinking operation layer.", "A vast creative domain across development, education, and knowledge work."],
    supporting: "As AI accelerates, the value of mymem only grows.",
    tagline: "Models change. How we operate thinking remains.",
    layer: "Thinking Operation Layer",
  },
}

export default function Slide75({ locale }: { locale: Locale }) {
  const text = copy[locale]

  return (
    <div className="h-full w-full flex flex-col p-16">
      {/* Section title */}
      <h2 className="text-3xl font-light text-gray-800 mb-12">{text.title}</h2>

      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center gap-2 mt-8">
        <p className="text-3xl font-bold text-[#2A6DF5] text-center max-w-5xl leading-relaxed">
          {text.mainLines[0]}
        </p>

        <p className="text-3xl font-bold text-[#2A6DF5] text-center max-w-5xl leading-relaxed">
          {text.mainLines[1]}
        </p>

        <p className="text-xl text-gray-700 text-center max-w-4xl leading-relaxed mt-4">
          {text.supporting}
        </p>

        <p className="text-2xl font-light text-gray-600 text-center max-w-4xl leading-relaxed mt-12 mb-2 italic">
          {text.tagline}
        </p>

        <div className="w-full max-w-4xl">
          <svg width="100%" height="320" viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Hand-drawn style wavy rectangle for "AI Models" layer at bottom */}
            <path
              d="M 100 240 Q 102 238, 250 240 Q 252 242, 400 238 Q 402 240, 550 242 Q 552 240, 700 240 Q 702 242, 700 280 Q 698 282, 550 278 Q 548 280, 400 282 Q 398 280, 250 280 Q 248 282, 100 280 Q 98 278, 100 240"
              stroke="#9CA3AF"
              strokeWidth="2.5"
              fill="#F3F4F6"
              opacity="0.8"
            />
            <text x="400" y="265" fontSize="18" fontWeight="500" fill="#6B7280" textAnchor="middle">
              AI Models
            </text>

            {/* Hand-drawn style wavy rectangle for "Thinking Operation Layer" at top */}
            <path
              d="M 120 80 Q 122 78, 270 82 Q 272 80, 420 78 Q 422 80, 570 82 Q 572 80, 680 80 Q 682 82, 680 160 Q 678 162, 570 158 Q 568 160, 420 162 Q 418 160, 270 158 Q 268 160, 120 160 Q 118 158, 120 80"
              stroke="#2A6DF5"
              strokeWidth="3"
              fill="white"
            />
            <text x="400" y="110" fontSize="20" fontWeight="600" fill="#2A6DF5" textAnchor="middle">
              {text.layer}
            </text>
            {locale === "en" ? null : (
              <text x="400" y="135" fontSize="16" fontWeight="400" fill="#6B7280" textAnchor="middle">
                (Thinking Operation Layer)
              </text>
            )}

            {/* Freehand arrows showing separation/distinction */}
            <path
              d="M 200 180 Q 195 200, 190 220"
              stroke="#2A6DF5"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M 190 220 L 195 212 L 185 215 Z" fill="#2A6DF5" />

            <path
              d="M 400 180 Q 400 200, 400 220"
              stroke="#2A6DF5"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M 400 220 L 405 212 L 395 212 Z" fill="#2A6DF5" />

            <path
              d="M 600 180 Q 605 200, 610 220"
              stroke="#2A6DF5"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M 610 220 L 615 212 L 605 215 Z" fill="#2A6DF5" />

            {/* Decorative hand-drawn dots and marks */}
            <circle cx="150" cy="120" r="3" fill="#93C5FD" opacity="0.6" />
            <circle cx="650" cy="130" r="3" fill="#93C5FD" opacity="0.6" />
            <circle cx="300" cy="100" r="2.5" fill="#93C5FD" opacity="0.6" />
            <circle cx="500" cy="140" r="2.5" fill="#93C5FD" opacity="0.6" />

            {/* Wavy underline for emphasis */}
            <path
              d="M 150 195 Q 200 190, 250 195 Q 300 200, 350 195 Q 400 190, 450 195 Q 500 200, 550 195 Q 600 190, 650 195"
              stroke="#2A6DF5"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
              strokeDasharray="4,3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
