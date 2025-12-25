export type Locale = "ja" | "en"

export const defaultLocale: Locale = "ja"

export const getBrowserLocale = (): Locale => {
  if (typeof navigator === "undefined") {
    return defaultLocale
  }

  return navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en"
}
