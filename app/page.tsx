"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Slide1 from "@/components/slides/slide-1"
import Slide2 from "@/components/slides/slide-2"
import Slide3 from "@/components/slides/slide-3"
import Slide4 from "@/components/slides/slide-4"
import Slide45 from "@/components/slides/slide-4-5"
import Slide5 from "@/components/slides/slide-5"
import Slide6 from "@/components/slides/slide-6"
import Slide7 from "@/components/slides/slide-7"
import Slide71 from "@/components/slides/slide-7-1"
import Slide75 from "@/components/slides/slide-7-5"
import Slide76 from "@/components/slides/slide-7-6"
import Slide8 from "@/components/slides/slide-8"
import Slide81 from "@/components/slides/slide-8-1"
import Slide82 from "@/components/slides/slide-8-2"
import { defaultLocale, getBrowserLocale, type Locale } from "@/lib/i18n"

type SlideComponent = (props: { locale: Locale }) => JSX.Element

const slides: SlideComponent[] = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide45,
  Slide5,
  Slide6,
  Slide7,
  Slide71,
  Slide81,
  Slide82, // Added AI Social Bridge slide after Use Cases
  Slide75,
  Slide76,
  Slide8,
]

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  useEffect(() => {
    const detected = getBrowserLocale()
    setLocale(detected)
    document.documentElement.lang = detected
  }, [])

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const CurrentSlideComponent = slides[currentSlide]

  const renderSlideChrome = (index: number, isPrint: boolean) => {
    const isFirst = index === 0
    const isLast = index === slides.length - 1

    return (
      <>
        <div className="absolute top-8 right-8 flex items-center gap-3 z-10">
          <img
            src="/images/ccvn-logo.png"
            alt="Creative Crew Inc."
            className="h-10 w-10"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={isPrint ? undefined : () => window.print()}
            disabled={isPrint}
            className="rounded-full hover:bg-gray-100"
            aria-label={locale === "en" ? "Download PDF" : "PDFをダウンロード"}
          >
            <Download className="h-5 w-5 text-gray-600" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={isPrint ? undefined : prevSlide}
            disabled={isPrint || isFirst}
            className="rounded-full bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {slides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={isPrint ? undefined : () => setCurrentSlide(dotIndex)}
                disabled={isPrint}
                className={`h-2 rounded-full transition-all ${
                  dotIndex === index ? "w-8 bg-[#2A6DF5]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={locale === "en" ? `Go to slide ${dotIndex + 1}` : `スライド ${dotIndex + 1} へ移動`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={isPrint ? undefined : nextSlide}
            disabled={isPrint || isLast}
            className="rounded-full bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute bottom-8 right-8 text-sm text-gray-400">
          {index + 1} / {slides.length}
        </div>

        <div className="absolute bottom-8 left-8 text-xs text-gray-400">© Creative Crew Inc. All rights reserved.</div>

        <div className="print-hide absolute bottom-20 left-8 max-w-md text-xs text-gray-500">
          {locale === "en" ? (
            <>
              PDF export
              <br />
              Use your browser print dialog and select “Save as PDF”.
            </>
          ) : (
            <>
              PDF出力について
              <br />
              この資料は、ブラウザの印刷機能を使ってPDFとして保存できます。
              <br />
              印刷ダイアログで「PDFに保存」を選択してください。
            </>
          )}
        </div>
      </>
    )
  }

  return (
    <div className="presentation-root relative h-screen w-screen overflow-hidden bg-white">
      <div className="print-only print-root">
        {slides.map((SlideComponent, index) => (
          <div key={index} className="print-slide">
            <div className="print-slide-frame relative h-full w-full overflow-hidden bg-white">
              <SlideComponent locale={locale} />
              {renderSlideChrome(index, true)}
            </div>
          </div>
        ))}
      </div>

      <div className="screen-only">
        <CurrentSlideComponent locale={locale} />
        {renderSlideChrome(currentSlide, false)}

        {/* Keyboard Navigation */}
        <div className="sr-only">
          {locale === "en"
            ? "Use the left and right arrow keys to navigate slides."
            : "キーボードの左右矢印キーでスライドを移動できます"}
        </div>
      </div>
    </div>
  )
}
