import type { Locale } from "@/lib/i18n"

const copy: Record<
  Locale,
  {
    title: string
    headline: string
    subhead: string
    footer: string
    cases: Array<{
      title: string
      lines: [string, string, string]
      note: string
    }>
  }
> = {
  ja: {
    title: "活用例（Use Cases）",
    headline: "あらゆる専門家の\"思考手順\"を再利用できる",
    subhead: "スキルの再利用が、新しい創造の起点になる",
    footer: "Skill Networkの活用例",
    cases: [
      {
        title: "開発者の場合",
        lines: ["Next.jsで多言語対応サイトを作りたい", "→ プロのワークフローを検索・クローン", "→ 自分用に再構成"],
        note: "💬 初心者でもプロの思考手順を再現できる。",
      },
      {
        title: "教師・教育者の場合",
        lines: ["AIリテラシー授業構成を考えたい", "→ 世界の教師の授業設計スキルを検索", "→ 自クラスに最適化"],
        note: "💬 教育の\"再現知\"が生まれる。",
      },
      {
        title: "クリエイターの場合",
        lines: ["広告コピーを書きたい", "→ 共感ワード抽出スキルを検索", "→ ブランドに合わせ再構成"],
        note: "💬 思考の再利用で創造スピードが爆上がり。",
      },
    ],
  },
  en: {
    title: "Use Cases",
    headline: "Reuse the thinking workflows of experts across any field.",
    subhead: "Reusing skills creates new starting points for creation.",
    footer: "Practical Use Cases of Skill Network",
    cases: [
      {
        title: "Developers",
        lines: [
          "Want to build a multilingual Next.js site",
          "→ Search and clone a professional workflow",
          "→ Reconstruct it for personal use",
        ],
        note: "💬 Even beginners can reproduce expert thinking.",
      },
      {
        title: "Educators",
        lines: [
          "Designing AI literacy classes",
          "→ Search teaching frameworks from around the world",
          "→ Adapt them to their own classrooms",
        ],
        note: "💬 Reproducible educational knowledge emerges.",
      },
      {
        title: "Creators",
        lines: [
          "Writing advertising copy",
          "→ Search empathy-based copywriting workflows",
          "→ Rebuild them for a brand",
        ],
        note: "💬 Creative speed increases dramatically.",
      },
    ],
  },
}

export default function Slide81({ locale }: { locale: Locale }) {
  const text = copy[locale]

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-blue-50 to-white p-16 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="2" fill="#2A6DF5" />
            <line x1="50" y1="50" x2="100" y2="50" stroke="#2A6DF5" strokeWidth="1" />
            <line x1="50" y1="50" x2="50" y2="100" stroke="#2A6DF5" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network)" />
      </svg>

      <h2 className="text-3xl font-light text-gray-800 mb-16">{text.title}</h2>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-4xl font-bold text-[#2A6DF5] leading-tight">{text.headline}</h1>
          <p className="text-xl text-gray-700">{text.subhead}</p>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Developer case */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
            <div className="text-4xl mb-2">🧠</div>
            <h3 className="text-lg font-bold text-gray-800">{text.cases[0].title}</h3>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>{text.cases[0].lines[0]}</p>
              <p className="text-[#2A6DF5]">{text.cases[0].lines[1]}</p>
              <p>{text.cases[0].lines[2]}</p>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 italic">{text.cases[0].note}</p>
            </div>
          </div>

          {/* Educator case */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
            <div className="text-4xl mb-2">🎓</div>
            <h3 className="text-lg font-bold text-gray-800">{text.cases[1].title}</h3>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>{text.cases[1].lines[0]}</p>
              <p className="text-[#2A6DF5]">{text.cases[1].lines[1]}</p>
              <p>{text.cases[1].lines[2]}</p>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 italic">{text.cases[1].note}</p>
            </div>
          </div>

          {/* Creator case */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="text-lg font-bold text-gray-800">{text.cases[2].title}</h3>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>{text.cases[2].lines[0]}</p>
              <p className="text-[#2A6DF5]">{text.cases[2].lines[1]}</p>
              <p>{text.cases[2].lines[2]}</p>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 italic">{text.cases[2].note}</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">{text.footer}</p>
      </div>
    </div>
  )
}
