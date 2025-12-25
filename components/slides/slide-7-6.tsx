import type { Locale } from "@/lib/i18n"

const copy: Record<
  Locale,
  {
    title: string
    tagline: string
    subheading: string
    cards: Array<{ name: string; layer: string; description: string; audience: string }>
    phases: Array<{ title: string; name: string; details: [string, string]; status: string }>
  }
> = {
  ja: {
    title: "製品ラインナップ（Product Lineup）",
    tagline: "思想を、かたちに。",
    subheading: "mymem を構成する4つのプロダクトと、その進化。",
    cards: [
      {
        name: "mymem Lite",
        layer: "アプリ・体験層",
        description: "一般ユーザー向け体験層。Chrome拡張・ローカル記憶AI",
        audience: "想定: 一般利用者",
      },
      {
        name: "mymem Pro",
        layer: "開発・統合層",
        description: "AIとの記憶を個人の主権とする（Pro）",
        audience: "想定: 開発者・一般利用者",
      },
      {
        name: "mymem Enterprise",
        layer: "企業統合層",
        description: "大規模組織向けの知識統合・協働基盤",
        audience: "想定: エンタープライズ",
      },
      {
        name: "mymem OS",
        layer: "思想・基盤層",
        description: "思考構造と知の再現性を支える思想・基盤",
        audience: "想定: 経営層・研究層",
      },
    ],
    phases: [
      {
        title: "Phase 1",
        name: "mymem Lite",
        details: ["ローカル記憶AI（Chrome拡張）", "思考と記憶の統合"],
        status: "リリース済（2025）",
      },
      {
        title: "Phase 2",
        name: "mymem Pro",
        details: ["AI・人間・ツールを繋ぐワークフローAI基盤とクラウド統合", "自動学習・自己拡張"],
        status: "2026年4月リリース予定",
      },
      {
        title: "Phase 3",
        name: "mymem Enterprise",
        details: ["組織知の統合と協働基盤", "大規模チーム連携"],
        status: "計画中（2026）",
      },
      {
        title: "Phase 4",
        name: "mymem OS",
        details: ["思考の構造そのものを司る知的基盤", "AIと人の共創インフラ"],
        status: "2027年から",
      },
    ],
  },
  en: {
    title: "Product Lineup",
    tagline: "Turning philosophy into form.",
    subheading: "The four products that make up mymem—and their evolution.",
    cards: [
      {
        name: "mymem Lite",
        layer: "Experience layer",
        description: "Experience layer for general users. Chrome extension and local memory AI.",
        audience: "Target: general users",
      },
      {
        name: "mymem Pro",
        layer: "Development & integration layer",
        description: "Personal sovereignty over memory with AI (Pro).",
        audience: "Target: developers and general users",
      },
      {
        name: "mymem Enterprise",
        layer: "Enterprise integration layer",
        description: "Knowledge integration and collaboration platform for large organizations.",
        audience: "Target: enterprise",
      },
      {
        name: "mymem OS",
        layer: "Philosophical & foundational layer",
        description: "Philosophical foundation supporting thinking structures and reproducible knowledge.",
        audience: "Target: executives and research",
      },
    ],
    phases: [
      {
        title: "Phase 1",
        name: "mymem Lite",
        details: ["Local memory AI (Chrome extension)", "Integration of thinking and memory"],
        status: "Released (2025)",
      },
      {
        title: "Phase 2",
        name: "mymem Pro",
        details: ["Workflow AI foundation connecting AI, humans, and tools, with cloud integration", "Autonomous learning and self-expansion"],
        status: "Planned release: April 2026",
      },
      {
        title: "Phase 3",
        name: "mymem Enterprise",
        details: ["Organizational knowledge integration and collaboration platform", "Large-team collaboration"],
        status: "Planned (2026)",
      },
      {
        title: "Phase 4",
        name: "mymem OS",
        details: ["Intellectual foundation governing the structure of thought itself", "Co-creation infrastructure for AI and humans"],
        status: "From 2027",
      },
    ],
  },
}

