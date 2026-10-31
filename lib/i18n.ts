export type Locale = "ja" | "en"

export const defaultLocale: Locale = "ja"

export const getBrowserLocale = (): Locale => {
  if (typeof navigator === "undefined") {
    return defaultLocale
  }

  return navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en"
}

export const getPresentationLocale = (search: string): Locale => {
  const requestedLocale = new URLSearchParams(search).get("lang")
  if (requestedLocale === "ja" || requestedLocale === "en") {
    return requestedLocale
  }

  return getBrowserLocale()
}
