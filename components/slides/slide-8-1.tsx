export default function Slide81() {
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

      <h2 className="text-3xl font-light text-gray-800 mb-16">活用例（Use Cases）</h2>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-4xl font-bold text-[#2A6DF5] leading-tight">あらゆる専門家の"思考手順"を再利用できる</h1>
          <p className="text-xl text-gray-700">スキルの再利用が、新しい創造の起点になる</p>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
          {/* Developer case */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
            <div className="text-4xl mb-2">🧠</div>
            <h3 className="text-lg font-bold text-gray-800">開発者の場合</h3>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>Next.jsで多言語対応サイトを作りたい</p>
              <p className="text-[#2A6DF5]">→ プロのワークフローを検索・クローン</p>
              <p>→ 自分用に再構成</p>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 italic">💬 初心者でもプロの思考手順を再現できる。</p>
            </div>
          </div>

          {/* Educator case */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
            <div className="text-4xl mb-2">🎓</div>
            <h3 className="text-lg font-bold text-gray-800">教師・教育者の場合</h3>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>AIリテラシー授業構成を考えたい</p>
              <p className="text-[#2A6DF5]">→ 世界の教師の授業設計スキルを検索</p>
              <p>→ 自クラスに最適化</p>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 italic">💬 教育の"再現知"が生まれる。</p>
            </div>
          </div>

          {/* Creator case */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 space-y-4">
            <div className="text-4xl mb-2">🎨</div>
            <h3 className="text-lg font-bold text-gray-800">クリエイターの場合</h3>
            <div className="space-y-2 text-sm text-gray-600 leading-relaxed">
              <p>広告コピーを書きたい</p>
              <p className="text-[#2A6DF5]">→ 共感ワード抽出スキルを検索</p>
              <p>→ ブランドに合わせ再構成</p>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 italic">💬 思考の再利用で創造スピードが爆上がり。</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">Practical Use Cases of Skill Network</p>
      </div>
    </div>
  )
}
