import type { Locale } from "@/lib/i18n"

const copy: Record<
  Locale,
  {
    title: string
    mainLines: [string, string]
    labels: {
      human: string
      humanNote: string
      aiNote: string
      options: string
      proposals: string
      finalDecision: string
    }
    note: string
  }
> = {
  ja: {
    title: "大切にしていること（What We Care About）",
    mainLines: ["AIは「提案」するが、", "「確定」するのは常に人間"],
    labels: {
      human: "人間",
      humanNote: "価値・問い",
      aiNote: "整理・比較",
      options: "選択肢",
      proposals: "提案",
      finalDecision: "確定",
    },
    note: "mymemでは価値判断・最終決定をAIに委ねる設計は行いません。AIは思考を補助する存在であり、判断の主体にはなりません。",
  },
  en: {
    title: "What We Care About",
    mainLines: ["AI can propose—but", "humans always decide."],
    labels: {
      human: "Human",
      humanNote: "Values & questions",
      aiNote: "Organize & compare",
      options: "Options",
      proposals: "Proposals",
      finalDecision: "Final decision",
    },
    note: "mymem never delegates value judgment or final decisions to AI. AI exists to support thinking—not to replace human judgment.",
  },
}

export default function Slide82({ locale }: { locale: Locale }) {
  const text = copy[locale]

  return (
    <div className="relative h-full w-full bg-white p-16 flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 opacity-40" />

      {/* Section title */}
      <div className="relative z-10 mb-16">
        <h2 className="text-3xl font-light text-gray-800">{text.title}</h2>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-16 max-w-5xl mx-auto pt-16">
        <div className="text-center">
          <h3 className="text-5xl font-bold text-[#337DFF] mb-8 leading-tight">
            {text.mainLines[0]}
            <br />
            {text.mainLines[1]}
          </h3>
        </div>

        {/* Flow diagram - unchanged */}
        <div className="flex items-center justify-center gap-6">
          {/* Human (start) */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-lg bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
              <span className="text-2xl font-semibold text-gray-700">{text.labels.human}</span>
            </div>
            <p className="text-sm text-gray-600 text-center">{text.labels.humanNote}</p>
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
            <p className="text-sm text-gray-600 text-center">{text.labels.aiNote}</p>
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
              <span className="text-xl font-semibold text-yellow-700">{text.labels.options}</span>
            </div>
            <p className="text-sm text-gray-600 text-center font-semibold">{text.labels.proposals}</p>
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
              <span className="text-2xl font-semibold text-white">{text.labels.human}</span>
            </div>
            <p className="text-sm text-gray-600 text-center font-semibold">{text.labels.finalDecision}</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-6 text-center">
        <p className="text-sm text-gray-600 leading-relaxed">{text.note}</p>
      </div>
    </div>
  )
}
