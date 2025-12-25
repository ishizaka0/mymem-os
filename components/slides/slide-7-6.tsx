export default function Slide76() {
  return (
    <div className="h-screen w-screen flex flex-col p-16 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl font-light text-gray-800 mb-12">製品ラインナップ（Product Lineup）</h2>

      {/* Main Title */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-light text-[#2A6DF5] mb-3">思想を、かたちに。</h1>
        <p className="text-xl text-gray-600 font-light">mymem を構成する4つのプロダクトと、その進化。</p>
      </div>

      {/* Four-layer Structure */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
          <h3 className="text-xl font-semibold text-[#2A6DF5] mb-2">mymem Lite</h3>
          <p className="text-sm text-gray-700 mb-2">アプリ・体験層</p>
          <p className="text-xs text-gray-600 leading-relaxed">一般ユーザー向け体験層。Chrome拡張・ローカル記憶AI</p>
          <p className="text-xs text-gray-500 mt-2">想定: 一般利用者</p>
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
          <h3 className="text-xl font-semibold text-[#2A6DF5] mb-2">mymem Pro</h3>
          <p className="text-sm text-gray-700 mb-2">開発・統合層</p>
          <p className="text-xs text-gray-600 leading-relaxed">AIとの記憶を個人の主権とする（Pro）</p>
          <p className="text-xs text-gray-500 mt-2">想定: 開発者・一般利用者</p>
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
          <h3 className="text-xl font-semibold text-[#2A6DF5] mb-2">mymem Enterprise</h3>
          <p className="text-sm text-gray-700 mb-2">企業統合層</p>
          <p className="text-xs text-gray-600 leading-relaxed">大規模組織向けの知識統合・協働基盤</p>
          <p className="text-xs text-gray-500 mt-2">想定: エンタープライズ</p>
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
          <h3 className="text-xl font-semibold text-[#2A6DF5] mb-2">mymem OS</h3>
          <p className="text-sm text-gray-700 mb-2">思想・基盤層</p>
          <p className="text-xs text-gray-600 leading-relaxed">思考構造と知の再現性を支える思想・基盤</p>
          <p className="text-xs text-gray-500 mt-2">想定: 経営層・研究層</p>
        </div>
      </div>

      {/* Timeline: Phase 1-4 */}
      <div className="flex items-start justify-center gap-6 mb-8">
        {/* Phase 1 */}
        <div className="flex-1 text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
            Phase 1
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">mymem Lite</h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            ローカル記憶AI（Chrome拡張）
            <br />
            思考と記憶の統合
          </p>
          <p className="text-xs font-medium text-green-600">リリース済（2025）</p>
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
            Phase 2
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">mymem Pro</h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            AI・人間・ツールを繋ぐワークフローAI基盤とクラウド統合
            <br />
            自動学習・自己拡張
          </p>
          <p className="text-xs font-medium text-blue-600">2026年4月リリース予定</p>
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
            Phase 3
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">mymem Enterprise</h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            組織知の統合と協働基盤
            <br />
            大規模チーム連携
          </p>
          <p className="text-xs font-medium text-orange-600">計画中（2026）</p>
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
            Phase 4
          </div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">mymem OS</h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-2">
            思考の構造そのものを司る知的基盤
            <br />
            AIと人の共創インフラ
          </p>
          <p className="text-xs font-medium text-purple-600">2027年から</p>
        </div>
      </div>
    </div>
  )
}
