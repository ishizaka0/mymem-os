import Image from "next/image"
import type { Locale } from "@/lib/i18n"

const copy: Record<
  Locale,
  { title: string; heading: string; subheading: string; description: string; caption: string }
> = {
  ja: {
    title: "実証（Proof）",
    heading: "思考が、現実をつくる。",
    subheading: "mymem Lite — AIとの対話から生まれた最初の実証",
    description: "コードを1行も書かず、AIとの自然言語対話だけで完成したChrome拡張。それが、mymem Liteです。",
    caption: "Built entirely through AI-guided workflow conversations.",
  },
  en: {
    title: "Proof",
    heading: "Thought shapes reality.",
    subheading: "mymem Lite — the first proof born from dialogue with AI",
    description:
      "Built without writing a single line of code, entirely through natural language conversations with AI. That is mymem Lite.",
    caption: "Built entirely through AI-guided workflow conversations.",
  },
}

export default function Slide45({ locale }: { locale: Locale }) {
  const text = copy[locale]

  return (
    <div className="h-full w-full flex flex-col bg-[#F8FAFC] p-16">
      <h2 className="text-3xl font-light text-gray-800 mb-16">{text.title}</h2>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center gap-16">
          {/* Left side: Text content */}
          <div className="flex-1 flex flex-col justify-center space-y-12">
            {/* Title */}
            <div>
              <h1 className="text-5xl font-bold text-[#2563EB] mb-4 leading-tight">{text.heading}</h1>
              <p className="text-xl text-gray-600">{text.subheading}</p>
            </div>

            <p className="text-2xl text-gray-700 leading-relaxed">{text.description}</p>
          </div>

          {/* Right side: UI image with caption below */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="relative">
              <Image
                src="/images/image.png"
                alt="mymem Lite UI"
                width={600}
                height={700}
                className="rounded-lg shadow-2xl"
                priority
                quality={85}
              />
            </div>
            <p className="text-xs text-gray-400 italic">{text.caption}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
