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

const slides = [
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

  const handleDownloadPDF = () => {
    window.print()
  }

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      <div className="print-all-slides">
        {slides.map((SlideComponent, index) => (
          <div key={index} className="print-slide-page">
            <SlideComponent />
          </div>
        ))}
      </div>

      <div className="screen-view">
        <CurrentSlideComponent />

        <div className="absolute top-8 right-8 flex items-center gap-3 z-10">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ccvnlogo-wRNUvgED6QaFtUAfFxavMcSKztXtKQ.png"
            alt="Creative Crew Inc."
            className="h-10 w-10"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDownloadPDF}
            className="rounded-full hover:bg-gray-100"
            aria-label="PDFをダウンロード"
          >
            <Download className="h-5 w-5 text-gray-600" />
          </Button>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="rounded-full bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-[#2A6DF5]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`スライド ${index + 1} へ移動`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="rounded-full bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 text-sm text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>

        <div className="absolute bottom-8 left-8 text-xs text-gray-400">© Creative Crew Inc. All rights reserved.</div>

        {/* Keyboard Navigation */}
        <div className="sr-only">キーボードの左右矢印キーでスライドを移動できます</div>
      </div>
    </div>
  )
}