export default function Slide76({ locale }: { locale: Locale }) {
  const text = copy[locale]

  return (
    <div className="h-screen w-screen flex flex-col p-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl font-light text-gray-800 mb-12">{text.title}</h2>

      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-light text-[#2A6DF5] mb-3">{text.tagline}</h1>
        <p className="text-xl text-gray-600 font-light">{text.subheading}</p>
      </div>

      {/* Four-layer Structure */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
          <h3 className="text-xl font-semibold text-[#2A6DF5] mb-2">{text.cards[0].name}</h3>
          <p className="text-sm text-gray-700 mb-2">{text.cards[0].layer}</p>
          <p className="text-xs text-gray-600 leading-relaxed">{text.cards[0].description}</p>
          <p className="text-xs text-gray-500 mt-2">{text.cards[0].audience}</p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center">
          <svg width="30" height="30" viewBox="0 0 40 40" className="text-[#2A6DF5]">
            <path
              d="M10 20 L30 20 M30 20 L25 15 M30 20 L25 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
          <h3 className="text-xl font-semibold text-[#2A6DF5] mb-2">{text.cards[1].name}</h3>
          <p className="text-sm text-gray-700 mb-2">{text.cards[1].layer}</p>
          <p className="text-xs text-gray-600 leading-relaxed">{text.cards[1].description}</p>
          <p className="text-xs text-gray-500 mt-2">{text.cards[1].audience}</p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center">
          <svg width="30" height="30" viewBox="0 0 40 40" className="text-[#2A6DF5]">
            <path
              d="M10 20 L30 20 M30 20 L25 15 M30 20 L25 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Layer 3: mymem Enterprise */}
        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
          <h3 className="text-xl font-semibold text-[#2A6DF5] mb-2">{text.cards[2].name}</h3>
          <p className="text-sm text-gray-700 mb-2">{text.cards[2].layer}</p>
          <p className="text-xs text-gray-600 leading-relaxed">{text.cards[2].description}</p>
          <p className="text-xs text-gray-500 mt-2">{text.cards[2].audience}</p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center">
          <svg width="30" height="30" viewBox="0 0 40 40" className="text-[#2A6DF5]">
            <path
              d="M10 20 L30 20 M30 20 L25 15 M30 20 L25 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Layer 4: mymem OS */}
        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
          <h3 className="text-xl font-semibold text-[#2A6DF5] mb-2">{text.cards[3].name}</h3>
          <p className="text-sm text-gray-700 mb-2">{text.cards[3].layer}</p>
          <p className="text-xs text-gray-600 leading-relaxed">{text.cards[3].description}</p>
          <p className="text-xs text-gray-500 mt-2">{text.cards[3].audience}</p>
        </div>
      </div>

      {/* Timeline: Phase 1-4 */}
      <div className="flex items-start justify-center gap-6 mb-8">
        {/* Phase 1 */}
        <div className="flex-1 text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
            {text.phases[0].title}
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{text.phases[0].name}</h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            {text.phases[0].details[0]}
            <br />
            {text.phases[0].details[1]}
          </p>
          <p className="text-xs font-medium text-green-600">{text.phases[0].status}</p>
        </div>

        {/* Arrow */}
        <div className="flex items-center pt-8">
          <svg width="30" height="30" viewBox="0 0 40 40" className="text-gray-400">
            <path
              d="M10 20 L30 20 M30 20 L25 15 M30 20 L25 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1 text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
            {text.phases[1].title}
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{text.phases[1].name}</h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            {text.phases[1].details[0]}
            <br />
            {text.phases[1].details[1]}
          </p>
          <p className="text-xs font-medium text-blue-600">{text.phases[1].status}</p>
        </div>

        {/* Arrow */}
        <div className="flex items-center pt-8">
          <svg width="30" height="30" viewBox="0 0 40 40" className="text-gray-400">
            <path
              d="M10 20 L30 20 M30 20 L25 15 M30 20 L25 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1 text-center">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
            {text.phases[2].title}
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{text.phases[2].name}</h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            {text.phases[2].details[0]}
            <br />
            {text.phases[2].details[1]}
          </p>
          <p className="text-xs font-medium text-orange-600">{text.phases[2].status}</p>
        </div>

        {/* Arrow */}
        <div className="flex items-center pt-8">
          <svg width="30" height="30" viewBox="0 0 40 40" className="text-gray-400">
            <path
              d="M10 20 L30 20 M30 20 L25 15 M30 20 L25 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex-1 text-center">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
            {text.phases[3].title}
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{text.phases[3].name}</h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            {text.phases[3].details[0]}
            <br />
            {text.phases[3].details[1]}
          </p>
          <p className="text-xs font-medium text-purple-600">{text.phases[3].status}</p>
        </div>
      </div>
    </div>
  )
}
