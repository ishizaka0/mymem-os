"use client"

import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/lib/i18n"

const copy = {
  ja: { label: "MyMem Connectで3D AIチャットを開く", detail: "3D AIチャットで資料を説明", opening: "サイドパネルを開いています…", opened: "サイドパネルを開きました", error: "開けませんでした。拡張を再読み込みして、もう一度押してください。" },
  en: { label: "Open 3D AI chat with MyMem Connect", detail: "Explore this presentation with 3D AI chat", opening: "Opening the side panel…", opened: "Side panel opened", error: "Could not open the panel. Reload the extension and try again." },
} satisfies Record<Locale, Record<string, string>>

/** Capability is announced by the installed extension; launching requires its
 * trusted-click listener. This page has no extension ID or messaging API. */
export function PresentationConnect({ locale }: { locale: Locale }) {
  const [available, setAvailable] = useState(false), [state, setState] = useState("")
  const button = useRef<HTMLButtonElement>(null), text = copy[locale]
  useEffect(() => {
    const read = () => {
      setAvailable(document.documentElement.dataset.mymemPresentationConnectVersion === "1")
      setState(button.current?.dataset.mymemPresentationState || "")
    }
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, { subtree: true, attributes: true, attributeFilter: ["data-mymem-presentation-connect-version", "data-mymem-presentation-state"] })
    read()
    return () => observer.disconnect()
  }, [])
  if (!available) return null
  return <div className="print-hide absolute right-8 bottom-20 z-20 flex max-w-[calc(100%-4rem)] flex-col items-end gap-2" data-mymem-private="presentation-connect">
    {state === "unavailable" && <p role="alert" className="max-w-64 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs leading-relaxed text-rose-800">{text.error}</p>}
    <Button ref={button} type="button" data-mymem-presentation-connect="" aria-label={text.label} aria-busy={state === "opening"} disabled={state === "opening"} title={text.label}
      className="h-auto min-h-12 gap-2.5 rounded-2xl border border-blue-100 bg-white/95 p-2 text-slate-800 shadow-sm hover:border-blue-300 hover:bg-blue-50 focus-visible:ring-blue-500 md:px-3">
      <img src="/images/mymem-connect.png" alt="" width={40} height={40} className="size-10 shrink-0 object-contain" />
      <span className="hidden text-left md:block"><span className="block text-sm font-semibold">MyMem Connect</span><span className="block text-[10px] font-normal text-slate-600">{text.detail}</span></span>
      {state === "opening" && <Loader2 className="size-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />}
    </Button>
    <span role="status" className="sr-only">{state === "opening" ? text.opening : state === "opened" ? text.opened : ""}</span>
  </div>
}
