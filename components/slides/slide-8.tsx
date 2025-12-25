import type { Locale } from "@/lib/i18n"

const copy: Record<
  Locale,
  { label: string; mainLines: [string, string]; product: string; tagline: string }
> = {
  ja: {
    label: "エピローグ",
    mainLines: ["AIが賢くなるほど、", "人間の創造は終わらない。"],
    product: "mymem OS",
    tagline: "忘れてないでいてくれる、もうひとりの自分。",
  },
  en: {
    label: "Epilogue",
    mainLines: ["As AI grows smarter,", "human creativity does not end."],
    product: "mymem OS",
    tagline: "Another self that never forgets.",
  },
}

export default function Slide8({ locale }: { locale: Locale }) {
  const text = copy[locale]

  return (
    <div className="h-full w-full flex flex-col p-16 pb-32 relative overflow-hidden bg-white">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Multiple wavy lines flowing horizontally with slight upward trend */}
        <path
          d="M 0 650 Q 480 620, 960 580 T 1920 520"
          stroke="#93C5FD"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M 0 550 Q 480 530, 960 500 T 1920 450"
          stroke="#60A5FA"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M 0 450 Q 480 440, 960 420 T 1920 380"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>

      <div className="relative z-10 flex flex-col h-full">
        {/* Epilogue label at top */}
        <div className="flex justify-center pt-8">
          <p className="text-lg text-gray-400 tracking-wider">{text.label}</p>
        </div>

        {/* Main content centered vertically */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12 max-w-6xl mx-auto mt-32">
          {/* Main headline */}
          <div className="text-center space-y-2">
            <p className="text-5xl font-normal text-gray-900">{text.mainLines[0]}</p>
            <p className="text-5xl font-normal text-gray-900">{text.mainLines[1]}</p>
          </div>

          <div className="text-center space-y-3 mt-4">
            <p className="text-2xl font-semibold text-[#2A6DF5]">{text.product}</p>
            <p className="text-base text-gray-600">{text.tagline}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
