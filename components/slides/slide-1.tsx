import Image from "next/image"
import type { Locale } from "@/lib/i18n"

const copy: Record<Locale, { title: string; subtitle: string; product: string }> = {
  ja: {
    title: "思考の手順を、すべての人に。",
    subtitle: "私たちが作っているもの",
    product: "mymem",
  },
  en: {
    title: "Making Thinking Workflows Accessible to Everyone",
    subtitle: "What we are building",
    product: "mymem",
  },
}

export default function Slide1({ locale }: { locale: Locale }) {
  const text = copy[locale]

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Wave lines with larger amplitude */}
          <path
            d="M 0 200 Q 240 100, 480 200 T 960 200 T 1440 200 T 1920 200"
            stroke="#9CA3AF"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 0 400 Q 240 300, 480 400 T 960 400 T 1440 400 T 1920 400"
            stroke="#9CA3AF"
            strokeWidth="3.5"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 0 600 Q 240 500, 480 600 T 960 600 T 1440 600 T 1920 600"
            stroke="#9CA3AF"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 0 800 Q 240 700, 480 800 T 960 800 T 1440 800 T 1920 800"
            stroke="#9CA3AF"
            strokeWidth="3.5"
            fill="none"
            opacity="0.6"
          />

          {/* Circular dots along wave lines */}
          {/* Dots on first wave */}
          <circle cx="0" cy="200" r="6" fill="#2A6DF5" opacity="0.6" />
          <circle cx="240" cy="100" r="6" fill="#2A6DF5" opacity="0.6" />
          <circle cx="480" cy="200" r="6" fill="#2A6DF5" opacity="0.6" />
          <circle cx="720" cy="100" r="6" fill="#2A6DF5" opacity="0.6" />
          <circle cx="960" cy="200" r="6" fill="#2A6DF5" opacity="0.6" />
          <circle cx="1200" cy="100" r="6" fill="#2A6DF5" opacity="0.6" />
          <circle cx="1440" cy="200" r="6" fill="#2A6DF5" opacity="0.6" />
          <circle cx="1680" cy="100" r="6" fill="#2A6DF5" opacity="0.6" />

          {/* Dots on second wave */}
          <circle cx="0" cy="400" r="6" fill="#2A6DF5" opacity="0.5" />
          <circle cx="240" cy="300" r="6" fill="#2A6DF5" opacity="0.5" />
          <circle cx="480" cy="400" r="6" fill="#2A6DF5" opacity="0.5" />
          <circle cx="720" cy="300" r="6" fill="#2A6DF5" opacity="0.5" />
          <circle cx="960" cy="400" r="6" fill="#2A6DF5" opacity="0.5" />
          <circle cx="1200" cy="300" r="6" fill="#2A6DF5" opacity="0.5" />
          <circle cx="1440" cy="400" r="6" fill="#2A6DF5" opacity="0.5" />

          {/* Dots on third wave */}
          <circle cx="120" cy="550" r="5" fill="#2A6DF5" opacity="0.4" />
          <circle cx="360" cy="500" r="5" fill="#2A6DF5" opacity="0.4" />
          <circle cx="600" cy="550" r="5" fill="#2A6DF5" opacity="0.4" />
          <circle cx="840" cy="500" r="5" fill="#2A6DF5" opacity="0.4" />
          <circle cx="1080" cy="550" r="5" fill="#2A6DF5" opacity="0.4" />
          <circle cx="1320" cy="500" r="5" fill="#2A6DF5" opacity="0.4" />
          <circle cx="1560" cy="550" r="5" fill="#2A6DF5" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl gap-8 mt-64">
        <h1 className="text-6xl font-bold text-[#2A6DF5] leading-tight">{text.title}</h1>
        <p className="text-xl text-gray-600">{text.subtitle}</p>
        <p className="text-3xl font-semibold text-gray-700">{text.product}</p>

        <div className="flex items-center justify-center gap-8 mt-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mymem_app_logo-gO4wAFp0oAUcqPzEChQi0VrEp0a9Kr.png"
            alt="MyMem App Logo"
            width={64}
            height={64}
            quality={75}
            priority
            className="h-16 w-16 object-contain"
          />
          <Image
            src="/images/mymem-mascot-small.png"
            alt="MyMem Mascot"
            width={80}
            height={80}
            quality={75}
            priority
            className="h-20 w-20 object-contain"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mymem_logo-UyxeOeMemq5HmZZxk4K0FMoYhK8VZ3.png"
            alt="MyMem Logo"
            width={64}
            height={64}
            quality={75}
            priority
            className="h-16 w-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
